<template>
  <form class="grid grid-cols-1 gap-y-3">
    <h3 class="text-xl mb-4">Добавить абонемент</h3>
    <Textfield
      v-model:value="state.card_id"
      title="Номер абонемента"
      type="number"
      placeholder="12345"
      class="w-full"
    />
    <Select
      v-model:value="state.card_type"
      :options="state.card_types"
      :value="state.card_type"
      title="Тип абонемента"
      class="w-full"
    />
    <Select
      v-show="false"
      v-model:value="state.employee"
      :options="state.employees"
      :value="state.employee"
      title="Тренер"
      class="w-full"
    />
    <Textfield
      v-model:value="state.first_name"
      title="Имя"
      class="block w-full"
      placeholder="Иван"
    />
    <Textfield
      v-model:value="state.last_name"
      title="Фамилия"
      class="block w-full"
      placeholder="Иванов"
    />
    <Textfield
      v-model:value="state.phone_number"
      title="Телефон"
      class="w-full"
      type="number"
      placeholder="+996 500 123 456"
    />
    <div class="flex justify-end gap-x-4 mt-2">
      <Button type="button" @click="props.closeModal">Отмена</Button>
      <Button
        type="button"
        class="bg-primary rounded py-2 px-4 text-btn"
        @click="submit"
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
import { reactive, onMounted, toRaw } from "vue";
import { getCardTypes } from "@/helpers/api";
import { useCardsStore } from "@/stores/cards.js";

const store = useCardsStore();

const state = reactive({
  card_types: [{ name: "dee" }, { name: "detbv" }],
  card_type: { name: "Тип абонемента" },
  employees: [],
  employee: { name: "Тренер" },
  first_name: "",
  last_name: "",
  card_id: "",
  phone_number: "",
});

onMounted(() => {
  getCardTypes().then((card_types) => {
    state.card_types = card_types;
    state.card_type = card_types[0] || { name: "" };
  });
});

function submit() {
  console.log(toRaw(state));
  const { card_id, card_type, first_name, last_name, phone_number } =
    toRaw(state);
  store.createCard({
    card_id,
    card_type: card_type.id,
    first_name,
    last_name,
    phone_number,
  });
}

const props = defineProps({
  closeModal: {
    type: Function,
  },
});
</script>
