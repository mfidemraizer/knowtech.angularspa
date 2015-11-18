"use strict";

import uiRouter from "angular-ui-router";
import material from "angular-material";

export var app = angular.module("app", ["ui.router", "ngMaterial", "app.controllers", "app.services"]);
export var controllers = angular.module("app.controllers", []);
export var services = angular.module("app.services", []);