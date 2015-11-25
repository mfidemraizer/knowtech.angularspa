"use strict";

import {directives} from "/js/modules";

directives.directive("customClick", function() {
	return {
		restrict: "EA",
		scope: {
			clickHandler: "&onClick" // two-way binding
		},
		link: function(scope, element) {
			element.on("click", scope.clickHandler);
		},
		controller: function($scope) {
		}
	}
});