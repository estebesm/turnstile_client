<template>
  <div class="py-4 px-4 md:py-4 md:px-8 rounded bg-gray-200 dark:bg-side">
    <div class="flex justify-between items-start gap-x-4">
      <h3 class="font-[600] text-lg">Эстебес</h3>
      <div class="flex gap-x-1">
        <EditButton @click="state.editModalActive = true" />
        <DeleteButton @click="state.deleteModalActive = true" />
      </div>
    </div>
    <Modal
      :modal-active="state.editModalActive"
      @close-modal="state.editModalActive = false"
    >
      <EditServiceCardForm
        :value="state.editModalActive"
        @close-modal="state.editModalActive = false"
      />
    </Modal>
    <Modal
      :modal-active="state.deleteModalActive"
      @close-modal="state.deleteModalActive = false"
    >
      <DeleteServiceCardForm
        :value="state.deleteModalActive"
        @close-modal="state.deleteModalActive = false"
      />
    </Modal>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import EditButton from "@/ui/EditButton.vue";
import DeleteButton from "@/ui/DeleteButton.vue";
import EditServiceCardForm from "@/components/forms/service_card_forms/EditServiceCardForm.vue";
import DeleteServiceCardForm from "@/components/forms/service_card_forms/DeleteServiceCardForm.vue";
import Modal from "@/components/Modal.vue";

const state = reactive({
  editModalActive: false,
  deleteModalActive: false,
});
</script>
