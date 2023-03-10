<template>
  <notifications position="bottom right" class="mb-12 lg:mb-0" />
  <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import { useCommonStore } from "@/stores/common";

const commonStore = useCommonStore();

onMounted(() => {
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", documentHeight);
  documentHeight();
  commonStore.getCardTypes();
  if (window.localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-mode", "dark");
  }
});
</script>
