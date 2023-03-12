<template>
  <form
    class="grid grid-cols-1 gap-y-3 bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px]"
  >
    <h3 class="text-xl mb-4">Изменить абонемент</h3>
    <Textfield
      v-model:value="state.name"
      title="Название абонемента"
      placeholder="Взрослый с тренером"
      class="w-full"
    />
    <Textfield
      v-model:value="state.period"
      title="Срок действия (количество дней)"
      class="block w-full"
      placeholder="120"
      type="number"
    />
    <Textfield
      v-model:value="state.price"
      title="Цена"
      class="block w-full"
      placeholder="3700"
      type="number"
    />
    <Textfield
      v-model:value="state.visits_count"
      title="Количество посещений"
      class="w-full"
      type="number"
      placeholder="12"
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
        Изменить
      </Button>
    </div>
  </form>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import Textfield from "@/ui/Textfield.vue";
import { reactive, defineEmits, toRaw, onMounted } from "vue";
import { useCardTypesStore } from "@/stores/cardTypes";

const cardTypesStore = useCardTypesStore();

const state = reactive({
  loading: false,
  id: props.cardType.id,
  name: props.cardType.name,
  price: props.cardType.price,
  period: props.cardType.period,
  visits_count: props.cardType.visits_count,
});

const props = defineProps({
  cardType: {
    type: Object,
  },
});

const emit = defineEmits(["close-modal"]);

async function submit() {
  const { id, name, price, period, visits_count } = toRaw(state);
  state.loading = true;
  const res = await cardTypesStore.updateCardType({
    id,
    name,
    price,
    period,
    visits_count,
  });
  state.loading = false;
  if (res) {
    emit("close-modal");
  }
}
</script>
