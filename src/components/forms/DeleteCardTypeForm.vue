<template>
  <form
    class="grid grid-cols-1 gap-y-3 bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px]"
  >
    <h3 class="mb-4">
      Вы действительно хотите удалить абонемент "{{ props.cardType.name }}"?
    </h3>
    <div class="flex justify-end gap-x-4 mt-2">
      <Button type="button" @click="$emit('close-modal')">Отмена</Button>
      <Button
        type="button"
        class="bg-error rounded py-1.5 px-4 text-btn"
        :class="{ 'bg-error-light': state.loading }"
        :disabled="state.loading"
        @click="submit"
      >
        Удалить
      </Button>
    </div>
  </form>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import { reactive, defineEmits, toRaw } from "vue";
import { useCommonStore } from "@/stores/common";

const commonStore = useCommonStore();

const state = reactive({
  loading: false,
});

const props = defineProps({
  cardType: {
    type: Object,
  },
});

const emit = defineEmits(["close-modal"]);

async function submit() {
  state.loading = true;
  await commonStore.deleteCardType(props.cardType.id);
  state.loading = false;
  emit("close-modal");
}
</script>
