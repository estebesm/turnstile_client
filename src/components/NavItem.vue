<template>
  <li v-for="item in items" :key="item.id" class="text-[13px] text-secondary">
    {{ item.name }}
  </li>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Dashboard" },
        { id: 2, name: "About Us" },
        { id: 3, name: "News" },
        { id: 4, name: "User Policy" },
        { id: 5, name: "Contacts" },
      ],
    };
  },
};
</script>
