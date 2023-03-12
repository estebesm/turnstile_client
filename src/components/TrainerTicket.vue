<template>
  <div class="py-4 px-4 md:py-4 md:px-8 rounded bg-gray-200 dark:bg-side">
    <div class="flex justify-between items-start gap-x-4">
      <h3 class="font-[600] text-lg">Иванов Иван Иванович</h3>
      <div class="flex gap-x-1">
        <EditButton @click="state.editModalActive = true" />
        <DeleteButton @click="state.deleteModalActive = true" />
      </div>
    </div>
    <Modal
      :modal-active="state.editModalActive"
      @close-modal="state.editModalActive = false"
    >
      <EditTrainerForm
        :value="state.editModalActive"
        @close-modal="state.editModalActive = false"
      />
    </Modal>
    <Modal
      :modal-active="state.deleteModalActive"
      @close-modal="state.deleteModalActive = false"
    >
      <DeleteTrainerForm
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
import Modal from "@/components/Modal.vue";
import EditTrainerForm from "@/components/forms/trainer_forms/EditTrainerForm.vue";
import DeleteTrainerForm from "@/components/forms/trainer_forms/DeleteTrainerForm.vue";

const state = reactive({
  editModalActive: false,
  deleteModalActive: false,
});
</script>
