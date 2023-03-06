<template>
  <div class="flex items-center gap-4 py-3 px-4">
    <button class="h-7 w-7" @click="toggleTheme()">
      <img v-if="toggleActive" src="@/assets/icons/moon.svg" alt="moon" />
      <img v-else src="@/assets/icons/sun.svg" alt="sun" />
    </button>
    <div
      class="hidden w-10 h-4 cursor-pointer sm:flex items-center bg-primary rounded-full duration-200 ease-in-out"
      :class="{ 'bg-gray-300': !toggleActive }"
      @click="toggleTheme()"
    >
      <div
        class="bg-white w-5 h-5 rounded-full shadow-md transform duration-200 ease-in-out"
        :class="{ 'translate-x-5': toggleActive }"
      ></div>
    </div>
  </div>
</template>

<script>
function toggleTheme() {
  if (this.toggleActive) {
    this.toggleActive = false;
    document.documentElement.setAttribute("data-mode", "light");
  } else {
    this.toggleActive = true;
    document.documentElement.setAttribute("data-mode", "dark");
  }
}

function isDark() {
  return !!(
    document.documentElement.attributes["data-mode"] &&
    document.documentElement.attributes["data-mode"].value === "dark"
  );
}
export default {
  data() {
    return {
      toggleActive: isDark(),
    };
  },
  methods: {
    toggleTheme,
  },
};
</script>
