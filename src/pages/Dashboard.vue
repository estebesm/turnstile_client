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
    <button
      @click="openDoor()"
      class="px-8 py-4 rounded-lg bg-lime-600 my-5 mx-auto block"
    >
      <span class="text-[48px] text-white font-bold">ОТКРЫТЬ ДВЕРЬ</span>
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
function openDoor() {
  fetch("https://2ad7-46-251-205-52.eu.ngrok.io/open/", {
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
