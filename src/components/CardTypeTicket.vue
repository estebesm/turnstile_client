<template>
  <div
    class="py-4 px-4 md:py-4 md:px-8 rounded bg-gray-200 dark:bg-side font-[400]"
  >
    <div class="flex justify-between items-start gap-x-4">
      <h3 class="font-[600] text-lg">{{ props.cardType.name }}</h3>
      <div class="flex gap-x-1">
        <EditButton @click="state.editModalActive = true" />
        <DeleteButton @click="state.deleteModalActive = true" />
      </div>
    </div>
    <div class="flex gap-2 flex-wrap mt-4">
      <Tag
        v-if="props.cardType.name === 'Взрослый'"
        :title="'Тренер'"
        class="bg-error"
      />
      <Tag
        :title="`${props.cardType.price} ${declOfNum(props.cardType.price, [
          'сом',
          'сома',
          'сомов',
        ])}`"
        class="bg-green-600"
      />
      <Tag
        :title="`${props.cardType.period} ${declOfNum(props.cardType.period, [
          'день',
          'дня',
          'дней',
        ])}`"
        class="bg-yellow-600"
      />
      <Tag
        :title="`${props.cardType.visits_count} ${declOfNum(
          props.cardType.visits_count,
          ['посещение', 'посещения', 'посещений']
        )}`"
        class="bg-primary"
      />
    </div>
    <Modal
      :modal-active="state.editModalActive"
      @close-modal="state.editModalActive = false"
    >
      <EditCardTypeForm
        :value="state.editModalActive"
        :card-type="props.cardType"
        @close-modal="state.editModalActive = false"
      />
    </Modal>
    <Modal
      :modal-active="state.deleteModalActive"
      @close-modal="state.deleteModalActive = false"
    >
      <DeleteCardTypeForm
        :value="state.deleteModalActive"
        :card-type="props.cardType"
        @close-modal="state.deleteModalActive = false"
      />
    </Modal>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { declOfNum } from "@/helpers/words";
import Tag from "@/ui/Tag.vue";
import EditButton from "@/ui/EditButton.vue";
import DeleteButton from "@/ui/DeleteButton.vue";
import Modal from "@/components/Modal.vue";
import EditCardTypeForm from "@/components/forms/card_type_forms/EditCardTypeForm.vue";
import DeleteCardTypeForm from "@/components/forms/card_type_forms/DeleteCardTypeForm.vue";
const props = defineProps({
  cardType: {
    type: Object,
  },
});
const state = reactive({
  editModalActive: false,
  deleteModalActive: false,
});
</script>
