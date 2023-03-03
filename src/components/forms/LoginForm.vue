<template>
  <form class="flex flex-col gap-y-4">
    <Textfield label="*Username" placeholder="example123" class="w-full" />
    <PasswordTextfield label="*Password" class="w-full" type="password" />
    <Button
      class="w-full mt-4 bg-primary text-btn py-2 rounded-lg"
      type="button"
      >Войти
    </Button>
  </form>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import Textfield from "@/ui/Textfield.vue";
import PasswordTextfield from "@/ui/PasswordTextfield.vue";
</script>
