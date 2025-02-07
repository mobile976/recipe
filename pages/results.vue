<template>
  <div class="page-container">
    <header class="header">
      <h1>Search Results</h1>
      <nuxt-link to="/">Back to Search</nuxt-link>
    </header>
    <main class="main-content">
      <section class="search-section">
        <h2>Recipes Found</h2>
        <div v-if="recipes.length > 0">
          <div v-for="recipe in filteredRecipes" :key="recipe.id">
            <RecipeCard
              :recipe="recipe"
              :isOwner="isOwner(recipe)"
              @edit="editRecipe"
              @delete="deleteRecipe"
            />
          </div>
        </div>
        <div v-else>
          <p>No recipes found. Try another search!</p>
        </div>
      </section>

      <section v-if="editingRecipe" class="edit-recipe-section">
        <EditRecipe :recipe="editingRecipe" @cancel="cancelEdit" @save="saveRecipe" />
      </section>
    </main>
  </div>
</template>

<script>
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db, auth } from "~/plugins/firebase";
import RecipeCard from "~/components/RecipeCard";
import EditRecipe from "~/components/EditRecipe";

export default {
  components: { RecipeCard, EditRecipe },
  data() {
    return {
      recipes: [],
      user: null,
      editingRecipe: null,
    };
  },
  computed: {
    filteredRecipes() {
      const query = this.$route.query.query || "";
      const cuisine = this.$route.query.cuisine || "";

      return this.recipes.filter((recipe) => {
        const matchesQuery = query
          ? recipe.name.toLowerCase().includes(query.toLowerCase())
          : true;
        const matchesCuisine = cuisine ? recipe.cuisine === cuisine : true;

        return matchesQuery && matchesCuisine;
      });
    },
  },
  async mounted() {
    try {
      const recipesRef = collection(db, "recipes");
      const querySnapshot = await getDocs(recipesRef);
      this.recipes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (process.env.NODE_ENV === "development") {
        this.user = {
          displayName: "Test User",
          uid: "test-user-id",
        };
      } else {
        this.user = auth.currentUser;
      }
    } catch (error) {
      console.error("Error fetching recipes: ", error.message);
    }
  },
  methods: {
    isOwner(recipe) {
      return this.user && recipe.uid === this.user.uid;
    },
    editRecipe(recipe) {
      this.editingRecipe = { ...recipe };
    },
    cancelEdit() {
      this.editingRecipe = null;
    },
    async saveRecipe(updatedRecipe) {
      try {
        const recipeRef = doc(db, "recipes", updatedRecipe.id);
        await updateDoc(recipeRef, {
          name: updatedRecipe.name,
          cuisine: updatedRecipe.cuisine,
          ingredients: updatedRecipe.ingredients,
          image: updatedRecipe.image,
        });
        alert("Recipe updated successfully!");

        this.recipes = this.recipes.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        );

        this.editingRecipe = null;
      } catch (error) {
        console.error("Error updating recipe: ", error.message);
        alert("Failed to update recipe.");
      }
    },
    async deleteRecipe(recipeId) {
      if (!confirm("Are you sure you want to delete this recipe?")) return;

      try {
        const recipeRef = doc(db, "recipes", recipeId);
        await deleteDoc(recipeRef);
        alert("Recipe deleted successfully!");
        this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
      } catch (error) {
        console.error("Error deleting recipe: ", error.message);
        alert("Failed to delete recipe.");
      }
    },
  },
};
</script>
<style scoped src="@/assets/styles/components/search-section.css"></style>
<style scoped>
@import "@/assets/styles/variables.css";

.page-container {
  background-color: #ffc181;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}

.header {
  background-color: #ff9021;
  color: #f5f5f5;
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin: 20px 0px 20px 0px;
  width: 95%;
}

.header h1 {
  font-size: 2.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #f5f5f5;
}

.header a {
  display: inline-block;
  color: #f5f5f5;
  background-color: #aa5412;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  width: 100%;
}

.edit-recipe-section {
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
