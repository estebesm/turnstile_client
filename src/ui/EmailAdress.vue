<template>
  <div class="flex items-center gap-x-3">
    <svg
      width="18"
      height="15"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 0.954102H2.5C1.39543 0.954102 0.5 1.84953 0.5 2.9541V14.9541C0.5 16.0587 1.39543 16.9541 2.5 16.9541H21.5C22.6046 16.9541 23.5 16.0587 23.5 14.9541V2.9541C23.5 1.84953 22.6046 0.954102 21.5 0.954102Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.9111 1.53613L12.0001 10.4541L1.08911 1.53613"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <a :href="`mailto:${props.email}`" class="font-[400] text-gray-300">{{
      props.email
    }}</a>
  </div>
</template>

<script setup>
const props = defineProps({
  email: {
    type: String,
  },
});
</script>
