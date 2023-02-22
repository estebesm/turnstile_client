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
    <div class="container w-full flex">
      <div class="hidden flex-col gap-y-[20px] pr-[23px] pt-[30px] xl:flex">
        <NavIcon />
      </div>
      <div
        class="flex py-[30px] w-full gap-x-[20px] gap-y-[20px] flex-wrap xl:border-border xl:border-x-2 xl:px-[20px] xl:w-[798px] 2xl:px-[30px] 2xl:w-[1004px] 3xl:w-[1304px]"
      >
        <Charts :one="first" />
        <Charts :two="second" />
        <Charts :three="third" />
        <Charts :four="fourth" />
        <Charts :five="fifth" />
      </div>
      <div class="py-[30px] pl-[20px] flex-[1] hidden xl:block">
        <div class="flex justify-between items-center">
          <img
            class="w-[16px] h-[16px]"
            src="../assets/images/avatarId.svg"
            alt=""
          />
          <img
            class="w-[16px] h-[4px]"
            src="../assets/images/points.svg"
            alt=""
          />
        </div>
        <div class="flex justify-center items-center mt-[7px]">
          <div
            class="relative bg-circle bg-contain w-[130px] h-[130px] flex justify-center items-center"
          >
            <img
              class="w-[110px] h-[110px] rounded-full"
              src="https://www.kino-teatr.ru/news/14941/137469.jpg"
              alt=""
            />
            <div
              class="absolute h-[40px] w-[40px] flex justify-center items-center bg-[#FF6633] rounded-full right-[-20px]"
            >
              <img src="../assets/images/plus.svg" alt="" />
            </div>
          </div>
        </div>
        <h3 class="text-center mt-[40px] mb-[30px] text-base text-secondary">
          Clayton Santos
        </h3>
        <div class="flex justify-between items-center mb-[10px]">
          <p class="text-secondary text-xs">Accounts and Cards</p>
          <img src="../assets/images/points.svg" alt="" />
        </div>
        <!-- <div class="flex justify-between items-center">
          <img
            class="w-[65px] h-[40px]"
            src="../assets/images/Card.svg"
            alt=""
          />
          <div>
            <p class="text-secondary text-sx text-center">Master Card</p>
            <p class="text-secondary text-sx text-center">4 560 $</p>
          </div>
          <div
            class="rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center"
          >
            <img
              class="w-[15px] h-[15px]"
              src="../assets/images/arrow.svg"
              alt=""
            />
          </div>
        </div> -->
        <div class="flex flex-col gap-y-[15px] w-full">
          <Card :cardOne="cardOne" />
          <Card :cardTwo="cardTwo" />
          <Card :cardThree="cardThree" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavItem from "../components/NavItem.vue";
import NavIcon from "../components/NavIcon.vue";
import Card from "../components/Card.vue";
import Input from "../UI/Input.vue";
import Charts from "../UI/Charts.vue";
const first = "akas";
const second = "estebes";
const third = "dastan";
const fourth = "adilet";
const fifth = "talgat";
const cardOne = "cardOne";
const cardTwo = "cardTwo";
const cardThree = "cardThree";
function toggleTheme() {
  if (document.documentElement.getAttribute("data-mode") === "dark") {
    document.documentElement.setAttribute("data-mode", null);
  } else {
    document.documentElement.setAttribute("data-mode", "dark");
  }
}
</script>
