<template>
  <form
    v-if="state.using_type.name === using_types[0].name"
    class="grid grid-cols-1 gap-y-3 bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px]"
  >
    <h3 class="text-xl mb-4">Создать абонемент</h3>
    <Select
      v-model:value="state.using_type"
      :options="using_types"
      :value="state.using_type"
      title="Тип использования"
      class="w-full"
    />
    <Textfield
      v-model:value="state.name"
      title="Название абонемента"
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
  <form
    v-else-if="state.using_type.name === using_types[1].name"
    class="grid grid-cols-1 gap-y-3 bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px]"
  >
    <h3 class="text-xl mb-4">Создать карту</h3>
    <Select
      v-model:value="state.using_type"
      :options="using_types"
      :value="state.using_type"
      title="Тип использования"
      class="w-full"
    />
    <Textfield
      v-model:value="state.owner_name"
      title="Владелец карты"
      placeholder="Иван Иванов"
      class="w-full"
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
        Создать
      </Button>
    </div>
  </form>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import Textfield from "@/ui/Textfield.vue";
import Select from "@/ui/Select.vue";
import { reactive, defineEmits, toRaw, onMounted } from "vue";
import { useCommonStore } from "@/stores/common";

const commonStore = useCommonStore();

const using_types = [{ name: "Обычный" }, { name: "Служебный" }];
const payment_types = [{ name: "Абонементская" }, { name: "Посетительская" }];

const state = reactive({
  loading: false,
  using_type: using_types[0],
  payment_type: payment_types[0],
  owner_name: "",
  name: "",
  price: "",
  period: "",
  visits_count: "",
});

const emit = defineEmits(["close-modal"]);

async function submit() {
  const { using_type, owner_name, name, price, period, visits_count } =
    toRaw(state);
  state.loading = true;
  await commonStore.createCardType({
    name,
    price,
    period,
    visits_count,
  });
  state.loading = false;
  emit("close-modal");
}
</script>
