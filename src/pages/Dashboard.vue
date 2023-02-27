<template>
  <section class="container py-6 lg:py-8">
    <div class="pb-1 flex items-center gap-4">
      <DatePicker />
    </div>
    <VisitTable />
    <div class="flex justify-end">
      <button class="hover:text-primary transition font-[400]">
        Скачать excel
      </button>
    </div>
  </section>
</template>

<script setup>
import VisitTable from "@/components/tables/VisitTable.vue";
import DatePicker from "@/components/DatePicker.vue";
import { useHead } from "@vueuse/head";
useHead({
  title: "Журнал",
});
</script>
