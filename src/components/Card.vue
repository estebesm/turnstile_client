<template>
  <div v-if="cardOne === 'cardOne'" class="flex justify-between items-center">
    <img class="w-[65px] h-[40px]" src="../assets/images/Card.svg" alt="" />
    <div>
      <p class="text-secondary text-sx text-center">Master Card</p>
      <p class="text-secondary text-sx text-center">4 560 $</p>
    </div>
    <div
      class="rounded-full bg-primary w-[40px] h-[40px] flex items-center justify-center"
    >
      <img class="w-[15px] h-[15px]" src="../assets/images/arrow.svg" alt="" />
    </div>
  </div>
  <div v-if="cardTwo === 'cardTwo'" class="flex justify-between items-center">
    <img class="w-[65px] h-[40px]" src="../assets/images/card2.svg" alt="" />
    <div>
      <p class="text-secondary text-sx text-center">Master Card</p>
      <p class="text-secondary text-sx text-center">1 120 $</p>
    </div>
    <div
      class="rounded-full bg-primary w-[40px] h-[40px] flex items-center justify-center"
    >
      <img class="w-[15px] h-[15px]" src="../assets/images/arrow.svg" alt="" />
    </div>
  </div>
  <div
    v-if="cardThree === 'cardThree'"
    class="flex justify-between items-center"
  >
    <img class="w-[65px] h-[40px]" src="../assets/images/card3.svg" alt="" />
    <div>
      <p class="text-secondary text-sx text-center">Visa Black Card</p>
      <p class="text-secondary text-sx text-center">345 $</p>
    </div>
    <div
      class="rounded-full bg-primary w-[40px] h-[40px] flex items-center justify-center"
    >
      <img class="w-[15px] h-[15px]" src="../assets/images/arrow.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardOne: {
      type: String,
      required: true,
    },
    cardTwo: {
      type: String,
      required: true,
    },
    cardThree: {
      type: String,
      required: true,
    },
  },
};
</script>
