<template>
  <form
    class="grid grid-cols-1 gap-y-3 bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px]"
  >
    <h3 class="text-xl mb-4">Изменить тренера</h3>
    <Textfield
      v-model:value="state.first_name"
      title="Имя"
      placeholder="Иван"
      class="w-full"
    />
    <Textfield
      v-model:value="state.last_name"
      title="Фамилия"
      placeholder="Иванов"
      class="w-full"
    />
    <Textfield
      v-model:value="state.patronymic"
      title="Отчество"
      placeholder="Иванович"
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
        Изменить
      </Button>
    </div>
  </form>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import Textfield from "@/ui/Textfield.vue";
import { reactive, defineEmits } from "vue";

const state = reactive({
  loading: false,
});

// const props = defineProps({
//   serviceCard: {
//     type: Object,
//   },
// });

const emit = defineEmits(["close-modal"]);

async function submit() {
  state.loading = true;
  state.loading = false;
  if (true) {
    emit("close-modal");
  }
}
</script>
