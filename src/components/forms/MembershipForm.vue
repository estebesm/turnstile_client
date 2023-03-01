<template>
  <form class="grid grid-cols-1 gap-y-3">
    <h3 class="text-xl mb-4">Добавить абонемент</h3>
    <Textfield
      label="Номер абонемента"
      type="number"
      placeholder="12345"
      class="w-full"
    />
    <Select
      :options="types"
      :value="state.type"
      :set-value="(option) => (state.type = option)"
      label="Тип абонемента"
      class="w-full"
    />
    <Select
      v-show="[types[1], types[3], types[4]].includes(state.type)"
      :options="employees"
      :value="state.employee"
      :set-value="(option) => (state.employee = option)"
      label="Тренер"
      class="w-full"
    />
    <Textfield label="Имя" class="block w-full" placeholder="Иван" />
    <Textfield label="Фамилия" class="block w-full" placeholder="Иванов" />
    <Textfield
      label="Телефон"
      class="w-full"
      type="number"
      placeholder="+996 500 123 456"
    />
    <div class="flex justify-end gap-x-4 mt-2">
      <Button type="button" @click="props.closeModal">Отмена</Button>
      <Button
        type="button"
        class="bg-primary rounded py-2 px-4 text-btn"
        @click="props.closeModal"
      >
        Добавить
      </Button>
    </div>
  </form>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import Textfield from "@/ui/Textfield.vue";
import Select from "@/ui/Select.vue";
import { reactive } from "vue";

const employees = [
  "Эстебес Мукамбетов",
  "Акас Салвар",
  "Иван Иванов",
  "Петр Петров",
];
const types = [
  "Взрослый",
  "Взрослый тр.",
  "Детский",
  "Детский тр.",
  "Индивидуальный",
];

const state = reactive({
  type: types[0],
  employee: employees[0],
});

const props = defineProps({
  closeModal: {
    type: Function,
  },
});
</script>
