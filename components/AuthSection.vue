<template>
  <div id="auth-section" class="auth-section">
    <!-- Login button -->
    <button v-if="!user" @click="loginWithFacebook" class="auth-section button">Login with Facebook</button>

    <!-- Logout button -->
    <button v-if="user" @click="logout" class="auth-section button">Logout</button>

    <!-- Display user info -->
    <span v-if="user">Logged in as: {{ user.displayName }}</span>
  </div>
</template>

<script>
import { auth, provider } from "~/plugins/firebase"; // Firebase Auth provider
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"; // Firebase auth methods

export default {
  data() {
    return {
      user: null, // Store logged-in user
    };
  },
  mounted() {
    // Listen for authentication state changes
    onAuthStateChanged(auth, (user) => {
      this.user = user; // Update user when auth state changes
    });
  },
  methods: {
    // Facebook login method
    async loginWithFacebook() {
      try {
        const result = await signInWithPopup(auth, provider); // Use Firebase Facebook login
        this.user = result.user; // Set user to the result from Firebase
      } catch (error) {
        console.error("Facebook login failed:", error);
      }
    },

    // Logout method
    async logout() {
      try {
        await signOut(auth);
        this.user = null; // Clear user after logout
      } catch (error) {
        console.error("Logout failed:", error);
      }
    },
  },
};
</script>

<style scoped src="@/assets/styles/components/auth-section.css"></style>
