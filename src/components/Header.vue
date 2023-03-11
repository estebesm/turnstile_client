<template>
  <header
    class="shadow-md bg-main"
    :class="{
      'sticky top-0 z-10 border-b dark:border-gray-600 shadow-[0px_-1px_3px_rgba(82,82,91,0.3)]': false,
    }"
  >
    <div class="container py-1.5 flex justify-between items-center">
      <div class="flex gap-x-4">
        <Logo />
      </div>
      <div class="flex items-center gap-x-10">
        <nav>
          <ul class="hidden lg:flex gap-x-8">
            <li>
              <button
                class="transition rounded-sm px-2"
                :class="{ 'text-primary': route.name === 'dashboard' }"
                @click="() => router.push('/')"
              >
                <span>Журнал</span>
              </button>
            </li>
            <li>
              <button
                class="transition rounded-sm px-2"
                :class="{
                  'text-primary':
                    route.name === 'cards' || route.name === 'cardProfile',
                }"
                @click="() => router.push('/cards')"
              >
                <span>Абонементы</span>
              </button>
            </li>
            <li>
              <button
                class="transition rounded-sm px-2"
                :class="{ 'text-primary': route.name === 'information' }"
                @click="() => router.push('/information')"
              >
                <span>Информация</span>
              </button>
            </li>
            <li>
              <button
                class="transition rounded-sm px-2"
                :class="{ 'text-primary': route.name === 'settings' }"
                @click="() => router.push('/settings')"
              >
                <span>Настройки</span>
              </button>
            </li>
          </ul>
        </nav>
        <ThemeSwitch />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { isMobile } from "@/helpers/window";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import Logo from "@/ui/Logo.vue";
const route = useRoute();
const router = useRouter();
</script>
