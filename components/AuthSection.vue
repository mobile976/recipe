<template>
  <div id="auth-section" class="auth-section">
    <button v-if="!user" @click="loginWithFacebook" class="auth-section button">Login with Facebook</button>

    <button v-if="user" @click="logout" class="auth-section button">Logout</button>

    <span v-if="user">Logged in as: {{ user.displayName }}</span>
  </div>
</template>

<script>
import { auth, provider } from "~/plugins/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  methods: {
    async loginWithFacebook() {
      try {
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;
      } catch (error) {
        console.error("Facebook login failed:", error);
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
      } catch (error) {
        console.error("Logout failed:", error);
      }
    },
  },
};
</script>

<style scoped src="@/assets/styles/components/auth-section.css"></style>
