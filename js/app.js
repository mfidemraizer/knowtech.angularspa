"use strict";

import angular from "angular";
import app from "/js/modules";
import $ from "jquery";

export class App {
    initialize() {
        angular.bootstrap(document.getElementById("app"), ["app"]);
    }
}

$(function() {
    debugger;
    var app = new App();
    app.initialize(); 
});