<template>
  <div
    class="w-full h-fit bg-primary rounded-[10px] md:w-full xl:w-[238px] 2xl:w-[300px] 3xl:w-[400px]"
    v-if="one === 'akas'"
  >
    <div
      class="flex rounded-t-[10px] justify-evenly gap-x-[10px] w-full py-[22px] border-b-2 border-border"
    >
      <p v-for="el in content" :key="el.id" class="text-xs text-secondary">
        {{ el.name }}
      </p>
    </div>
    <div class="w-full h-[285px] rounded-b-[10px]"></div>
  </div>
  <div
    class="w-full h-fit bg-primary rounded-[10px] md:w-[calc(50%-10px)] xl:w-[238px] 2xl:w-[300px] 3xl:w-[400px]"
    v-else-if="two === 'estebes'"
  >
    <div
      class="flex rounded-t-[10px] justify-evenly gap-x-[10px] w-full py-[22px] border-b-2 border-border"
    >
      <p v-for="el in content" :key="el.id" class="text-xs text-secondary">
        {{ el.name }}
      </p>
    </div>
    <div class="w-full h-[285px] rounded-b-[10px]"></div>
  </div>
  <div
    class="w-full h-fit bg-primary rounded-[10px] md:w-[calc(50%-10px)] xl:w-[238px] 2xl:w-[300px] 3xl:w-[400px]"
    v-else-if="three === 'dastan'"
  >
    <div
      class="flex rounded-t-[10px] justify-evenly gap-x-[10px] w-full py-[22px] border-b-2 border-border"
    >
      <p v-for="el in content" :key="el.id" class="text-xs text-secondary">
        {{ el.name }}
      </p>
    </div>
    <div class="w-full h-[285px] rounded-b-[10px]"></div>
  </div>
  <div
    class="w-full h-fit bg-primary rounded-[10px] md:w-[calc(50%-10px)] xl:w-[calc(60%-10px)]"
    v-else-if="four === 'adilet'"
  >
    <div
      class="flex rounded-t-[10px] justify-evenly gap-x-[10px] w-full py-[22px] border-b-2 border-border"
    >
      <p v-for="el in content" :key="el.id" class="text-xs text-secondary">
        {{ el.name }}
      </p>
    </div>
    <div class="w-full h-[285px] rounded-b-[10px]"></div>
  </div>
  <div
    class="w-full h-fit bg-primary rounded-[10px] md:w-[calc(50%-10px)] xl:w-[calc(40%-10px)]"
    v-else-if="five === 'talgat'"
  >
    <div
      class="flex rounded-t-[10px] justify-evenly gap-x-[10px] w-full py-[22px] border-b-2 border-border"
    >
      <p v-for="el in content" :key="el.id" class="text-xs text-secondary">
        {{ el.name }}
      </p>
    </div>
    <div class="w-full h-[285px] rounded-b-[10px]"></div>
  </div>
</template>

<script>
export default {
  props: {
    one: {
      type: String,
      required: true,
    },
    two: {
      type: String,
      required: true,
    },
    three: {
      type: String,
      required: true,
    },
    four: {
      type: String,
      required: true,
    },
    five: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      content: [
        { id: 1, name: "Last Month" },
        { id: 2, name: "3M" },
        { id: 3, name: "6M" },
        { id: 4, name: "Year" },
        { id: 5, name: "All" },
      ],
    };
  },
};
</script>
