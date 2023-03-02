<template>
  <Layout>
    <div class="container">
      <h1>Information page</h1>
    </div>
  </Layout>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import Layout from "@/components/Layout.vue";
useHead({
  title: "Информация",
});
</script>
