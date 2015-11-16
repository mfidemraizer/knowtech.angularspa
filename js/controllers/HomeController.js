"use strict";

import {controllers} from "/js/modules";

controllers.controller("HomeController", function($scope, $timeout) {
    $scope.text = "Esto viene del controlador";
    $scope.enabled = true;
    $scope.persons = [];

    $scope.personName = "";

    $scope.addPerson = function() {
      $scope.persons.push({ name: $scope.personName });  
    };

    $scope.dropPerson = function(person) {
        $scope.persons.splice($scope.persons.indexOf(person), 1); 
    };

    $timeout(function() {
        $scope.enabled = false;
    }, 3000);
});