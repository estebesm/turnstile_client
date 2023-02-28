import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/ru";

dayjs.extend(updateLocale);

const weekArray = dayjs.updateLocale("en", {
  weekdaysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  months: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthsRod: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
});
const getToday = (format = "DD MMMM YYYY") =>
  dayjs().locale("ru").format(format);

const isToday = (date) =>
  date.date() === dayjs().date() &&
  date.month() === dayjs().month() &&
  date.year() === dayjs().year();

function getCalendarDays(month = dayjs().month(), year = dayjs().year()) {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
  const arrayOfDate = [];
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.day(i),
      currentMonth: false,
      prevMonth: true,
      nextMonth: false,
    });
  }
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.date(i),
      currentMonth: true,
      prevMonth: false,
      nextMonth: false,
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
      prevMonth: false,
      nextMonth: true,
    });
  }
  return arrayOfDate;
}

export const calendar = {
  getCalendarDays,
  weekArray,
  currentDate: dayjs(),
  isToday,
  getToday,
};
