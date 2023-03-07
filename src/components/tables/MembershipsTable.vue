<template>
  <div class="overflow-x-auto pb-1 text-sm md:text-md">
    <h3 v-if="props.loading" class="text-center py-24">loading...</h3>
    <h3 v-else-if="props.memberships.length === 0" class="text-center py-24">
      table is empty
    </h3>
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
        v-for="(item, index) in props.memberships"
        :key="item.card_id"
        class="bg-side align-top cursor-pointer"
        @click="router.push(`memberships/${item.card_id}`)"
      >
        <td class="text-center p-4 rounded-l">{{ index + 1 }}</td>
        <td class="text-center p-4">{{ item.card_id }}</td>
        <td class="text-center p-4">{{ item.card_type }}</td>
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

const router = useRouter();
const props = defineProps({
  memberships: {
    type: Array,
  },
  loading: {
    type: Boolean,
  },
});
</script>

<style scoped>
::-webkit-scrollbar-thumb {
  background-color: rgba(var(--color-primary));
}
</style>
