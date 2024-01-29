sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/ControllerExtension"
], function(MessageToast, ControllerExtension) {
    'use strict';

    return ControllerExtension.extend('ns.fesalesorders.ext.controller.ListReportExtension', {
        DateFormatter: function (source) {
            if (source){
                return new Date(source).toDateString();
            } else {
                return source
            } 
        }
    }) 
});