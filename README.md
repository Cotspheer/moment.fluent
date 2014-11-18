moment.fluent
=============

Simple Fluent Time API for Moment.js

Examples
--------

### Local-Time

``` javascript
moment.fluent.isMorning(); //returns true between 7:00 & 9:00 o'clock
moment.fluent.isAfternoon(); //returns true between 15:00 & 19:00 o'clock
moment.fluent.isEvening(); //returns true between 19:00 & 22:00 o'clock
moment.fluent.isNight(); //returns true between 22:00 & 06:00 o'clock
```

### UTC

``` javascript
moment.utc.fluent.isMorning(); //returns true between 7:00 & 9:00 o'clock
moment.utc.fluent.isAfternoon(); //returns true between 15:00 & 19:00 o'clock
moment.utc.fluent.isEvening(); //returns true between 19:00 & 22:00 o'clock
moment.utc.fluent.isNight(); //returns true between 22:00 & 06:00 o'clock
```
