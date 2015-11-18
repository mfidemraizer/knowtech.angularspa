"use strict";

import fontawesome from "font-awesome";
import angular from "angular";
import {app} from "/js/modules";
import $ from "jquery";
import master from "/js/controllers/MasterController";
import home from "/js/controllers/HomeController";

export class App {
    initialize() {
        app.constant("settings", Object.freeze({
            backgroundColor: "red"
        }));
        app.value("someValue", 11);

        app.config(function($stateProvider, $urlRouterProvider, userRestClientProvider) {
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