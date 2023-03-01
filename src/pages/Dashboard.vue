<template>
  <section class="container py-6 lg:py-8">
    <div class="pb-1 flex items-center gap-4">
      <DatePicker />
      <SearchTextfield :results="searchResults" />
    </div>
    <VisitTable />
    <div class="flex justify-end">
      <button class="mt-2 hover:text-primary transition font-[400]">
        Скачать excel
      </button>
    </div>
  </section>
</template>

<script setup>
import VisitTable from "@/components/tables/VisitTable.vue";
import DatePicker from "@/components/DatePicker.vue";
import { useHead } from "@vueuse/head";
import SearchTextfield from "@/components/SearchTextfield.vue";
useHead({
  title: "Журнал",
});
const searchResults = ["akas", "estebes", "dastan", "adilet", "talgat"];
</script>
