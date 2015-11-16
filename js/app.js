"use strict";

import angular from "angular";
import {app} from "/js/modules";
import $ from "jquery";
import home from "/js/controllers/HomeController";

export class App {
    initialize() {
        app.constant("settings", Object.freeze({
            backgroundColor: "red"
        }));
        app.value("someValue", 11);

        app.config(function($stateProvider, $urlRouterProvider, userRestClientProvider) {
            debugger;
            $urlRouterProvider.otherwise("/home");

            userRestClientProvider.serviceUri = "http://domain.com/api/v2/users";

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