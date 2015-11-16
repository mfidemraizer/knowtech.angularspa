"use strict";

import {services} from "/js/modules";

function mathService() {
	this.sumOne = (someNumber) => someNumber + 1;
}

services.service("mathService", mathService);