"use strict";

import uiRouter from "angular-ui-router";
import material from "angular-material";
import animate from "angular-animate";

export var app = angular.module("app", ["ui.router", "ngAnimate","app.directives", "ngMaterial", "app.controllers", "app.services"]);
export var controllers = angular.module("app.controllers", []);
export var services = angular.module("app.services", []);
export var directives = angular.module("app.directives", []);