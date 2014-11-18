moment.fluent
=============

Simple Fluent Time API for Moment.js

Examples
--------

### Local-Time

``` javascript
moment.fluent.isBreakfast(); //returns true between 7:00 & 9:00 o'clock
moment.fluent.isSecondBreakfast(); //returns true between 9:00 & 11:00 o'clock
moment.fluent.isMorning(); //returns true between 9:00 & 12:00 o'clock
moment.fluent.isLunchtime(); //returns true between 12:00 & 15:00 o'clock
moment.fluent.isAfternoon(); //returns true between 15:00 & 19:00 o'clock
moment.fluent.isTeatime(); //returns true between 16:30 & 17:30 o'clock
moment.fluent.isDinner(); //returns true between 18:00 & 20:00 o'clock
moment.fluent.isEvening(); //returns true between 19:00 & 22:00 o'clock
moment.fluent.isNight(); //returns true between 22:00 & 06:00 o'clock
```

### UTC

``` javascript
moment.utc.fluent.isBreakfast(); //returns true between 7:00 & 9:00 o'clock
moment.utc.fluent.isSecondBreakfast(); //returns true between 9:00 & 11:00 o'clock
moment.utc.fluent.isMorning(); //returns true between 9:00 & 12:00 o'clock
moment.utc.fluent.isLunchtime(); //returns true between 12:00 & 15:00 o'clock
moment.utc.fluent.isAfternoon(); //returns true between 15:00 & 19:00 o'clock
moment.utc.fluent.isTeatime(); //returns true between 16:30 & 17:30 o'clock
moment.utc.fluent.isDinner(); //returns true between 18:00 & 20:00 o'clock
moment.utc.fluent.isEvening(); //returns true between 19:00 & 22:00 o'clock
moment.utc.fluent.isNight(); //returns true between 22:00 & 06:00 o'clock
```
