<template>
  <div>
    <Header />
    <Calendar />
    <section class="container">
      <div class="pt-10 pb-1 flex items-center gap-4">
        <DatePicker />
        <button class="hover:text-primary transition font-[400]">
          Скачать excel
        </button>
      </div>
      <Button :append-icon="''"> text </Button>
      <VisitTable />
    </section>
    <FooterNavbar />
  </div>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import Header from "@/layout/Header.vue";
import VisitTable from "@/components/tables/VisitTable.vue";
import DatePicker from "@/components/DatePicker.vue";
import FooterNavbar from "@/components/FooterNavbar.vue";
import Calendar from "@/components/Calendar.vue";
</script>
