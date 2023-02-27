<template>
  <div class="container py-6 lg:py-8">
    <div class="pb-1 flex items-center gap-4">
      <DatePicker />
      <button class="hover:text-primary transition font-[400]">
        Скачать excel
      </button>
      <button class="bg-primary py-2 px-4 rounded">
        <span class="text-btn font-[400]">Добавить абонемент</span>
      </button>
    </div>
    <MembershipsTable />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import DatePicker from "@/components/DatePicker.vue";
import MembershipsTable from "@/components/tables/MembershipsTable.vue";
useHead({
  title: "Абонементы",
});
</script>
