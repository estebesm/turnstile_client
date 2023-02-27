<template>
  <div class="overflow-x-auto pb-1 text-sm md:text-md">
    <table class="w-full min-w-24 border-separate border-spacing-y-1">
      <tr class="bg-side">
        <th class="p-4 rounded-l">№</th>
        <th class="whitespace-nowrap p-4">Карта</th>
        <th class="p-4">Тип</th>
        <th class="p-4">Владелец</th>
        <th class="whitespace-nowrap p-4">Дата покупки</th>
        <th class="whitespace-nowrap p-4 rounded-r">Дата окончания</th>
      </tr>
      <tr
        v-for="(item, index) in memberships"
        :key="item.cardId"
        class="bg-side align-top"
      >
        <td class="text-center p-4 rounded-l">{{ index + 1 }}</td>
        <td class="text-center p-4">{{ item.cardId }}</td>
        <td class="text-center p-4">{{ item.type }}</td>
        <td class="whitespace-nowrap text-center p-4">{{ item.owner }}</td>
        <td class="whitespace-nowrap text-center p-4">{{ item.start }}</td>
        <td class="whitespace-nowrap text-center p-4 rounded-r">
          {{ item.end }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
const memberships = [
  {
    cardId: 13234,
    type: "Абонемент",
    owner: "Мукамбетов Эстебес",
    start: "27-02-2023",
    end: "27-03-2023",
  },
];
</script>

<style scoped>
::-webkit-scrollbar-thumb {
  background-color: rgba(var(--color-primary));
}
</style>
