<template>
  <div class="recipe-card">
    <img :src="recipe.image" :alt="recipe.name" />
    <h3>{{ recipe.name }}</h3>
    <p><strong>Cuisine:</strong> {{ recipe.cuisine }}</p>
    <p><strong>Ingredients:</strong> {{ recipe.ingredients.join(", ") }}</p>
    <div v-if="isOwner">
      <button @click="$emit('edit', recipe)">Edit</button>
      <button class="delete" @click="$emit('delete', recipe.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    isOwner: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped src="@/assets/styles/components/recipe-card.css"></style>