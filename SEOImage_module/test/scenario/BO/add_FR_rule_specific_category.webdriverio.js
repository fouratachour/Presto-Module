'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Add rule in a specific category when the front is in french ', function(){
    common.initMocha.call(this);

    before(function(done){
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('The add of the french rule', function(done) {
        it('should click on add new rule', function(done) {
            global.fctname = this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.BO.ModuleConfiguration.add_rules_btn, 90000)
                .click(this.selector.BO.ModuleConfiguration.add_rules_btn)
                .call(done);
        });

        it('should add the rule name', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.rule_name, 60000)
                .setValue(this.selector.BO.ModuleConfiguration.rule_name, 'testFR2')
                .call(done);
        });

        it('should choose the french language', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.rule_lang_btn, 90000)
                .click(this.selector.BO.ModuleConfiguration.rule_lang_btn)
                .waitForExist(this.selector.BO.ModuleConfiguration.rule_french_lang, 90000)
                .click(this.selector.BO.ModuleConfiguration.rule_french_lang)
                .call(done);
        });
        it('should click on next button', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.next_step_rules, 90000)
                .click(this.selector.BO.ModuleConfiguration.next_step_rules)
                .call(done);
        });

        it('should select Evening dresses category', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(2000)
                .waitForExist(this.selector.BO.ModuleConfiguration.expan_all_btn, 90000)
                .click(this.selector.BO.ModuleConfiguration.expan_all_btn)
                .waitForExist(this.selector.BO.ModuleConfiguration.evening_dress_checkbox, 90000)
                .click(this.selector.BO.ModuleConfiguration.evening_dress_checkbox)
                .call(done)
        });

        it('should click on next button', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.next_step_rules, 90000)
                .click(this.selector.BO.ModuleConfiguration.next_step_rules)
                .call(done)
        });

        it('should write the rule condition', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.rules_condition, 90000)
                .leftClick(this.selector.BO.ModuleConfiguration.rules_condition)
                .pause(5000)
                .setValue(this.selector.BO.ModuleConfiguration.rules_condition,'{product_price_wt}{product_reduce_price_wt}{product_reduction_percent} FR2')
                .call(done);
        });
        it('should save the form', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.save_rules, 90000)
                .click(this.selector.BO.ModuleConfiguration.save_rules)
                .call(done);
        });

        it('should close the green validation ', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(2000)
                .click(this.selector.BO.ModuleConfiguration.close_green_validation)
                .call(done);
        });

        it('should click on apply all rules ', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.BO.ModuleConfiguration.apply_all_rules, 90000)
                .click(this.selector.BO.ModuleConfiguration.apply_all_rules)
                .pause(5000)
                .call(done);
        });
    });

    describe('Log out in Back Office', function(done){
        it('should log out successfully in BO', function(done){
            global.fctname= this.test.title;
            this.client
                .signoutBO()
                .call(done);
        });
    });
});