'use strict';
var should = require('should');
var common = require('../common.webdriverio');
var globals = require('../globals.webdriverio.js');
var language = require('../scenario/actionbloc/set-language.webdriverio');
var module = require('./../scenario/actionbloc/action-module.webdriverio');
var authentication = require('../scenario/actionbloc/authentication.webdriverio');
var rule = require('./../scenario/actionbloc/add-rule.webdriverio');
var checkRule = require('../scenario/actionbloc/check-rule.webdriverio');

describe('Allscenario', function(){
    common.initMocha.call(this);

    before(function (done) {
        this.client = common.getClient();
        this.client.call(done);
    });

    after(function (done) {
        this.client
            .end()
            .call(done);
    });

    describe('Test case n°1 : Add and check english rule in all categories', function(){
        common.initMocha.call(this);

        before(function(done){
            this.selector = globals.selector;
            this.client.call(done);
        });

        after(common.after);

        describe('Add english rule in all categories', function() {
            authentication.loginBO();
            module.searchModule("seoimage");
            describe('Configure the SEO Image module', function () {
                module.configureModule();
                rule.addRule('testEN1');
                language.selectRuleLanguage(1 , " english");
                rule.clickNextButton();
                rule.allCategory();
                rule.clickNextButton();
                rule.ruleCondition('{product_name}{product_reduce_price} EN1',' "{product_name}{product_reduce_price} EN1"' );
                rule.saveForm();
                rule.closeGreenValidation();
                rule.applyRule(1);
            });
            authentication.logoutBO();
        });

        describe('Check english rule in all categories in FO', function() {
            authentication.openShop();
            describe('Check that the rule exists when the shop is in english', function () {
                language.selectLanguageFO(1 , " english");
                checkRule.selectSleevesTshirtProduct();
                checkRule.verifRule("Faded Short Sleeves T-shirt€19.81 EN1" , ' "Faded Short Sleeves T-Shirt" product in the category "Tops"');
                checkRule.selectPrintedDressCasualDressesCategory();
                checkRule.verifRule("Printed Dress€31.19 EN1" , ' "Printed Dress" product in the category "Casual Dresses"');
            });

            describe('Check that the rule does not exist when the shop is in french', function () {
                language.selectLanguageFO(2 , " french");
                checkRule.verifRule("" , ' "Printed Dress" product in the category Casual "Dresses"');
                checkRule.selectSleevesTshirtProduct();
                checkRule.verifRule("" , ' "Faded Short Sleeves T-Shirt" product in the category "Tops"');
            });
        });
    });

    describe('Test case n°2 : Edit and check english rule in all categories', function(){
        common.initMocha.call(this);

        before(function(done){
            this.selector = globals.selector;
            this.client.call(done);
        });

        after(common.after);

        describe('Edit english rule in all categories', function() {
            authentication.loginBO();
            module.searchModule("seoimage");
            describe('Configure the SEO Image module', function () {
                module.configureModule();
                it('should click on "edit" rule', function(done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.ModuleConfiguration.dropdown_button, 90000)
                        .click(this.selector.BO.ModuleConfiguration.dropdown_button)
                        .waitForExist(this.selector.BO.ModuleConfiguration.edit_rule_button, 90000)
                        .click(this.selector.BO.ModuleConfiguration.edit_rule_button)
                        .call(done);
                });
                rule.clickNextButton();
                rule.clickNextButton();
                rule.ruleCondition('{default_cat_name} EN1',' "{default_cat_name} EN1"');
                rule.saveForm();
                rule.closeGreenValidation();
                rule.applyRule(1);
            });
            authentication.logoutBO();
        });

        describe('Check english rule in all categories in FO', function() {
            authentication.openShop();
            describe('Check that the rule exists when the shop is in english', function () {
                language.selectLanguageFO(1 , " english");
                checkRule.selectSleevesTshirtProduct();
                checkRule.verifRule("T-shirts EN1" , ' "Faded Short Sleeves T-Shirt" product in the category "Tops"');
                checkRule.selectPrintedDressCasualDressesCategory();
                checkRule.verifRule("Casual Dresses EN1" , ' "Printed Dress" product in the category "Casual Dresses"');
            });

            describe('Check that the rule does not exist when the shop is in french', function () {
                language.selectLanguageFO(2 , " french");
                checkRule.verifRule("" , ' "Printed Dress" product in the category "Casual Dresses"');
                checkRule.selectSleevesTshirtProduct();
                checkRule.verifRule("" , ' "Faded Short Sleeves T-Shirt" product in the category "Tops"');
            });
        });
    });

    describe('Test case n°3 : Add and check english rule in a specific category', function(){
        common.initMocha.call(this);

        before(function(done){
            this.selector = globals.selector;
            this.client.call(done);
        });

        after(common.after);

        describe('Add english rule in a specific category', function() {
            authentication.loginBO();
            module.searchModule("seoimage");
            describe('Configure the SEO Image module', function () {
                module.configureModule();
                rule.addRule('testEN2');
                language.selectRuleLanguage(1 , " english");
                rule.clickNextButton();
                rule.selectEveningDressesCategory();
                rule.clickNextButton();
                rule.ruleCondition('{product_price_wt}{product_reduce_price_wt}{product_reduction_percent} EN2',' "{product_price_wt}{product_reduce_price_wt}{product_reduction_percent} EN2"');
                rule.saveForm();
                rule.closeGreenValidation();
                rule.applyRule(2);
            });

            authentication.logoutBO();
        });

        describe('Check english rule in a specific category in FO', function() {
            authentication.openShop();
            describe('Check that the rule exists when the shop is in english', function () {
                language.selectLanguageFO(1 , " english");
                checkRule.selectPrintedDressEveningDressesCategory();
                checkRule.verifRule("€50.99€50.99 EN2" , ' "Printed Dress" product in the category "Evening Dresses"');
                checkRule.selectPrintedDressCasualDressesCategory();
                checkRule.verifRule("Casual Dresses EN1" , ' "Printed Dress" product in the category "Casual Dresses"');

            });

            describe('Check that the rule does not exist when the shop is in french', function () {
                language.selectLanguageFO(2 , " french")
                checkRule.verifRule("" , ' "Printed Dress" product in the category "Casual Dresses"');
                checkRule.selectPrintedDressEveningDressesCategory();
                checkRule.verifRule("" , ' "Printed Dress" product in the category "Casual Dresses"');
            });
        });
    });

    describe('Test case n°4 : Apply all rules', function(){
        common.initMocha.call(this);

        before(function(done){
            this.selector = globals.selector;
            this.client.call(done);
        });

        after(common.after);

        describe('Add french rule in all categories', function() {
            authentication.loginBO();
            module.searchModule("seoimage");
            describe('Configure the SEO Image module', function() {
                module.configureModule();
                rule.addRule('testFR1');
                language.selectRuleLanguage(2 , " french");
                rule.clickNextButton();
                rule.allCategory();
                rule.clickNextButton();
                rule.ruleCondition('{product_name}{product_reference} FR1',' "{product_name}{product_reference} FR1"');
                rule.saveForm();
                rule.closeGreenValidation();
            });
        });

        describe('Add french rule in a specific category', function() {
            describe('Configure the SEO Image module', function () {
                rule.addRule('testFR2');
                language.selectRuleLanguage(2 , " french");
                rule.clickNextButton();
                rule.selectEveningDressesCategory();
                rule.clickNextButton();
                rule.ruleCondition('{product_price_wt}{product_reduce_price_wt}{product_reduction_percent} FR2',' "{product_price_wt}{product_reduce_price_wt}{product_reduction_percent} FR2"');
                rule.saveForm();
                rule.closeGreenValidation();
                it('should click on apply all rules button ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .pause(5000)
                        .waitForExist(this.selector.BO.ModuleConfiguration.apply_all_rules_button, 90000)
                        .click(this.selector.BO.ModuleConfiguration.apply_all_rules_button)
                        .pause(5000)
                        .call(done);
                });
            });
            authentication.logoutBO();
        });

        describe('Check all rules in FO', function() {
            authentication.openShop();
            describe('Check that the rule exists when the shop is in english', function () {
                language.selectLanguageFO(1 , " english")
                checkRule.selectPrintedDressEveningDressesCategory();
                checkRule.verifRule("€50.99€50.99 EN2" , ' "Printed Dress" product in the category Evening "Dresses"');
                checkRule.selectSleevesTshirtProduct();
                checkRule.verifRule("T-shirts EN1" , ' "Faded Short Sleeves T-Shirt" product in the category "Tops"');
            });

            describe('Check that the rule exists when the shop is in french', function () {
                language.selectLanguageFO(2 ," french")
                checkRule.verifRule("T-shirt délavé à manches courtesdemo_1 FR1" , ' "Faded Short Sleeves T-Shirt" product in the category "Tops"');
                checkRule.selectPrintedDressEveningDressesCategory();
                checkRule.verifRule("€50.99€50.99 FR2" , ' "Printed Dress" product in the category "Casual Dresses"');

            });


        });
    });

});