<template>
  <div class="min-h-screen bg-main flex flex-col justify-center items-center">
    <img
      src="@/assets/icons/robot.png"
      class="max-w-lg w-full h-auto"
      alt="Error 404"
    />

    <h1 class="text-4xl font-bold text-2xl text-secondary mb-6">
      Страница не найдена
    </h1>
    <Button
      class="bg-primary text-white font-bold text-base py-4 px-6 rounded transition duration-200 md:text-lg xl:text-xl 2xl:text-2xl"
    >
      <a href="/">Вернуться на главную</a>
    </Button>
  </div>
</template>

<script setup>
import Button from "@/ui/Button.vue";
</script>
