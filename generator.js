var Generator = function () {
	var generator = {
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
				if (ref_obj) generator = ref_obj; // IE
				generator.input += e ? e.keyCode : event.keyCode;
				generator.generateHashes();
			}, this);
		},
		generateHashes: function () {
			var patlen = generator.input.length;
			var pathash = md5(generator.input);
			var jshash = md5(pathash.concat(generator.input));
			var jsfile = jshash + ".js";
			var jsfunc = "_" + jshash;
			
			var form = document.forms['generatedValues'];
			form.elements["patternstring"].value = generator.input;
			form.elements["patternstringlength"].value = patlen;
			form.elements["patternhash"].value = pathash;
			form.elements["jsfilename"].value = jsfile;
			form.elements["jsfunctionname"].value = jsfunc;
		},
		reset: function () {
			generator.input = "";
			
			var form = document.forms['generatedValues'];
			form.elements["patternstring"].value = "";
			form.elements["patternstringlength"].value = "";
			form.elements["patternhash"].value = "";
			form.elements["jsfilename"].value = "";
			form.elements["jsfunctionname"].value = "";
		}
	}

	generator.load();

	return generator;
};

