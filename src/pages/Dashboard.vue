<template>
  <h1>dashboard</h1>
  <p>edef</p>
  <section class="container">
    <VisitTable />
    <button @click="toggleTheme()" class="mt-24 px-4 py-2 bg-yellow-500">
      toggle theme
    </button>
  </section>
</template>

<script setup>
import VisitTable from "@/components/tables/VisitTable.vue";
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
