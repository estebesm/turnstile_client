<template>
  <notifications position="bottom right" class="mb-12 lg:mb-0" />
  <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import { useCommonStore } from "@/stores/common";

const commonStore = useCommonStore();

onMounted(() => {
  commonStore.getCardTypes();
});
</script>
