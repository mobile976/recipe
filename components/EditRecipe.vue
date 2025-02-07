<template>
    <div class="edit-recipe">
      <h2>Edit Recipe: {{ recipe.name }}</h2>
      <form @submit.prevent="save">
        <div>
          <label for="name">Name:</label>
          <input v-model="editedRecipe.name" id="name" />
        </div>
        <div>
          <label for="cuisine">Cuisine:</label>
          <input v-model="editedRecipe.cuisine" id="cuisine" />
        </div>
        <div>
          <label for="ingredients">Ingredients:</label>
          <textarea v-model="editedRecipe.ingredients" id="ingredients"></textarea>
        </div>
        <div>
          <label for="image">Image URL:</label>
          <input v-model="editedRecipe.image" id="image" />
        </div>
        <button type="submit">Save</button>
        <button type="button" @click="$emit('cancel')">Cancel</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipe: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        editedRecipe: { ...this.recipe },
      };
    },
    methods: {
      save() {
        this.$emit("save", this.editedRecipe);
      },
    },
  };
  </script>
  
  <style scoped>
  .edit-recipe {
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .edit-recipe label {
    display: block;
    margin: 8px 0 4px;
  }
  .edit-recipe input,
  .edit-recipe textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  </style>  