<template>
  <header class="dark container text-primary">
    <ul class="font-bold">
      <li class="text-primary">primary</li>
      <li class="text-primary-light">primary light</li>
      <li class="text-success">success</li>
      <li class="text-success-light">success light</li>
      <li class="text-error">error</li>
      <li class="text-error-light">error light</li>
      <li class="text-secondary">secondary</li>
    </ul>
    <button
      @click="toggleTheme()"
      class="bg-side py-1 px-2 rounded block mx-auto"
    >
      <span class="text-secondary text-xl">Переключить тему</span>
    </button>
  </header>
</template>

<script setup>
function toggleTheme() {
  if (document.documentElement.getAttribute("theme") === "dark") {
    document.documentElement.setAttribute("theme", null);
  } else {
    document.documentElement.setAttribute("theme", "dark");
  }
}
</script>
