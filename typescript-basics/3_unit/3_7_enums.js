// enum is used to hold set of values like days of the week. so we have limited option to use which are correct.
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 0] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 1] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 2] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 3] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 4] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 5] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 6] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day; // you are declaring day of type DayOfTheWeek
day = DaysOfTheWeek.MON;
// now can assign any one value of DaysOfTheWeek enum to ''day'' variable.
// you can compare two values in enum
if (day === DaysOfTheWeek.MON) {
    console.log('need to go to work');
}
