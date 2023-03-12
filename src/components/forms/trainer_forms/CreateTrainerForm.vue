<template>
  <form
    class="grid grid-cols-1 gap-y-3 bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px]"
  >
    <h3 class="text-xl mb-4">Добавить тренера</h3>
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
        Создать
      </Button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import Button from "@/ui/Button.vue";
import Textfield from "@/ui/Textfield.vue";

const emit = defineEmits(["close-modal"]);

const state = reactive({
  first_name: "",
  last_name: "",
  patronymic: "",
});

function submit() {
  emit("close-modal");
}
</script>
