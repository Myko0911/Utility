sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
	"use strict";
	return Controller.extend("UTILITY.UTILITY.controller.Main", {
		onInit: function () {},
		/**
		 *@memberOf UTILITY.UTILITY.controller.Main
		 */
		onClickConfig: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Configuration", true);
		},
		/**
		 *@memberOf UTILITY.UTILITY.controller.Main
		 */
		onClickImports: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Imports", true);
		}
	});
});