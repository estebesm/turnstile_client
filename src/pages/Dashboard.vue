<template>
  <header class="dark container text-primary">
    <ul class="font-bold">
      <li class="text-primary bg-primary-light p-4">primary</li>
      <li class="text-success bg-success-light p-4">success</li>
      <li class="text-error bg-error-200 p-4">error</li>
      <li class="text-secondary bg-secondary-light p-4">secondary</li>
    </ul>
    <button
      @click="toggleTheme()"
      class="bg-side py-1 px-2 rounded block mx-auto"
    >
      <span class="text-blue-500 dark:text-red-500 text-xl"
        >Переключить тему</span
      >
    </button>
  </header>
</template>

<script setup>
function toggleTheme() {
  if (document.documentElement.getAttribute("data-mode") === "dark") {
    document.documentElement.setAttribute("data-mode", null);
  } else {
    document.documentElement.setAttribute("data-mode", "dark");
  }
}
</script>
