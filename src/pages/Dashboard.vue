<template>
  <section class="container py-6 lg:py-8">
    <div class="pb-1 flex items-center gap-x-4 gap-y-2 flex-wrap">
      <DatePicker />
      <SearchTextfield :results="state.searchResults" :search-fn="search" />
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
import { reactive } from "vue";
useHead({
  title: "Журнал",
});
const state = reactive({
  searchResults: [],
});
const db = ["akas", "estebes", "dastan", "adilet", "talgat"];
const search = (value) => {
  if (!value) {
    state.searchResults = [];
  } else {
    const results = db.filter((result) =>
      result.toLowerCase().includes(value.toLowerCase())
    );
    state.searchResults = results;
  }
};
</script>
