<template>
  <div class="overflow-x-auto pb-1 text-sm md:text-md">
    <Skeleton v-if="props.loading" class="w-full h-[70vh] mt-2 rounded" />
    <div
      v-else-if="props.cards.length === 0"
      class="w-full h-[60vh] mt-2 rounded flex justify-center items-center"
    >
      <span class="font-[400] text-lg">Данных нет</span>
    </div>
    <table v-else class="w-full min-w-24 border-separate border-spacing-y-1">
      <tr class="bg-side">
        <th class="p-4 rounded-l">№</th>
        <th class="whitespace-nowrap p-4">Карта</th>
        <th class="p-4">Тип</th>
        <th class="p-4">Владелец</th>
        <th class="whitespace-nowrap p-4">Дата покупки</th>
        <th class="whitespace-nowrap p-4 rounded-r">Дата окончания</th>
      </tr>
      <tr
        v-for="(item, index) in props.cards"
        :key="item.card_id"
        class="bg-side align-top cursor-pointer"
        @click="router.push(`cards/${item.card_id}`)"
      >
        <td class="text-center p-4 rounded-l">{{ index + 1 }}</td>
        <td class="text-center p-4">{{ item.card_id }}</td>
        <td class="text-center p-4">{{ item.card_type_name }}</td>
        <td class="whitespace-nowrap text-center p-4">
          {{ `${item.first_name} ${item.last_name}` }}
        </td>
        <td class="whitespace-nowrap text-center p-4">
          {{ item.create_date.slice(0, 10) }}
        </td>
        <td class="whitespace-nowrap text-center p-4 rounded-r">
          {{ item.end_date.slice(0, 10) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Skeleton from "@/ui/Skeleton.vue";

const router = useRouter();
const props = defineProps({
  cards: {
    type: Array,
  },
  loading: {
    type: Boolean,
  },
});
</script>

<style scoped>
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px rgb(var(--color-side));
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #90a4ae;
  border-radius: 3px;
}
</style>
