<template>
  <div
    class="flex flex-col justify-center gap-y-2 w-[calc(100vw-32px)] bg-side rounded-md border-border p-5 sm:w-[320px] md:w-[355px] md:gap-y-3 lg:w-[426px] lg:gap-y-3.5 lg:p-7 2xl:w-[490px] 2xl:gap-y-5"
  >
    <div class="w-full h-7.5 flex justify-between items-center">
      <p class="lg:text-xl 2xl:text-2xl">
        {{ weekArray.months[calendarStore.selectedDate.month()] }}
        {{ calendarStore.selectedDate.date() }},
        {{ calendarStore.selectedDate.year() }}
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
          calendarStore.selectedDate.month(),
          calendarStore.selectedDate.year()
        )"
        :key="index"
        class="md:m-1 flex justify-center"
      >
        <Button
          class="w-full h-full sm:px-2 sm:py-1 aspect-square"
          :class="{
            'rounded-full bg-red-500':
              el.date.toDate().toDateString() ===
                calendarStore.selectedDate.toDate().toDateString() && !el.today,
            'rounded-full bg-primary': el.today,
          }"
          @click="showSelectedDate(el.date)"
        >
          <span v-if="el.today" class="text-btn cursor-pointer">{{
            el.date.date()
          }}</span>
          <span
            v-else-if="!el.currentMonth && el.prevMonth"
            class="text-gray-400 cursor-pointer"
          >
            {{ el.date.date() }}
          </span>
          <span
            v-else-if="!el.currentMonth && el.nextMonth"
            class="text-gray-400 cursor-pointer"
          >
            {{ el.date.date() }}
          </span>
          <span v-else-if="el.currentMonth && !el.today" class="cursor-pointer"
            >{{ el.date.date() }}
          </span>
        </Button>
      </div>
    </div>
    <div class="flex justify-around">
      <Button
        :disabled="calendarStore.checkDate"
        class="py-3 px-4 rounded bg-primary flex items-center gap-1.5 text-btn text-sm"
        :class="{ 'opacity-30': calendarStore.checkDate }"
        @click="saveSelectedDate"
        >Сохранить
      </Button>
      <Button
        :disabled="!calendarStore.checkDate"
        class="py-3 px-4 rounded bg-primary flex items-center gap-1.5 text-btn text-sm"
        :class="{ 'opacity-30': !calendarStore.checkDate }"
        @click="cancelSelectedDate"
        >Отмена
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "@/ui/Button.vue";
import { reactive } from "vue";
import { calendar } from "@/helpers/calendar";
import { useCalendarStore } from "@/stores/calendar";
import "dayjs/locale/ru";
const calendarStore = useCalendarStore();
const weekArray = calendar.weekArray;
const state = reactive({
  currentDate: calendar.currentDate,
});
defineEmits(["close-modal"]);
const props = defineProps({
  akas: {
    type: Function,
    default: () => {},
  },
});
function showPrevMonth() {
  state.currentDate = state.currentDate.month(state.currentDate.month() - 1);
  calendarStore.selectedDate = calendarStore.selectedDate
    .month(calendarStore.selectedDate.month() - 1)
    .startOf("month");
  calendarStore.checkDate = false;
}
function showNextMonth() {
  state.currentDate = state.currentDate.month(state.currentDate.month() + 1);
  calendarStore.selectedDate = calendarStore.selectedDate
    .month(calendarStore.selectedDate.month() + 1)
    .startOf("month");
  calendarStore.checkDate = false;
}
function showSelectedDate(el) {
  calendarStore.selectedDate = el;
  calendarStore.checkDate = false;
  console.log(calendarStore.selectedDate);
}
function saveSelectedDate() {
  calendarStore.checkDate = true;
  calendarStore.pickerButtonDate = calendarStore.selectedDate
    .locale("ru")
    .format("DD MMMM YYYY");
  props.akas();
}
function cancelSelectedDate() {
  calendarStore.checkDate = false;
  calendarStore.pickerButtonDate = calendar.currentDate
    .locale("ru")
    .format("DD MMMM YYYY");
}
</script>
