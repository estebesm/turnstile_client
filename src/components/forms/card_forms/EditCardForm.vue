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
      :options="commonStore.card_types"
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
import { useCommonStore } from "@/stores/common";
import Textfield from "@/ui/Textfield.vue";
import Select from "@/ui/Select.vue";

const commonStore = useCommonStore();
const route = useRoute();
const state = reactive({
  card_type: commonStore.card_types[0],
});

watch(commonStore, () => {
  state.card_type = commonStore.card_types[0];
});
</script>
