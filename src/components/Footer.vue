<template>
  <footer
    class="hidden mt-10 bg-gray-700 dark:bg-zinc-900 text-gray-300 lg:block pt-20 shadow-[0px_-2px_4px_rgba(0,0,0,0.2)] dark:shadow-[0px_-2px_4px_rgba(0,0,0,0.1)]"
  >
    <div
      class="grid grid-cols-[3fr_3fr_3fr] xl:grid-cols-[3fr_2fr_2fr_2fr] gap-x-10 mx-auto container"
    >
      <div class="h-full flex flex-col justify-center mr-10">
        <h1 class="text-[30px] whitespace-nowrap">Turnstile Api</h1>
      </div>
      <div class="hidden xl:flex flex-col gap-y-2">
        <h4 class="text-lg mb-4">Продукт</h4>
        <div>
          <a
            href="https://google.com"
            target="_blank"
            class="text-gray-300 font-[400]"
            >Журнал</a
          >
        </div>
        <div>
          <a
            href="https://google.com"
            target="_blank"
            class="text-gray-300 font-[400]"
            >Абонементы</a
          >
        </div>
        <div>
          <a
            href="https://google.com"
            target="_blank"
            class="text-gray-300 font-[400]"
            >Информация</a
          >
        </div>
        <div>
          <a
            href="https://google.com"
            target="_blank"
            class="text-gray-300 font-[400]"
            >Настройки</a
          >
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <h4 class="text-lg mb-4">Компания</h4>
        <div>
          <a
            href="https://google.com"
            target="_blank"
            class="text-gray-300 font-[400]"
            >Novasoft</a
          >
        </div>
        <div>
          <a
            href="https://google.com"
            target="_blank"
            class="text-gray-300 font-[400] whitespace-nowrap"
            >Пользовательское соглашение</a
          >
        </div>
        <div>
          <a
            href="https://google.com"
            target="_blank"
            class="text-gray-300 font-[400]"
            >О продукте</a
          >
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <h4 class="text-lg mb-4">Контакты</h4>
        <TelNumber number="+996 995 123 130" />
        <TelNumber number="+996 995 123 130" />
        <EmailAdress email="estebesm95@gmail.com" />
        <div class="flex items-center gap-x-2">
          <a href="https://t.me/estebesm">
            <img src="@/assets/icons/telegram.svg" alt="telegram" />
          </a>
          <a href="https://wa.me/+996995123130">
            <img src="@/assets/icons/whatsapp.svg" alt="telegram" />
          </a>
        </div>
      </div>
    </div>
    <p class="text-center text-sm font-[400] mt-20 pb-4">Бишкек 2023</p>
  </footer>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import TelNumber from "@/ui/TelNumber.vue";
import EmailAdress from "@/ui/EmailAdress.vue";
const route = useRoute();
const router = useRouter();
</script>
