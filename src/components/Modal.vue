<template>
  <Teleport to="#app">
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="fixed w-screen bg-black/70 h-[var(--doc-height)] top-0 left-0 z-10 overflow-y-auto"
        :class="{ 'overflow-y-contain': modalActive }"
        @click="$emit('close-modal')"
      >
        <div
          class="min-h-full w-full flex items-center justify-center py-[10vh]"
        >
          <Transition name="modal-inner">
            <div v-if="modalActive" @click="(event) => event.stopPropagation()">
              <slot />
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch } from "vue";
import { rootElement } from "@/helpers/window";
defineEmits(["close-modal"]);

const props = defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
watch(
  () => props.modalActive,
  (oldValue) => {
    rootElement.style.overflowY = oldValue ? "hidden" : "scroll";
    rootElement.style.paddingRight = oldValue
      ? "var(--width-scrollbar)"
      : "0px";
  }
);
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.2s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}
.modal-inner-enter-active {
  transition: all 0.2s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-inner-leave-active {
  transition: all 0.2s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
