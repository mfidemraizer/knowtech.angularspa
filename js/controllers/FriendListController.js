"use strict";

import {controllers} from "/js/modules";

controllers.controller("FriendListController", function($scope, $timeout, $stateParams, $http) {
	$scope.friends = [];
	$scope.text = "hello world";

	setTimeout(function() {
		$scope.$apply(function() {
			$scope.text = "hello world XXXXXXXXXXXXXXXX";
		});
	}, 1000);

	$http.get("/api/v1/friends").then(function(response) {
		$scope.friends = response.data;
	});

	$scope.newFriendName = null;
	$scope.friend = null;
	$scope.selectedFriend = { nickname: "" };

	$scope.addFriend = function() {
		var friendToAdd = { nickname: $scope.newFriendName };

		$http.post("/api/v1/friends", friendToAdd)
			.then(function(response) {
				friendToAdd.id = response.data.id;
				$scope.friends.push(friendToAdd);
			});
	};

	$scope.modifyFriend = function() {
		$http.put("/api/v1/friends/" + $scope.selectedFriend.id);
	};

	$scope.selectFriend = friend => $scope.selectedFriend = friend;

	if($stateParams.hasOwnProperty("nickname")) {
		$scope.friend = $scope.friends
						.filter(f => f.nickname == $stateParams.nickname)[0];
	}
});

controllers.$inject = ["$scope", "$timeout", "$stateParams", "$http"];