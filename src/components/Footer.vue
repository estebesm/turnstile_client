<template>
  <footer class="hidden lg:block">
    <div class="w-full h-[40px] bg-side border-b-2 border-icon"></div>
    <div
      class="flex-col bg-main shadow-md px-[60px] bottom-0 left-0 right-0 hidden justify-between items-center lg:flex"
    >
      <div
        class="flex mt-[-20px] rounded-b-lg items-center bg-side justify-center pb-[20px] w-full gap-x-10 border-b-2 border-x-2 border-icon"
      >
        <nav>
          <ul class="hidden lg:flex gap-x-8">
            <li>
              <button
                class="transition rounded-sm px-2"
                :class="{ 'text-primary': route.name === 'dashboard' }"
                @click="() => router.push('/dashboard')"
              >
                <span>Журнал</span>
              </button>
            </li>
            <li>
              <button
                class="transition rounded-sm px-2"
                :class="{ 'text-primary': route.name === 'memberships' }"
                @click="() => router.push('/memberships')"
              >
                <span>Абонементы</span>
              </button>
            </li>
            <li>
              <button
                class="transition rounded-sm px-2"
                :class="{ 'text-primary': route.name === 'info' }"
              >
                <span>Информация</span>
              </button>
            </li>
            <li>
              <button
                class="transition rounded-sm px-2"
                :class="{ 'text-primary': route.name === 'settings' }"
              >
                <span>Настройки</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex w-full justify-evenly py-[20px]">
        <div class="flex flex-col justify-center w-[25%] xl:w-[20%]">
          <Logo />
          <p class="text-center mt-[10px]">Пользовательское соглашение</p>
        </div>
        <div class="flex flex-col justify-center w-[25%] xl:w-[20%]">
          <h3 class="text-center">О нас</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Sit,aperiam.
          </p>
        </div>
      </div>
      <div
        class="flex rounded-t-lg bg-side justify-center pt-[10px] w-full border-x-2 border-t-2 border-icon"
      >
        <h3>Контакты:</h3>
      </div>
      <div
        class="flex mb-[-20px] w-full bg-side justify-center gap-x-6 border-x-2 border-icon"
      >
        <div class="flex justify-center items-center">
          <img
            class="w-[30px] h-[30px] mr-[5px]"
            src="https://cdn2.iconfinder.com/data/icons/social-media-2420/512/Telegram-512.png"
            alt=""
          />
          <p>telegram</p>
        </div>
        <div class="flex justify-center items-center">
          <img
            class="w-[30px] h-[30px] mr-[5px]"
            src="https://cdn2.iconfinder.com/data/icons/social-media-2420/512/WhatsApp-512.png"
            alt=""
          />
          <p>whatsapp</p>
        </div>
        <div class="flex flex-col justify-center">
          <p>0555888999</p>
        </div>
        <div class="flex flex-col justify-center">
          <p>0500222111</p>
        </div>
      </div>
    </div>
    <div class="w-full h-[40px] bg-side border-t-2 border-icon"></div>
  </footer>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import Logo from "@/ui/Logo.vue";
const route = useRoute();
const router = useRouter();
</script>
