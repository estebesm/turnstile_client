<template>
  <div
    v-for="el in src"
    :key="el.id"
    class="rounded-[50%] h-[50px] w-[50px] bg-white flex justify-center items-center"
  >
    <img class="w-[20px] h-[20px]" :src="el.name" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: [
        {
          id: 1,
          name: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2rM03hrd1VsWt55g0Y9ZAKMQijD_26gP8A&usqp=CAU",
        },
        {
          id: 2,
          name: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2rM03hrd1VsWt55g0Y9ZAKMQijD_26gP8A&usqp=CAU",
        },
        {
          id: 3,
          name: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2rM03hrd1VsWt55g0Y9ZAKMQijD_26gP8A&usqp=CAU",
        },
        {
          id: 4,
          name: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2rM03hrd1VsWt55g0Y9ZAKMQijD_26gP8A&usqp=CAU",
        },
        {
          id: 5,
          name: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2rM03hrd1VsWt55g0Y9ZAKMQijD_26gP8A&usqp=CAU",
        },
        {
          id: 6,
          name: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2rM03hrd1VsWt55g0Y9ZAKMQijD_26gP8A&usqp=CAU",
        },
      ],
    };
  },
};
</script>
