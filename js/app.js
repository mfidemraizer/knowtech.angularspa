"use strict";

import angular from "angular";
import {app} from "/js/modules";
import $ from "jquery";
import home from "/js/controllers/HomeController";

export class App {
    initialize() {
        app.config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");

            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "/views/home.html",
                    controller: "HomeController"
                });
        });

        angular.bootstrap(document.getElementById("app"), ["app"]);
    }
}

$(function() {
    var app = new App();
    app.initialize(); 
});