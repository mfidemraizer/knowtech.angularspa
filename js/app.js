"use strict";

import fontawesome from "font-awesome";
import angular from "angular";
import {app} from "/js/modules";
import $ from "jquery";
import master from "/js/controllers/MasterController";
import home from "/js/controllers/HomeController";
import friendList from "/js/controllers/FriendListController";
import sampleDirective from "/js/directives/sampleDirective.js";

export class App {
    initialize() {
        app.constant("settings", Object.freeze({
            backgroundColor: "red"
        }));
        app.value("someValue", 11);

        app.config(function($stateProvider, $locationProvider, $urlRouterProvider, userRestClientProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise("/friendlist");
            
            userRestClientProvider.serviceUri = "http://domain.com/api/v2/users";

            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "/views/home.html",
                    controller: "HomeController"
                })
                .state("friendlist", {
                    url: "/friendlist",
                    templateUrl: "/views/friendlist.html",
                    controller: "FriendListController"
                })
                .state("friendlist.detail", {
                    url: "/detail/:nickname",
                    templateUrl: "/views/friendlist.detail.html",
                    controller: "FriendListController"
                })
        });

        angular.bootstrap(document.getElementById("app"), ["app"]);
    }
}

$(function() {
    var app = new App();
    app.initialize(); 
});