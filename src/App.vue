<template>
  <div id="app">
    <HeaderInfo />

    <div v-if="isLoading" class="loader">
      <div class="spinner"></div>
    </div>

    <div v-else class="info">
      <router-view />
    </div>

    <FooterInfo />
  </div>
</template>

<script>
import HeaderInfo from "./components/headerPro.vue";
import FooterInfo from "./components/footerPro.vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

export default {
  components: { HeaderInfo, FooterInfo },
  setup() {
    const isLoading = ref(false);
    const router = useRouter();

    onMounted(() => {
      router.beforeEach(() => {
        isLoading.value = true;
      });

      router.afterEach(() => {
        setTimeout(() => {
          isLoading.value = false;
        }, 300);
      });
    });

    return { isLoading };
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  margin: 0 auto;
}
.info {
  max-width: 1350px;
  margin: 0 auto;
}
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #444;
  border-top: 5px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
