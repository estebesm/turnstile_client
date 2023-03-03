<template>
  <div>
    <label v-show="props.label" class="block text-sm mb-2">{{
      props.label
    }}</label>
    <div class="relative">
      <input
        class="py-2 px-2 outline-offset-0 rounded-lg bg-main outline-none border border-secondary dark:border-main focus:outline-primary placeholder:font-[400]"
        v-bind="$attrs"
        :type="state.passwordVisible ? 'text' : 'password'"
      />
      <span
        class="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer h-5 w-5 mr-2"
        @click="togglePassword"
      >
        <img
          v-if="!state.passwordVisible"
          src="@/assets/icons/eye.png"
          alt="show password"
          class="w-5 h-5 opacity-50"
        />
        <img
          v-else
          src="@/assets/icons/closeEye.png"
          class="w-5 h-5 opacity-50"
          alt="hide password"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineProps } from "vue";
import Button from "@/ui/Button.vue";

const props = defineProps({
  label: {
    type: String,
  },
});

const state = reactive({
  passwordVisible: false,
});

function togglePassword() {
  state.passwordVisible = !state.passwordVisible;
}
</script>
