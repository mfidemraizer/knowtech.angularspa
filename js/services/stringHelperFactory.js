"use strict";

import {services} from "/js/modules";

services.factory("stringHelper", function(settings) {
	class StringHelper {
		capitalizeFirstLetter(someString) {
			return someString[0].toUpperCase() + someString.substring(1);
		}
	}

	return new StringHelper();
});