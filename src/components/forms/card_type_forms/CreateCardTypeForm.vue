<template>
  <form
    class="grid grid-cols-1 gap-y-3 bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px]"
  >
    <h3 class="text-xl mb-4">Создать вид карты</h3>
    <Textfield
      v-model:value="state.name"
      title="Название карты"
      placeholder="Взрослый с тренером"
      class="w-full"
    />
    <Select
      v-model:value="state.payment_type"
      :options="payment_types"
      :value="state.payment_type"
      title="Тип оплаты"
      class="w-full"
    />
    <div
      v-if="state.payment_type.name === payment_types[0].name"
      class="grid grid-cols-1 gap-y-3"
    >
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
    </div>
    <div v-else class="grid grid-cols-1 gap-y-3">
      <Textfield
        v-model:value="state.price"
        title="Цена за посещение"
        class="block w-full"
        placeholder="3700"
        type="number"
      />
    </div>
    <div class="flex justify-end gap-x-4 mt-2">
      <Button type="button" @click="$emit('close-modal')">Отмена</Button>
      <Button
        type="button"
        class="bg-primary rounded py-2 px-4 text-btn"
        :class="{ 'bg-primary-light': state.loading }"
        :disabled="state.loading"
        @click="submit"
      >
        Создать
      </Button>
    </div>
  </form>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import Textfield from "@/ui/Textfield.vue";
import Select from "@/ui/Select.vue";
import { reactive, defineEmits, toRaw } from "vue";
import { useCardTypesStore } from "@/stores/cardTypes";

const cardTypesStore = useCardTypesStore();

const payment_types = [{ name: "Абонементская" }, { name: "Посетительская" }];

const state = reactive({
  loading: false,
  payment_type: payment_types[0],
  owner_name: "",
  name: "",
  price: "",
  period: "",
  visits_count: "",
});

const emit = defineEmits(["close-modal"]);

async function submit() {
  const { owner_name, name, price, period, visits_count } = toRaw(state);
  state.loading = true;
  const res = await cardTypesStore.createCardType({
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
