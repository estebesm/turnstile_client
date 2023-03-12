<template>
  <Layout>
    <div class="container py-6 lg:py-8 flex flex-col gap-y-8">
      <div>
        <h2 class="text-xl mb-4">Виды карт</h2>
        <Button
          class="py-2 px-4 mb-4 rounded bg-primary"
          @click="state.createModalActive = true"
        >
          <span class="text-white">Создать вид карты</span>
        </Button>
        <Modal
          :modal-active="state.createModalActive"
          @close-modal="state.createModalActive = false"
        >
          <CreateCardTypeForm
            :value="state.createModalActive"
            @close-modal="state.createModalActive = false"
          />
        </Modal>
        <Skeleton v-if="card_types_loading" class="w-full h-96 rounded" />
        <div
          v-else
          class="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3"
        >
          <CardTypeTicket
            v-for="card_type in card_types"
            :key="card_type.id"
            :card-type="card_type"
            class="w-full md:w-auto"
          />
        </div>
      </div>
      <div>
        <h2 class="text-xl mb-4">Тренеры</h2>
        <Button
          class="py-2 px-4 mb-4 rounded bg-primary"
          @click="state.createTrainerModalActive = true"
        >
          <span class="text-white">Добавить тренера</span>
        </Button>
        <Modal
          :modal-active="state.createTrainerModalActive"
          @close-modal="state.createTrainerModalActive = false"
        >
          <CreateTrainerForm
            :value="state.createTrainerModalActive"
            @close-modal="state.createTrainerModalActive = false"
          />
        </Modal>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
          <TrainerTicket :key="11" class="w-full md:w-auto" />
          <TrainerTicket :key="12" class="w-full md:w-auto" />
          <TrainerTicket :key="13" class="w-full md:w-auto" />
        </div>
      </div>
      <div>
        <h2 class="text-xl mb-4">Служебные карты</h2>
        <Button
          class="py-2 px-4 mb-4 rounded bg-primary"
          @click="state.createServiceCardModalActive = true"
        >
          <span class="text-white">Добавить служебную карту</span>
        </Button>
        <Modal
          :modal-active="state.createServiceCardModalActive"
          @close-modal="state.createServiceCardModalActive = false"
        >
          <CreateServiceCardForm
            :value="state.createServiceCardModalActive"
            @close-modal="state.createServiceCardModalActive = false"
          />
        </Modal>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
          <ServiceCard :key="1" class="w-full md:w-auto" />
          <ServiceCard :key="2" class="w-full md:w-auto" />
          <ServiceCard :key="3" class="w-full md:w-auto" />
          <ServiceCard :key="4" class="w-full md:w-auto" />
          <ServiceCard :key="5" class="w-full md:w-auto" />
          <ServiceCard :key="6" class="w-full md:w-auto" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCardTypesStore } from "@/stores/cardTypes";
import Layout from "@/components/Layout.vue";
import CreateCardTypeForm from "@/components/forms/card_type_forms/CreateCardTypeForm.vue";
import CardTypeTicket from "@/components/CardTypeTicket.vue";
import Modal from "@/components/Modal.vue";
import Button from "@/ui/Button.vue";
import { reactive } from "vue";
import TrainerTicket from "@/components/TrainerTicket.vue";
import ServiceCard from "@/components/ServiceCard.vue";
import CreateServiceCardForm from "@/components/forms/service_card_forms/CreateServiceCardForm.vue";
import CreateTrainerForm from "@/components/forms/trainer_forms/CreateTrainerForm.vue";
import Skeleton from "@/ui/Skeleton.vue";

const cardTypesStore = useCardTypesStore();
const { card_types, loading: card_types_loading } = storeToRefs(cardTypesStore);
const state = reactive({
  createModalActive: false,
  createServiceCardModalActive: false,
  createTrainerModalActive: false,
});
</script>
