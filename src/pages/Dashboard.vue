<template>
  <MyCalendar />
  <Header />
  <section class="container">
    <div class="pt-10 pb-1 flex items-center gap-4">
      <DatePicker />
      <button class="text-primary font-[400]">Скачать excel</button>
    </div>
    <VisitTable />
  </section>
</template>

<script setup>
import Header from "@/layout/Header.vue";
import VisitTable from "@/components/tables/VisitTable.vue";
import DatePicker from "@/components/DatePicker.vue";
import MyCalendar from "../UI/MyCalendar.vue";
</script>
