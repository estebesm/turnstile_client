<template>
  <form class="grid grid-cols-2 gap-4">
    <Textfield
      title="Номер абонемента"
      :value="route.params.id"
      disabled
      class="w-full"
    />
    <Select
      v-model:value="state.card_type"
      :value="state.card_type"
      :options="cardTypesStore.card_types"
      title="Тип абонемента"
      class="w-full"
    />
    <Textfield title="Имя" value="Эстебес" disabled class="w-full" />
    <Textfield title="Фамилия" value="Мукамбетов" disabled class="w-full" />
  </form>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
import { useCardTypesStore } from "@/stores/cardTypes";
import Textfield from "@/ui/Textfield.vue";
import Select from "@/ui/Select.vue";

const cardTypesStore = useCardTypesStore();
const route = useRoute();
const state = reactive({
  card_type: cardTypesStore.card_types[0],
});

watch(cardTypesStore, () => {
  state.card_type = cardTypesStore.card_types[0];
});
</script>
