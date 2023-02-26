<template>
  <div
    class="bg-green-200/[.5] h-screen w-screen fixed flex justify-center items-center"
  >
    <div
      class="container flex flex-col gap-y-2 w-[250px] bg-primary rounded-[7px] border-border border-[1px] p-5 sm:w-[320px] md:w-[355px] md:gap-y-3 lg:w-[426px] lg:gap-y-3.5 lg:p-7 2xl:w-[490px] 2xl:gap-y-5"
    >
      <div class="w-full h-[30px] flex justify-around items-center">
        <p
          class="text-xs text-btn sm:text-sm md:text-md lg:text-xl 2xl:text-2xl"
        >
          {{ weekArray.months[state.currentDate.month()] }}
          {{ state.currentDate.date() }}, {{ state.currentDate.year() }}
        </p>
        <div class="flex gap-x-2.5">
          <img
            @click="showPrevMonth"
            class="rotate-180"
            src="@/assets/icons/calendarArrow.svg"
            alt=""
          />
          <img
            @click="showNextMonth"
            src="@/assets/icons/calendarArrow.svg"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex justify-between items-center flex-wrap w-[210px] sm:w-[280px] sm:gap-y-2.5 md:w-[315px] md:gap-y-3 lg:w-[378px] lg:gap-y-4 2xl:w-[434px] 2xl:gap-y-5"
      >
        <p
          class="text-center text-btn text-xs w-[30px] sm:text-sm sm:w-[40px] md:text-md md:w-[45px] lg:text-xl lg:w-[54px] 2xl:text-2xl 2xl:w-[62px]"
          v-for="(el, i) in weekArray.weekdaysMin"
          :key="i"
        >
          {{ el }}
        </p>
      </div>
      <div
        class="flex flex-wrap justify-between items-center w-[210px] gap-y-2 sm:w-[280px] sm:gap-y-2.5 md:w-[315px] md:gap-y-3 lg:w-[378px] lg:gap-y-4 2xl:w-[434px] 2xl:gap-y-5"
      >
        <p
          class="w-[30px] text-center text-btn text-xs sm:text-sm sm:w-[40px] md:text-md md:w-[45px] lg:text-xl lg:w-[54px] 2xl:text-2xl 2xl:w-[62px]"
          v-for="(el, index) in showCalenderDays(state.currentDate.month(),
            state.currentDate.year()
          )"
          :key="index"
        >
          <span
            class="text-btn cursor-pointer"
            v-if="el.currentMonth && !el.today"
            >{{ el.date.date() }}
          </span>
          <span
            class="text-gray-400 cursor-pointer"
            v-else-if="!el.currentMonth"
          >
            {{ el.date.date() }}
          </span>
          <span class="text-black cursor-pointer" v-if="el.today">{{
            el.date.date()
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import { reactive } from "vue";
dayjs.extend(updateLocale);
const weekArray = dayjs.updateLocale("en", {
  weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
});
const state = reactive({
  currentDate: dayjs(),
});

function showPrevMonth() {
  state.currentDate = state.currentDate.month(state.currentDate.month() - 1);
}
function showNextMonth() {
  state.currentDate = state.currentDate.month(state.currentDate.month() + 1);
}
const showCalenderDays = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
  const arrayOfDate = [];
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.day(i),
      currentMonth: false,
    });
  }
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.date(i),
      currentMonth: true,
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }
  const remaining = 42 - arrayOfDate.length;
  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({
      date: lastDateOfMonth.date(i),
      currentMonth: false,
    });
  }
  return arrayOfDate;
};
</script>
