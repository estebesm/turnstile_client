<template>
  <div>
    <Header />
    <slot />
    <FooterNavbar />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import FooterNavbar from "@/components/FooterNavbar.vue";
import Footer from "@/components/Footer.vue";
</script>
