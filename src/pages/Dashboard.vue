<template>
  <Layout>
    <section class="container py-6 lg:py-8">
      <div
        class="pb-1 flex items-center gap-x-4 gap-y-2 flex-wrap sm:flex-nowrap sm:justify-between"
      >
        <DatePicker
          v-model:selectedDate="state.selectedDate"
          :selected-date="state.selectedDate"
        />
        <SearchTextfield
          :results="state.searchResults"
          :set-results="search"
          :search-fn="() => {}"
          class="w-full max-w-[400px]"
        />
      </div>
      <VisitTable />
      <div class="flex justify-end">
        <button class="mt-2 hover:text-primary transition font-[400]">
          Скачать excel
        </button>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import VisitTable from "@/components/tables/VisitTable.vue";
import DatePicker from "@/components/DatePicker.vue";
import { useHead } from "@vueuse/head";
import SearchTextfield from "@/components/SearchTextfield.vue";
import { reactive } from "vue";
import { calendar } from "@/helpers/calendar";
import Layout from "@/components/Layout.vue";
useHead({
  title: "Журнал",
});
const state = reactive({
  searchResults: [],
  selectedDate: calendar.currentDate,
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
