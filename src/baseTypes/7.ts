/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  sunday = "Sunday",
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
}

function isWeekend(day: Weekdays): boolean {
  return day === Weekdays.sunday || day === Weekdays.saturday;
}

console.log(isWeekend(Weekdays.friday));
console.log(isWeekend(Weekdays.saturday));