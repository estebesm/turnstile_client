<template>
  <div class="container py-6 lg:py-8">
    <div class="pb-2 flex items-center flex-wrap gap-x-4 gap-y-1.5">
      <DatePicker />
      <Button class="bg-primary py-2 px-4 rounded" @click="toggleModal">
        <span class="text-btn font-[400]">Добавить абонемент</span>
      </Button>
      <Modal :modal-active="modalActive" @close-modal="toggleModal">
        <div
          class="bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px]"
        >
          <form class="grid grid-cols-1 gap-y-3">
            <h3 class="text-xl mb-4">Добавить абонемент</h3>
            <Textfield
              label="Номер абонемента"
              type="number"
              placeholder="12345"
              class="w-full"
            />
            <Textfield label="Имя" class="block w-full" placeholder="Иван" />
            <Textfield
              label="Фамилия"
              class="block w-full"
              placeholder="Иванов"
            />
            <div class="flex justify-end gap-x-4 mt-2">
              <button type="button">Отмена</button>
              <Button
                type="button"
                class="bg-primary rounded py-2 px-4 text-btn"
              >
                Добавить
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
    <MembershipsTable />
    <div class="flex justify-end">
      <button class="hover:text-primary transition font-[400]">
        Скачать excel
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useHead } from "@vueuse/head";
import DatePicker from "@/components/DatePicker.vue";
import MembershipsTable from "@/components/tables/MembershipsTable.vue";
import Button from "@/ui/Button.vue";
import Textfield from "@/ui/Textfield.vue";
import Modal from "@/components/Modal.vue";
useHead({
  title: "Абонементы",
});
const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
