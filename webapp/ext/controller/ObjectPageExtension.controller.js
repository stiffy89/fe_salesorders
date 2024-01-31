sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/ControllerExtension"
], function(MessageToast, ControllerExtension) {
    'use strict';

    return ControllerExtension.extend('ns.fesalesorders.ext.controller.ObjectPageExtension', {
        override: {
            onInit: function () {
                let that = this;
                let oController = this.getView().getController();
                let extensionAPI = this.getView().getController().extensionAPI;
                extensionAPI.attachPageDataLoaded(that.PageLoaded.bind(oController))
            }
        },
        PageLoaded : function (event) {
            //get the model
            let oModel = event.context.oModel;
            let sPath = event.context.getPath();
            
            if (sPath.includes('/SalesOrderSet')){
                //sales order line item
                let sSalesOrderID = oModel.getProperty(sPath + "/SalesOrderID");
                if (!sSalesOrderID){
                    //new document
                    //we can manipulate the items here
                }
            }
            else if (sPath.includes('/SalesOrderLineItemSet')){
                //line item
                let sSalesOrderID = oModel.getProperty(sPath + "/SalesOrderID");
                if (!sSalesOrderID){
                    //get the deep path
                    let sDeepPath = event.context.getDeepPath();
                    let sParentPath = "/" + sDeepPath.split('/')[1];
                    let sParentSalesOrderID = oModel.getProperty(sParentPath + "/SalesOrderID");
                    oModel.setProperty(sPath + "/SalesOrderID", sParentSalesOrderID);
                }
            }

        },
        DateFormatter: function (source) {
            if (source){
                return new Date(source).toDateString();
            } else {
                return source
            } 
        },
        DeliveryStatusFormatter: function (sDeliveryStatus) {
            if (sDeliveryStatus == "D") {
                return "Success"
            } else {
                return 'None'
            }
        },
        BillingStatusFormatter: function (sPaidStatus) {
            if (sPaidStatus == "P"){
                return "Success"
            } else {
                return "None"
            }
        }
    }) 
});