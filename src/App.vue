<template>
  <notifications position="bottom right" class="mb-12 lg:mb-0" />
  <RouterView />
  <FooterNavbar />
</template>

<script setup>
import { onMounted } from "vue";
import { useCardTypesStore } from "@/stores/cardTypes";
import FooterNavbar from "@/components/FooterNavbar.vue";

const cardTypesStore = useCardTypesStore();

onMounted(() => {
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", documentHeight);
  documentHeight();
  cardTypesStore.getCardTypes();
  if (window.localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-mode", "dark");
  }
});
</script>
