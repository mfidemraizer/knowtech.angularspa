"use strict";

import {controllers} from "/js/modules";
import services from "/js/services/stringHelperFactory";
import services1 from "/js/services/mathService";
import services2 from "/js/services/userRestClientProvider";

controllers.controller("HomeController", function($scope, $timeout, stringHelper, mathService, settings, someValue, userRestClient) {
    $scope.text = "Esto viene del controlador";
    $scope.enabled = true;
    $scope.persons = [];

    stringHelper.capitalizeFirstLetter("matias");

    var result = mathService.sumOne(1);

    $scope.personName = "";

    $scope.$watch("personName", function(newValue, oldValue) {
        
    });

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