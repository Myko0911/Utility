sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History"
	
], function (Controller, JSONModel, History,MessageToast) {
	"use strict";
	return Controller.extend("UTILITY.UTILITY.controller.Imports", {
	
		/**
		 * Binding
		 */
		onInit: function () {
		/**	var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock") + "/products.json");
			this.getView().setModel(oModel); */
			
		}
		,
		handleReject: function (evt) {
			var oList = evt.getSource().getParent();
			oList.removeAggregation("items", oList.getSwipedItem());
			oList.swipeOut();
		},
		
		OnClickBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", true);
			}
		},
		
		/**
		 * Transaction
		 */
		
	
		
		OnClickImportItem: function (oEvent) {
			
		/** MCA 11/28/2019
		 * Get Items/Units from RE-Database
		 */	
		 var url="/destinations/public/rexsjs/ExecQuery.xsjs?dbName=APP_RE&procName=SPAPP_INTEG_B1&queryType=GET_MASTERDATA_UNIT&colName=&colValue=";
		 var oGet="GET";
		 var oCredential ={};
		 oCredential.UserName ="SYSTEM";
		 oCredential.Password="P@ssw0rd12345678";
			
			$.ajax({
				url: url,
				data: JSON.stringify(oCredential),
				type: oGet,
				dataType: "json",
				xhrFields: {
					withCredentials: true
				},
				error: function (xhr, status, error) {
					sap.m.MessageToast(xhr.responseText);
				},
				success: function (json) {
				},
				context: this
			}).done(function (results) {
				if (results) {
					sap.m.MessageToast("Nakuha na!");
				}
			});
		
		},
	
		OnClickImportBP: function (oEvent) {
		
		/** MCA 11/28/2019
		 * Get BP from RE-Database
		 */	
		
		}
	});
});