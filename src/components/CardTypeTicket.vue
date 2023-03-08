<template>
  <div
    class="py-4 px-4 md:py-4 md:px-8 rounded bg-gray-200 dark:bg-side font-[400]"
  >
    <div class="flex justify-between items-start gap-x-4">
      <h3 class="font-[600] text-lg">{{ props.cardType.name }}</h3>
      <div class="flex gap-x-1">
        <Button
          class="w-8 h-8 flex items-center justify-center rounded-full"
          @click="state.editModalActive = true"
        >
          <svg
            viewBox="0 0 48 48"
            class="w-5 h-5 fill-secondary"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"
            />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </Button>
        <Button
          class="w-8 h-8 flex items-center justify-center rounded-full"
          @click="state.deleteModalActive = true"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 fill-error"
          >
            <g>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
              />
            </g>
          </svg>
        </Button>
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
      <div class="rounded-lg overflow-hidden">
        <div
          class="bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px] max-h-[calc(100vh-80px)] overflow-y-auto my-1"
        >
          <EditCardTypeForm
            :value="state.editModalActive"
            :card-type="props.cardType"
            @close-modal="state.editModalActive = false"
          />
        </div>
      </div>
    </Modal>
    <Modal
      :modal-active="state.deleteModalActive"
      @close-modal="state.deleteModalActive = false"
    >
      <div class="rounded-lg overflow-hidden">
        <div
          class="bg-side py-5 px-4 md:px-8 rounded-lg w-[calc(100vw-32px)] max-w-[400px] max-h-[calc(100vh-80px)] overflow-y-auto my-1"
        >
          <DeleteCardTypeForm
            :value="state.deleteModalActive"
            :card-type="props.cardType"
            @close-modal="state.deleteModalActive = false"
          />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { toRaw, reactive } from "vue";
import { declOfNum } from "@/helpers/words";
import Tag from "@/ui/Tag.vue";
import Button from "@/ui/Button.vue";
import Modal from "@/components/Modal.vue";
import EditCardTypeForm from "@/components/forms/EditCardTypeForm.vue";
import DeleteCardTypeForm from "@/components/forms/DeleteCardTypeForm.vue";
const props = defineProps({
  cardType: {
    type: Object,
  },
});
const state = reactive({
  editModalActive: false,
  deleteModalActive: false,
});
console.log(toRaw(props.cardType));
</script>
