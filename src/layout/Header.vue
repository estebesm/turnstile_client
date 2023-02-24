<template>
  <header class="container py-2 flex justify-between items-center shadow-md">
    <div class="flex gap-x-4">
      <Logo />
    </div>
    <div class="flex items-center gap-x-10">
      <nav>
        <ul class="hidden lg:flex gap-x-8">
          <li>
            <button class="hover:text-primary transition">
              <span>Статистика</span>
            </button>
          </li>
          <li>
            <button class="hover:text-primary transition">
              <span>Клиенты</span>
            </button>
          </li>
          <li>
            <button class="hover:text-primary transition">
              <span>Информация</span>
            </button>
          </li>
        </ul>
      </nav>
      <ThemeSwitch />
    </div>
  </header>
</template>

<script setup>
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import Logo from "@/ui/Logo.vue";
</script>
