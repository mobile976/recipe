<template>
  <section class="search-section">
    <h2>Add a Recipe</h2>
    <input v-model="name" type="text" placeholder="Recipe Name" />
    <input v-model="cuisine" type="text" placeholder="Cuisine" />
    <textarea v-model="ingredients" placeholder="Ingredients (comma-separated)"></textarea>
    <input v-model="image" type="text" placeholder="Image URL" />
    <button @click="addRecipe">Add Recipe</button>
  </section>
</template>

<script>
import { db } from "~/plugins/firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      cuisine: "",
      ingredients: "",
      image: "",
    };
  },
  methods: {
    async addRecipe() {
      const user = process.env.NODE_ENV === "development" 
        ? { uid: "test-user-id" }
        : auth.currentUser;

      if (!user) return alert("Please log in.");

      try {
        await addDoc(collection(db, "recipes"), {
          name: this.name,
          cuisine: this.cuisine,
          ingredients: this.ingredients.split(","),
          image: this.image,
          uid: user.uid,
        });
        alert("Recipe added successfully!");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped src="@/assets/styles/components/search-section.css"></style>