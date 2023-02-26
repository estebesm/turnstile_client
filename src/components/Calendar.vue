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
            class="rotate-180"
            src="@/assets/icons/calendarArrow.svg"
            alt=""
            @click="showPrevMonth"
          />
          <img
            src="@/assets/icons/calendarArrow.svg"
            alt=""
            @click="showNextMonth"
          />
        </div>
      </div>
      <div
        class="flex justify-between items-center flex-wrap w-[210px] sm:w-[280px] sm:gap-y-2.5 md:w-[315px] md:gap-y-3 lg:w-[378px] lg:gap-y-4 2xl:w-[434px] 2xl:gap-y-5"
      >
        <p
          v-for="(el, i) in weekArray.weekdaysMin"
          :key="i"
          class="text-center text-btn text-xs w-[30px] sm:text-sm sm:w-[40px] md:text-md md:w-[45px] lg:text-xl lg:w-[54px] 2xl:text-2xl 2xl:w-[62px]"
        >
          {{ el }}
        </p>
      </div>
      <div
        class="flex flex-wrap justify-between items-center w-[210px] gap-y-2 sm:w-[280px] sm:gap-y-2.5 md:w-[315px] md:gap-y-3 lg:w-[378px] lg:gap-y-4 2xl:w-[434px] 2xl:gap-y-5"
      >
        <p
          v-for="(el, index) in calendar.getCalendarDays(
            state.currentDate.month(),
            state.currentDate.year()
          )"
          :key="index"
          class="w-[30px] text-center text-btn text-xs sm:text-sm sm:w-[40px] md:text-md md:w-[45px] lg:text-xl lg:w-[54px] 2xl:text-2xl 2xl:w-[62px]"
        >
          <span
            v-if="el.currentMonth && !el.today"
            class="text-btn cursor-pointer"
            >{{ el.date.date() }}
          </span>
          <span
            v-else-if="!el.currentMonth"
            class="text-gray-400 cursor-pointer"
          >
            {{ el.date.date() }}
          </span>
          <span v-if="el.today" class="text-black cursor-pointer">{{
            el.date.date()
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { calendar } from "@/helpers/calendar";
const weekArray = calendar.weekArray;
const state = reactive({
  currentDate: calendar.currentDate,
});

function showPrevMonth() {
  state.currentDate = state.currentDate.month(state.currentDate.month() - 1);
}
function showNextMonth() {
  state.currentDate = state.currentDate.month(state.currentDate.month() + 1);
}
</script>
