"use strict";

import {controllers} from "/js/modules";

controllers.controller("FriendListController", function($scope, $stateParams) {
	$scope.friends = 
	[
		{ nickname: "matias" },
		{ nickname: "benito.camela" }
	];

	$scope.friend = null;

	if($stateParams.hasOwnProperty("nickname")) {
		$scope.friend = $scope.friends
						.filter(f => f.nickname == $stateParams.nickname)[0];
	}
});

controllers.$inject = ["$scope", "$stateParams"];