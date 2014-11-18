/*! Moment Fluent API v1.0.0
 *  https://github.com/nightkingch/moment.fluent
 *  Date: 2014-11-18
 *
 *  Fluent-API plugin for the Moment.js library
 *  http://momentjs.com/
 *
 *  Copyright 2014 Thomas Erni
 *  Released under the MIT license
 */

(function (root, undefined) {
    			
	// define internal moment reference
	var moment;

	if (typeof require == "function") {
		try { moment = require('moment'); } 
		catch (e) {}
	} 
	
	if (!moment && root.moment) {
		moment = root.moment;
	}
	
	if (!moment) {
		throw "Moment Fluent-API cannot find Moment.js";
	}

	var api = function FluentApi(utc) {
	    var _self = this;

	    this.mfnc = utc ? moment.utc : moment;
	    this.getBaseTime = function () {
	        return this.mfnc("0000.01.01", "YYYY-MM-DD").hours(0).minutes(0).seconds(0);
	    }

	    this.now = function () {
	        return _self.mfnc().year(0).months(0).date(1);
	    }

	    this.compare = function (min, max) {
	        return _self.now() >= min && _self.now() <= max;
	    }

	    this.isBreakfast = function () {
	        var min = _self.getBaseTime().hours(7).minutes(0).seconds(0).milliseconds(0);
	        var max = _self.getBaseTime().hours(9).minutes(0).seconds(0).milliseconds(0);

	        return _self.compare(min, max);
	    }

	    this.isSecondBreakfast = function () {
	        var min = _self.getBaseTime().hours(9).minutes(0).seconds(0).milliseconds(0);
	        var max = _self.getBaseTime().hours(11).minutes(0).seconds(0).milliseconds(0);

	        return _self.compare(min, max);
	    }

	    this.isMorning = function () {
	        var min = _self.getBaseTime().hours(9).minutes(0).seconds(0).milliseconds(0);
	        var max = _self.getBaseTime().hours(12).minutes(0).seconds(0).milliseconds(0);

	        return _self.compare(min, max);
	    }

	    this.isLunchtime = function () {
	        var min = _self.getBaseTime().hours(12).minutes(0).seconds(0).milliseconds(0);
	        var max = _self.getBaseTime().hours(15).minutes(0).seconds(0).milliseconds(0);

	        return _self.compare(min, max);
	    }

	    this.isAfternoon = function () {
	        var min = _self.getBaseTime().hours(15).minutes(0).seconds(0).milliseconds(0);
	        var max = _self.getBaseTime().hours(19).minutes(0).seconds(0).milliseconds(0);

	        return _self.compare(min, max);
	    }

	    this.isTeatime = function () {
	        var min = _self.getBaseTime().hours(16).minutes(30).seconds(0).milliseconds(0);
	        var max = _self.getBaseTime().hours(17).minutes(30).seconds(0).milliseconds(0);

	        return _self.compare(min, max);
	    }

	    this.isDinner = function () {
	        var min = _self.getBaseTime().hours(18).minutes(0).seconds(0).milliseconds(0);
	        var max = _self.getBaseTime().hours(20).minutes(0).seconds(0).milliseconds(0);

	        return _self.compare(min, max);
	    }

	    this.isEvening = function () {
	        var min = _self.getBaseTime().hours(19).minutes(0).seconds(0).milliseconds(0);
	        var max = _self.getBaseTime().hours(22).minutes(0).seconds(0).milliseconds(0);

	        return _self.compare(min, max);
	    }

	    this.isNight = function () {
	        var now = _self.now();

	        var min = _self.getBaseTime().hours(now.hours() <= 23 && now.hours() > 22 ? 22 : 0).minutes(0).seconds(0).milliseconds(0);
	        var max = _self.getBaseTime().hours(now.hours() >= 0 && now.hours() <= 5 ? 5 : 23).minutes(59).seconds(0).milliseconds(0);

	        return _self.compare(min, max);
	    }
	};

	moment.fluent = new api();
	moment.utc.fluent = new api(true);

})(this);
