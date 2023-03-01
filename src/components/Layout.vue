<template>
  <div>
    <Header />
    <div class="min-h-screen">
      <slot />
    </div>
    <FooterNavbar />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import FooterNavbar from "@/components/FooterNavbar.vue";
import Footer from "@/components/Footer.vue";
</script>
