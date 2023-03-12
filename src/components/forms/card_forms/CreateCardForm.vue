<template>
  <form
    class="grid grid-cols-1 gap-y-3 bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px]"
  >
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
      :options="cardTypesStore.card_types"
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
      <Button type="button" @click="$emit('close-modal')">Отмена</Button>
      <Button
        type="button"
        class="bg-primary rounded py-2 px-4 text-btn"
        :class="{ 'bg-primary-light': state.loading }"
        :disabled="state.loading"
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
import { reactive, toRaw, defineEmits } from "vue";
import { useCardsStore } from "@/stores/cards.js";
import { useCardTypesStore } from "@/stores/cardTypes";

const emit = defineEmits(["close-modal"]);

const store = useCardsStore();
const cardTypesStore = useCardTypesStore();

const state = reactive({
  loading: false,
  card_type: cardTypesStore.card_types[0],
  employees: [],
  employee: { name: "Тренер" },
  first_name: "",
  last_name: "",
  card_id: "",
  phone_number: "",
});

async function submit() {
  state.loading = true;
  const { card_id, card_type, first_name, last_name, phone_number } =
    toRaw(state);
  const res = await store.createCard({
    card_id,
    card_type: card_type.id,
    first_name,
    last_name,
    phone_number,
  });
  state.loading = false;
  if (res) {
    emit("close-modal");
  }
}
</script>
