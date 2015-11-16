"use strict";

import {services} from "/js/modules";

services.provider("userRestClient", function() {
	var provider = {
		serviceUri: "",

		$get: function() {
			return {
				getAllUsers: function() {
					var serviceUri = provider.serviceUri;
					return [];
				}
			};
		}
	};

	return provider;
});