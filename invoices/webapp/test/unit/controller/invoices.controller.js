/*global QUnit*/

sap.ui.define([
	"logaligroup/invoices/controller/invoices.controller"
], function (Controller) {
	"use strict";

	QUnit.module("invoices Controller");

	QUnit.test("I should test the invoices controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
