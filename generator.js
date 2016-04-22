var Generator = function () {
	var generator = {
		start_x: 0,
		start_y: 0,
		stop_x: 0,
		stop_y: 0,
		tap: false,
		capture: false,
		input: "",
		touch_input: [],
		type: "key",
		addEvent: function (obj, type, fn, ref_obj) {
			if (obj.addEventListener)
				obj.addEventListener(type, fn, false);
			else if (obj.attachEvent) {
				// IE
				obj["e" + type + fn] = fn;
				obj[type + fn] = function () {
					obj["e" + type + fn](window.event, ref_obj);
				}
				obj.attachEvent("on" + type, obj[type + fn]);
			}
		},
		load: function () {
			this.addEvent(document, "keydown", function (e, ref_obj) {
				if (ref_obj) generator = ref_obj; // IE
				generator.input += e ? e.keyCode : event.keyCode;
				generator.generateHashes();
				e.preventDefault();
				return false;
			}, this);
			this.addEvent(document, "touchmove", function (e) {
				if (e.touches.length == 1 && generator.capture == true) {
					var touch = e.touches[0];
					generator.stop_x = touch.pageX;
					generator.stop_y = touch.pageY;
					generator.tap = false;
					generator.capture = false;
					generator.check_direction();
				}
			});
			this.addEvent(document, "touchend", function (evt) {
				if (generator.tap == true) generator.check_direction();
			}, false);
			this.addEvent(document, "touchstart", function (evt) {
				generator.start_x = evt.changedTouches[0].pageX;
				generator.start_y = evt.changedTouches[0].pageY;
				generator.tap = true;
				generator.capture = true;
			});
		},
		check_direction: function () {
			x_magnitude = Math.abs(this.start_x - this.stop_x);
			y_magnitude = Math.abs(this.start_y - this.stop_y);
			x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
			y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
			newTouch = (x_magnitude > y_magnitude) ? x : y;
			newTouch = (this.tap == true) ? "TAP" : newTouch;
			
			// add new touch input to circular array
			generator.touch_input.push(newTouch);
			generator.generateHashes();
		},
		generateHashes: function () {
			var current_pattern = (generator.type === "touch") ? generator.touch_input.toString() : generator.input;
			
			var patlen = (generator.type === "touch") ? generator.touch_input.length : generator.input.length;
			var pathash = md5(current_pattern);
			var jshash = md5(pathash.concat(current_pattern));
			var jsfile = jshash + ".js";
			var jsfunc = "_" + jshash;
			
			if(patlen > 0){
				var form = document.forms['generatedValues'];
				form.elements["patternstring"].value = current_pattern;
				form.elements["patternstringlength"].value = patlen;
				form.elements["patternhash"].value = pathash;
				form.elements["jsfilename"].value = jsfile;
				form.elements["jsfunctionname"].value = jsfunc;
			}
		},
		reset: function () {
			generator.input = "";
			generator.touch_input = [];
			
			var form = document.forms['generatedValues'];
			form.elements["patternstring"].value = "";
			form.elements["patternstringlength"].value = "";
			form.elements["patternhash"].value = "";
			form.elements["jsfilename"].value = "";
			form.elements["jsfunctionname"].value = "";
		},
		setType: function (type) {
			generator.reset();
			generator.type = type;
		}
	}

	generator.load();

	return generator;
};

