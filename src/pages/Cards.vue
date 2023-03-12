<template>
  <Layout>
    <div class="container py-6 lg:py-8">
      <div
        class="pb-1 flex items-center justify-between flex-wrap gap-x-4 gap-y-2"
      >
        <div class="flex items-center flex-wrap gap-x-4 gap-y-2">
          <DatePicker
            v-model:selectedDate="selectedDate"
            :selected-date="selectedDate"
          />
          <Button
            class="bg-primary py-2.5 px-4 rounded"
            @click="state.createCardModalActive = true"
          >
            <span class="text-btn">Добавить абонемент</span>
          </Button>
          <Modal
            :modal-active="state.createCardModalActive"
            @close-modal="state.createCardModalActive = false"
          >
            <CreateCardForm
              :value="state.createCardModalActive"
              @close-modal="state.createCardModalActive = false"
            />
          </Modal>
        </div>
        <!-- <SearchTextfield
          :results="state.results"
          :set-results="setResults"
          :search-fn="search"
          class="w-full sm:w-[300px] md:w-[400px]"
        /> -->
      </div>
      <CardsTable
        :cards="cards"
        :loading="store.loading && cards.length === 0"
      />
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useHead } from "@vueuse/head";
import { useCardsStore } from "@/stores/cards.js";
import DatePicker from "@/components/DatePicker.vue";
import CardsTable from "@/components/tables/CardsTable.vue";
import Button from "@/ui/Button.vue";
import Modal from "@/components/Modal.vue";
import CreateCardForm from "@/components/forms/card_forms/CreateCardForm.vue";
import Layout from "@/components/Layout.vue";
import SearchTextfield from "@/components/SearchTextfield.vue";
useHead({
  title: "Абонементы",
});

const state = reactive({
  createCardModalActive: false,
});

const store = useCardsStore();
const { cards, selectedDate } = storeToRefs(store);
onMounted(() => {
  store.getCards();
});
</script>
