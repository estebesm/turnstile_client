<template>
  <div class="overflow-x-auto pb-1 text-sm md:text-md">
    <table class="w-full min-w-24 border-separate border-spacing-y-1">
      <tr class="bg-side">
        <th class="p-4 rounded-l">№</th>
        <th class="whitespace-nowrap p-4">Карта</th>
        <th class="p-4">Тип</th>
        <th class="p-4">Ключ</th>
        <th class="p-4">Время</th>
        <th class="p-4 rounded-r">Примечание</th>
      </tr>
      <tr
        class="bg-side align-top"
        v-for="(item, index) in visits"
        :key="item.cardId"
      >
        <td class="text-center p-4 rounded-l">{{ index + 1 }}</td>
        <td class="text-center p-4">{{ item.cardId }}</td>
        <td class="text-center p-4">{{ item.type }}</td>
        <td class="text-center p-4">{{ item.keyNumber }}</td>
        <td class="text-center p-4">{{ item.time }}</td>
        <td class="text-center p-4 rounded-r max-w-md 300px truncate">
          {{ item.note }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
const visits = [
  {
    cardId: 13234,
    type: "Абонемент",
    keyNumber: "12",
    time: "13:00",
    note: "-",
  },
  {
    cardId: 13234,
    type: "Разовое",
    keyNumber: "7",
    time: "13:30",
    note: "-",
  },
  {
    cardId: 13234,
    type: "Разовое",
    keyNumber: "22",
    time: "14:00",
    note: "Lorem ipsum dolor sit amet",
  },
  {
    cardId: 13234,
    type: "Абонемент",
    keyNumber: "27",
    time: "14:00",
    note: "-",
  },
];
</script>
