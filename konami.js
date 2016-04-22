/*
 * Hidden-Konami-JS
 * Code: https://github.com/rorosaurus/hidden-konami-js
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 */

var functionHash = "";

// patternHash is the MD5 hash of the keycode input string
// patternLength is the number of digits in the keycode input string
var Konami = function (patternHash, patternLength) {
	var konami = {
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
		input: "",
		load: function (link) {
			this.addEvent(document, "keydown", function (e, ref_obj) {
				if (ref_obj) konami = ref_obj; // IE
				konami.input += e ? e.keyCode : event.keyCode;
				// basically a circular buffer for string
				if (konami.input.length > patternLength)
					konami.input = konami.input.substr((konami.input.length - patternLength));
				// here we change the comparison to use hashes
				if (md5(konami.input) == patternHash) {
					// create our new hash, using public hash and secret input provided by user :)
					functionHash = md5(patternHash.concat(konami.input));
					// load the script and execute the easter egg
					loadScript(functionHash);
					// reset
					konami.input = "";
					e.preventDefault();
					return false;
				}
			}, this);
		}
	}

	konami.load();

	return konami;
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

