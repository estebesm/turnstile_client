<template>
  <Layout>
    <div class="container py-6 lg:py-8">
      <h2 class="text-xl mb-4">Абонементы</h2>
      <Button
        class="py-2 px-4 mb-4 rounded bg-primary"
        @click="state.createModalActive = true"
      >
        <span class="text-white">Создать абонемент</span>
      </Button>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
        <CardTypeTicket
          v-for="card_type in card_types"
          :key="card_type.id"
          :card-type="card_type"
          class="w-full md:w-auto"
        />
      </div>
    </div>
    <Modal
      :modal-active="state.createModalActive"
      @close-modal="state.createModalActive = false"
    >
      <CreateCardTypeForm
        :value="state.createModalActive"
        @close-modal="state.createModalActive = false"
      />
    </Modal>
  </Layout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/stores/common";
import Layout from "@/components/Layout.vue";
import CreateCardTypeForm from "@/components/forms/CreateCardTypeForm.vue";
import CardTypeTicket from "@/components/CardTypeTicket.vue";
import Modal from "@/components/Modal.vue";
import Button from "@/ui/Button.vue";
import { reactive } from "vue";

const card_types2 = [
  {
    id: 2,
    name: "Взрослый",
    period: 120,
    visits_count: 12,
    price: 3700,
  },
  {
    id: 3,
    name: "Детский",
    period: 120,
    visits_count: 12,
    price: 3700,
  },
];

const commonStore = useCommonStore();
const { card_types } = storeToRefs(commonStore);
const state = reactive({
  createModalActive: false,
});
</script>
