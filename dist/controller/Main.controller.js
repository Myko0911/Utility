sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/m/MessageToast"],function(o,n,t){"use strict";return o.extend("UTILITY.UTILITY.controller.Main",{onInit:function(){},onClickConfig:function(o){var n=sap.ui.core.UIComponent.getRouterFor(this);n.navTo("Configuration",true)},onClickImports:function(o){var n=sap.ui.core.UIComponent.getRouterFor(this);n.navTo("Imports",true)}})});