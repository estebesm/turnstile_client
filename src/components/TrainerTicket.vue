<template>
  <div class="py-4 px-4 md:py-4 md:px-8 rounded bg-gray-200 dark:bg-side">
    <div class="flex justify-between items-start gap-x-4">
      <h3 class="font-[600] text-lg">Иванов Иван Иванович</h3>
      <div class="flex gap-x-1">
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  </div>
</template>

<script setup>
import EditButton from "@/ui/EditButton.vue";
import DeleteButton from "@/ui/DeleteButton.vue";
</script>
