<template>
  <Layout>
    <div class="container py-6 lg:py-8">
      <div class="max-w-[800px]">
        <div class="mb-4">
          <div class="flex flex-col gap-y-1">
            <p>Осталось посещений: 3</p>
            <p>Действителен до 21 мая 2023г.</p>
            <p>Дата покупки абонемента: 21 февраля 2023г.</p>
            <p>Дата обновления 21 февраля 2023г.</p>
          </div>
        </div>
        <EditCardForm />
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "@/components/Layout.vue";
import EditCardForm from "@/components/forms/EditCardForm.vue";
</script>
