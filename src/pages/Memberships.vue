<template>
  <Layout>
    <div class="container py-6 lg:py-8">
      <div
        class="pb-1 flex items-center justify-between flex-wrap gap-x-4 gap-y-2"
      >
        <div class="flex items-center flex-wrap gap-x-4 gap-y-2">
          <DatePicker />
          <Button class="bg-primary py-2.5 px-4 rounded" @click="toggleModal">
            <span class="text-btn">Добавить абонемент</span>
          </Button>
          <Modal :modal-active="modalActive" @close-modal="toggleModal">
            <div class="rounded-lg overflow-hidden">
              <div
                class="bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px] max-h-[calc(100vh-80px)] overflow-y-auto my-1"
              >
                <MembershipForm :close-modal="() => toggleModal(false)" />
              </div>
            </div>
          </Modal>
        </div>
        <!-- <SearchTextfield
          :results="state.results"
          :set-results="setResults"
          :search-fn="search"
          class="w-full sm:w-[300px] md:w-[400px]"
        /> -->
      </div>
      <MembershipsTable :memberships="memberships" :loading="store.loading" />
      <div class="flex justify-end">
        <button class="mt-2 hover:text-primary transition font-[400]">
          Скачать excel
        </button>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted, toRaw } from "vue";
import { storeToRefs } from "pinia";
import { useHead } from "@vueuse/head";
import { useMembershipsStore } from "@/stores/memberships.js";
import DatePicker from "@/components/DatePicker.vue";
import MembershipsTable from "@/components/tables/MembershipsTable.vue";
import Button from "@/ui/Button.vue";
import Modal from "@/components/Modal.vue";
import MembershipForm from "@/components/forms/MembershipForm.vue";
import Layout from "@/components/Layout.vue";
import SearchTextfield from "../components/SearchTextfield.vue";
useHead({
  title: "Абонементы",
});
const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const store = useMembershipsStore();
const { memberships } = storeToRefs(store);
onMounted(() => {
  store.getMemberships();
});
</script>

<style scoped>
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px rgb(var(--color-side));
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #90a4ae;
  border-radius: 3px;
}
</style>
