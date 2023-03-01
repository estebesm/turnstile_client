<template>
  <div class="relative">
    <input
      v-bind="$attrs"
      v-model="searchTerm"
      class="py-2 px-2 outline-offset-0 rounded-lg bg-main outline-none border border-secondary dark:border-main focus:outline-primary placeholder:font-[400] w-full pr-12"
      type="text"
      placeholder="Search..."
      @input="handleInput"
      @blur="closeDropdown"
    />
    <button
      class="absolute right-2 top-1 h-8 w-8 flex items-center justify-center text-secondary hover:text-primary transition-colors focus:outline-none"
      @click="handleButtonClick"
    >
      <img class="w-5 h-5 fill-current" src="@/assets/icons/loupe.png" alt="" />
    </button>
    <div
      v-if="showDropdown"
      class="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg"
    >
      <ul
        class="absolute z-[1] left-0 right-0 mb-4 bg-main divide-y rounded-b shadow-lg border-t border-t-side"
      >
        <li
          v-for="(result, index) in filteredResults"
          :key="index"
          class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-black/30 cursor-pointer font-[400]"
          @mousedown.prevent="setOption(result)"
        >
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  results: {
    type: Array,
    required: true,
  },
});

const searchTerm = ref("");
const showDropdown = ref(false);

const filteredResults = computed(() => {
  return props.results.filter((result) =>
    result.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const debounce = (fn, ms) => {
  let timeOut;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeOut);
    timeOut = setTimeout(fnCall, ms);
  };
};

function handleInput(e) {
  showDropdown.value = true;
  console.log(e.target.value);
}

function closeDropdown() {
  showDropdown.value = false;
  console.log("blur");
}

function handleButtonClick() {
  console.log("as");
}

function setOption(as) {
  searchTerm.value = as;
}
handleInput = debounce(handleInput, 700);
</script>
