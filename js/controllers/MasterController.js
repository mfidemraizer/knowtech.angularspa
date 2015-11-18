"use strict";

import {controllers} from "/js/modules";

controllers.controller("MasterController", function($scope, $mdSidenav, $timeout) {
    $scope.toggleAppMenu = function() {
        $mdSidenav("appMenu").toggle();
    };
});