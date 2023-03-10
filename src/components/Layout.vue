<template>
  <div class="min-h-[var(--doc-height)]">
    <Header />
    <slot />
  </div>
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { onMounted } from "vue";
import { scrollToTop } from "@/helpers/window";

onMounted(() => {
  scrollToTop();
});
</script>
