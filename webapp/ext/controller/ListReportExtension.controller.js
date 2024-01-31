sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/ControllerExtension"
], function(MessageToast, ControllerExtension) {
    'use strict';

    return ControllerExtension.extend('ns.fesalesorders.ext.controller.ListReportExtension', {
        override: {
            onInit: function () {
                console.log(this)
            },
            beforeSaveExtension: function () {
                console.log(this)
            },
            beforeDeleteExtension: function () {
                console.log('here')
            },
            getPredefinedValuesForCreateExtension : function (oSmartFilterBar, oDefaultValues) {
                var oRet = {};
                oRet['Note'] = 'Sample';
                return oRet; 
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