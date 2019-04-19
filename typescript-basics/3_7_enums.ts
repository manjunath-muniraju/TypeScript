// enum is used to hold set of values like days of the week. so we have limited option to use which are correct.

enum DaysOfTheWeek {
    SUN, MON, TUE, WED, THU, FRI, SAT
}

let day: DaysOfTheWeek; // you are declaring day of type DayOfTheWeek

day = DaysOfTheWeek.MON; 
// now can assign any one value of DaysOfTheWeek enum to ''day'' variable.

// you can compare two values in enum

if(day === DaysOfTheWeek.MON) {
    console.log('need to go to work');
}

//actaully when js is rendered it basically create an array and assign integer value starting from 0.

// but can change that value.
enum DaysOfTheWeek1 {
    SUN = 100, MON, TUE, WED, THU, FRI, SAT
}

// here, SUN will get 100 and MON will get 101 and so on automatically.