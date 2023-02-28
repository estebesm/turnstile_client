<template>
  <form class="grid grid-cols-1 gap-y-3">
    <h3 class="text-xl mb-4">Добавить абонемент</h3>
    <Textfield
      label="Номер абонемента"
      type="number"
      placeholder="12345"
      class="w-full"
    />
    <Select label="Тип абонемента" class="w-full" />
    <Textfield label="Имя" class="block w-full" placeholder="Иван" />
    <Textfield label="Фамилия" class="block w-full" placeholder="Иванов" />
    <Textfield
      label="Телефон"
      class="w-full"
      type="number"
      placeholder="+996 500 123 456"
    />
    <div class="flex justify-end gap-x-4 mt-2">
      <button type="button">Отмена</button>
      <Button type="button" class="bg-primary rounded py-2 px-4 text-btn">
        Добавить
      </Button>
    </div>
  </form>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import Textfield from "@/ui/Textfield.vue";
import Select from "@/ui/Select.vue";

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];
</script>
