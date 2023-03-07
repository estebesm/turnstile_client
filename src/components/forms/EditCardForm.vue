<template>
  <form class="grid grid-cols-2 gap-4">
    <Textfield
      label="Номер абонемента"
      :value="route.params.id"
      disabled
      class="w-full"
    />
    <Select
      :options="types"
      :value="state.type"
      :set-value="(option) => (state.type = option)"
      label="Тип"
      class="w-full"
      disabled
    />
    <Textfield label="Имя" value="Эстебес" disabled class="w-full" />
    <Textfield label="Фамилия" value="Мукамбетов" disabled class="w-full" />
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import Textfield from "@/ui/Textfield.vue";
import Select from "@/ui/Select.vue";

const route = useRoute();

const types = [
  "Взрослый",
  "Взрослый тр.",
  "Детский",
  "Детский тр.",
  "Индивидуальный",
];

const employees = [
  "Эстебес Мукамбетов",
  "Акас Салвар",
  "Иван Иванов",
  "Петр Петров",
];

const state = reactive({
  employee: employees[0],
  type: types[0],
});
</script>
