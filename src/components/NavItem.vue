<template>
  <li class="text-13px text-gray-nav" v-for="item in items" :key="item.id">
    {{ item.content }}
  </li>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, content: "Dashboard" },
        { id: 2, content: "About Us" },
        { id: 3, content: "News" },
        { id: 4, content: "User Policy" },
        { id: 5, content: "Contacts" },
      ],
    };
  },
};
</script>
