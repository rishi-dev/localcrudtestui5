sap.ui.define([
   "sap/ui/core/mvc/Controller",
   	"sap/m/MessageToast",
   	"sap/ui/model/json/JSONModel"
], function (Controller,MessageToast,JSONModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
   		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}	
   });
});