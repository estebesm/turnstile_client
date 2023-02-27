<template>
  <div>
    <Header />
    <slot />
    <FooterNavbar />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import FooterNavbar from "@/components/FooterNavbar.vue";
</script>
