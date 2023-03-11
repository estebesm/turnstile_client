<template>
  <Layout>
    <div class="bg-main flex flex-col justify-center items-center pt-20">
      <img src="@/assets/icons/robot.png" class="w-64 h-64" alt="Error 404" />

      <h1 class="text-4xl font-bold text-2xl text-secondary mb-6">
        Страница не найдена
      </h1>
      <Button
        class="bg-primary text-white font-bold text-base py-2 px-4 rounded transition duration-200"
        @click="router.push('/')"
      >
        <span>Вернуться на главную</span>
      </Button>
    </div>
  </Layout>
</template>

<script setup>
import { useRouter } from "vue-router";
import Button from "@/ui/Button.vue";
import Layout from "../components/Layout.vue";

const router = useRouter();
</script>
