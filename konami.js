/*
 * Hidden-Konami-JS
 * Code: https://github.com/rorosaurus/hidden-konami-js
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 */

var functionHash = "";

// unify adding events across browsers
function addEvent(obj, type, fn, ref_obj) {
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
}

// patternHash is the MD5 hash of the keycode input string
// patternLength is the number of digits in the keycode input string
var KeyKonami = function (patternHash, patternLength) {
	var keykonami = {
		input: "",
		load: function () {
			addEvent(document, "keydown", function (e, ref_obj) {
				if (ref_obj) keykonami = ref_obj; // IE
				keykonami.input += e ? e.keyCode : event.keyCode;
				// basically a circular buffer for string
				if (keykonami.input.length > patternLength)
					keykonami.input = keykonami.input.substr((keykonami.input.length - patternLength));
				// here we change the comparison to use hashes
				if (md5(keykonami.input) == patternHash) {
					// create our new hash, using public hash and secret input provided by user :)
					functionHash = md5(patternHash.concat(keykonami.input));
					// load the script and execute the easter egg
					loadScript(functionHash);
					// reset
					keykonami.input = "";
					e.preventDefault();
					return false;
				}
			}, this);
		}
	}
	keykonami.load();
	return keykonami;
};

var TouchKonami = function (patternHash, patternLength) {
	var touchkonami = {
		start_x: 0,
		start_y: 0,
		stop_x: 0,
		stop_y: 0,
		tap: false,
		capture: false,
		current_keys: [],
		load: function () {
			addEvent(document, "touchmove", function (e) {
				if (e.touches.length == 1 && touchkonami.capture == true) {
					var touch = e.touches[0];
					touchkonami.stop_x = touch.pageX;
					touchkonami.stop_y = touch.pageY;
					touchkonami.tap = false;
					touchkonami.capture = false;
					touchkonami.check_direction();
				}
			});
			addEvent(document, "touchend", function (evt) {
				if (touchkonami.tap == true) touchkonami.check_direction();
			}, false);
			addEvent(document, "touchstart", function (evt) {
				touchkonami.start_x = evt.changedTouches[0].pageX;
				touchkonami.start_y = evt.changedTouches[0].pageY;
				touchkonami.tap = true;
				touchkonami.capture = true;
			});
		},
		// determines what the new touch input effectively is
		check_direction: function () {
			x_magnitude = Math.abs(this.start_x - this.stop_x);
			y_magnitude = Math.abs(this.start_y - this.stop_y);
			x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
			y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
			newTouch = (x_magnitude > y_magnitude) ? x : y;
			newTouch = (this.tap == true) ? "TAP" : newTouch;
			
			// add new touch input to circular array
			touchkonami.current_keys.push(newTouch);
			if (touchkonami.current_keys.length > patternLength) touchkonami.current_keys.shift();
			// here we change the comparison to use hashes
			if (md5(touchkonami.current_keys.toString()) == patternHash) {
				// create our new hash, using public hash and secret input provided by user :)
				functionHash = md5(patternHash.concat(touchkonami.current_keys.toString()));
				// load the script and execute the easter egg
				loadScript(functionHash);
				// reset
				touchkonami.current_keys = [];
			}
		}
	}

	touchkonami.load();
	return touchkonami;
};

// Cheers to http://stackoverflow.com/a/950146
function loadScript(scriptHash) {
    var head = document.getElementsByTagName('head')[0];
	var scripts = head.getElementsByTagName('script');
	
	// Determine if script is already loaded
	for (x=0; x < scripts.length; x++) {
		if(~scripts[x].src.indexOf(scriptHash.concat(".js"))) {
			executeEasterEggFunction(); // Execute easter egg directly if loaded already
			return;
		}
	}
	
	// Otherwise load the secret js and then execute
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = scriptHash.concat(".js");

	// Then bind the event to the callback function.
	// There are several events for cross browser compatibility.
	script.onreadystatechange = executeEasterEggFunction;
	script.onload = executeEasterEggFunction;

	// Fire the loading
	head.appendChild(script);
}

// Called once the EasterEgg .js file is loaded
var executeEasterEggFunction = function() {
	// Must be prefaced with an "_", because js naming rules don't allow number to start
	var fn = window["_" + functionHash];
	// Better than using eval()
	if(typeof fn === 'function'){
		fn();
	}
}

