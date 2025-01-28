<template>
  <div class="search-section">
    <h2>Search Recipes</h2>
    <input v-model="query" type="text" placeholder="Search for recipes..." />
    <select v-model="cuisine">
      <option value="">All Cuisines</option>
      <option value="Mongolian">Mongolian</option>
      <option value="Asian">Asian</option>
      <option value="Italian">Italian</option>
    </select>
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      cuisine: "",
    };
  },
  methods: {
    search() {
      this.$router.push({
        path: "/results",
        query: { query: this.query, cuisine: this.cuisine },
      });
    },
  },
};
</script>

<style scoped src="@/assets/styles/components/search-section.css"></style>

