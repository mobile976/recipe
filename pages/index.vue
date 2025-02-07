<template>
  <div class="page-container">
    <header class="header">
      <h1>Recipe Web Application</h1>
      <AuthSection />
    </header>
    <main class="main-content">
      <SearchSection v-if="user" />
      <AddRecipeSection v-if="user" />
    </main>
  </div>
</template>

<script>
import AuthSection from "~/components/AuthSection";
import SearchSection from "~/components/SearchSection";
import AddRecipeSection from "~/components/AddRecipeSection";
import { auth } from "~/plugins/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default {
  components: {
    AuthSection,
    SearchSection,
    AddRecipeSection,
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    if (process.env.NODE_ENV === "development") {
      this.user = {
        displayName: "Test User",
        uid: "test-user-id",
      };
    } else {
      onAuthStateChanged(auth, (user) => {
        this.user = user;
      });
    }
  },
};
</script>

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

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  width: 100%;
}
</style>
