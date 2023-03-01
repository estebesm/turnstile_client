<template>
  <div
    class="flex flex-col justify-center gap-y-2 w-[calc(100vw-32px)] bg-side rounded-md border-border p-5 sm:w-[320px] md:w-[355px] md:gap-y-3 lg:w-[426px] lg:gap-y-3.5 lg:p-7 2xl:w-[490px] 2xl:gap-y-5"
  >
    <div class="w-full h-7.5 flex justify-between items-center">
      <p class="lg:text-xl 2xl:text-2xl">
        {{ weekArray.months[state.currentDate.month()] }}
        {{ state.currentDate.year() }}
      </p>
      <div class="flex gap-x-4">
        <Button class="p-2 rounded-full" @click="showPrevMonth">
          <img
            class="rotate-180 fill-primary"
            src="@/assets/icons/calendarArrow.svg"
            alt="prev month"
          />
        </Button>
        <Button class="p-2 rounded-full" @click="showNextMonth">
          <img src="@/assets/icons/calendarArrow.svg" alt="next month" />
        </Button>
      </div>
    </div>
    <div
      class="mt-4 grid grid-cols-7 w-full md:w-[315px] lg:w-[378px] 2xl:w-[434px]"
    >
      <div
        v-for="(el, i) in weekArray.weekdaysMin"
        :key="i"
        class="flex justify-center"
        :class="{ 'text-error': i === 0 }"
      >
        {{ el }}
      </div>
    </div>
    <div
      class="grid grid-cols-7 w-full md:w-[315px] lg:w-[378px] 2xl:w-[434px]"
    >
      <div
        v-for="(el, index) in calendar.getCalendarDays(
          state.currentDate.month(),
          state.currentDate.year()
        )"
        :key="index"
        class="md:m-1 flex justify-center"
      >
        <Button
          class="w-full h-full sm:px-2 sm:py-1 aspect-square"
          :class="{
            'bg-success rounded-full': isPicked(el.date),
            'border border-secondary rounded-full': el.today,
          }"
          @click="props.pickDate(el.date)"
        >
          <span v-if="el.today && !isPicked(el.date)" class="text-primary">{{
            el.date.date()
          }}</span>
          <span
            v-else-if="isPicked(el.date)"
            :class="{ 'text-btn': isPicked(el.date) }"
            >{{ el.date.date() }}</span
          >
          <span
            v-else-if="!el.currentMonth && el.prevMonth"
            class="text-gray-400"
          >
            {{ el.date.date() }}
          </span>
          <span
            v-else-if="!el.currentMonth && el.nextMonth"
            class="text-gray-400"
          >
            {{ el.date.date() }}
          </span>
          <span v-else :class="{ 'text-btn': isPicked(el.date) }">{{
            el.date.date()
          }}</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import { reactive } from "vue";
import { calendar } from "@/helpers/calendar";
import "dayjs/locale/ru";

const weekArray = calendar.weekArray;
const state = reactive({
  currentDate: props.selectedDate,
  pickedDate: props.pickDate,
});
const props = defineProps({
  selectedDate: {
    type: Object,
  },
  pickedDate: {
    type: Object,
  },
  pickDate: {
    type: Function,
  },
});
function isPicked(date) {
  return (
    date.date() === props.pickedDate.date() &&
    date.month() === props.pickedDate.month() &&
    date.year() === props.pickedDate.year()
  );
}
function showPrevMonth() {
  state.currentDate = state.currentDate.month(state.currentDate.month() - 1);
}
function showNextMonth() {
  state.currentDate = state.currentDate.month(state.currentDate.month() + 1);
}
</script>
