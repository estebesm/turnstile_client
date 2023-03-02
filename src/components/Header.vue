<template>
  <header class="shadow-md">
    <div class="container py-2 flex justify-between items-center">
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
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import Logo from "@/ui/Logo.vue";
const route = useRoute();
const router = useRouter();
</script>
