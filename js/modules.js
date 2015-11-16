"use strict";

import uiRouter from "angular-ui-router";

export var app = angular.module("app", ["ui.router", "app.controllers", "app.services"]);
export var controllers = angular.module("app.controllers", []);
export var services = angular.module("app.services", []);