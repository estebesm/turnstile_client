<template>
  <section
    class="bg-gradient-to-r from-cyan-500 to-primary"
    :style="{ height: containerHeight + 'px' }"
  >
    <div class="container h-full flex justify-center items-center gap-x-10">
      <div
        class="border border-garay-500 px-4 py-8 bg-side rounded-lg w-full max-w-[500px] sm:px-8 shadow-[0px_5px_15px_rgba(0,0,0,0.45)]"
      >
        <h2 class="text-2xl mb-6">Вход</h2>
        <p class="mb-4 hidden text-sm font-[400] my-2">
          Введите свое имя пользователя и пароль, чтобы войти
        </p>
        <LoginForm />
        <a class="text-primary mt-4 block text-center">Забыли пароль?</a>
      </div>
      <div class="hidden lg:flex w-full px-10 h-full">
        <div class="flex items-center">
          <img
            class="w-full block aspect-[611/408]"
            src="@/assets/images/system.png"
            alt="system"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import LoginForm from "@/components/forms/LoginForm.vue";
import { onMounted, ref, onBeforeUnmount } from "vue";
const containerHeight = ref(window.innerHeight);

function setContainerHeight() {
  containerHeight.value = window.innerHeight;
}

onMounted(() => {
  // Set the height of the container element based on the viewport height
  setContainerHeight();
  window.addEventListener("resize", setContainerHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", setContainerHeight);
});
useHead({
  title: "Вход",
});
</script>
