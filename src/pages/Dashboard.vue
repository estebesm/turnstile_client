<template>
  <section class="dark container text-primary">
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
  </section>
  <header id="header" class="h-[100px] w-[100%] border-y-2 border-border">
    <div class="container h-full">
      <div class="flex flex-wrap items-center h-full justify-between">
        <div
          class="flex-col flex justify-center items-center rounded-[50%] w-[50px] h-[50px] bg-primary gap-y-[3px]"
        >
          <div class="h-[2px] w-[18px] bg-side rounded-[1px]"></div>
          <div class="h-[2px] w-[18px] bg-side rounded-[1px]"></div>
          <div class="h-[2px] w-[18px] bg-side rounded-[1px]"></div>
        </div>
        <div class="flex items-center gap-x-[20px]">
          <h2
            class="mr-[80px] text-secondary text-[18px] xl:mx-[40px] 2xl:ml-[0px] 2xl:mr-[80px]"
          >
            Constructor
          </h2>
          <nav class="hidden xl:flex">
            <ul class="flex gap-x-[20px] mr-[20px]">
              <NavItem />
            </ul>
          </nav>
        </div>
        <Input />
        <div class="flex items-center">
          <div
            class="rounded-[50%] w-[50px] h-[50px] bg-primary flex items-center justify-center md:bg-transparent"
          >
            <img src="../assets/images/avatar.svg" alt="" />
          </div>
          <p
            class="hidden text-[13px] ml-[10px] text-secondary mr-[30px] md:flex"
          >
            Clayton Santos
          </p>
          <div
            class="rounded-[50%] w-[50px] h-[50px] bg-primary hidden items-center justify-center md:flex"
          >
            <img src="../assets/images/loop.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </header>
  <section class="w-[100%] h-[calc(100vh-100px)]" id="panel">
    <div class="container h-full w-full flex">
      <div class="hidden flex-col gap-y-[20px] pr-[23px] pt-[30px] xl:flex">
        <NavIcon />
      </div>
      <div class="flex py-[30px] w-full gap-x-[10px] gap-y-[20px] flex-wrap">
        <Charts />
        <Charts />
        <Charts />
      </div>
    </div>
  </section>
</template>

<script setup>
import NavItem from "../components/NavItem.vue";
import NavIcon from "../components/NavIcon.vue";
import Input from "../UI/Input.vue";
import Charts from "../UI/Charts.vue";

function toggleTheme() {
  if (document.documentElement.getAttribute("data-mode") === "dark") {
    document.documentElement.setAttribute("data-mode", null);
  } else {
    document.documentElement.setAttribute("data-mode", "dark");
  }
}
</script>
