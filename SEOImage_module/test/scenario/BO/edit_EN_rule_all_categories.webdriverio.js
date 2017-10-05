'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Edit the english rule in all categories ', function(){
    common.initMocha.call(this);

    before(function(done){
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function(done){
        it('should log in successfully in BO', function(done){
            global.fctname= this.test.title;
            this.client
                .signinBO()
                .waitForExist(this.selector.BO.Common.menu, 90000)
                .call(done);
        });
    });

    describe('Go to the module configuration page', function(done) {
        it('should go to the modules page', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(5000)
                .click(this.selector.BO.ModulePage.modules_menu)
                .waitForExist(this.selector.BO.ModulePage.modules_page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            global.fctname = this.test.title;

            this.client
                .click(this.selector.BO.ModulePage.installed_moule_page)
                .waitForExist(this.selector.BO.ModulePage.modules_search, 90000)
                .setValue(this.selector.BO.ModulePage.modules_search, "seoimg")
                .click(this.selector.BO.ModulePage.modules_search_button)
                .getText(this.selector.BO.ModulePage.nbr_module).then(function (text) {
                global.nbr = parseInt(text[0]);
                if (global.nbr == 0) {
                    done(new Error('The module you are searching for does not exist!'));
                }
                else
                    done();
            })
        });
    });

    describe('The configuration of the module', function(done) {
        it('should go to the module configuration page ', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModulePage.module_configuration_btn, 90000)
                .click(this.selector.BO.ModulePage.module_configuration_btn)
                .waitForExist(this.selector.BO.ModuleConfiguration.seo_config_panel, 90000)
                .click(this.selector.BO.ModuleConfiguration.seo_config_panel)
                .call(done);
        });

        it('should click on edit rule', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.dropdownlist_btn, 90000)
                .click(this.selector.BO.ModuleConfiguration.dropdownlist_btn)
                .waitForExist(this.selector.BO.ModuleConfiguration.edit_rule_btn, 90000)
                .click(this.selector.BO.ModuleConfiguration.edit_rule_btn)
                .call(done);
        });

        it('should click on next button', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.next_step_rules, 90000)
                .click(this.selector.BO.ModuleConfiguration.next_step_rules)
                .call(done);
        });

        it('should click on next button', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.next_step_rules, 90000)
                .click(this.selector.BO.ModuleConfiguration.next_step_rules)
                .call(done)
        });

        it('should edit the rule condition', function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.rules_condition, 90000)
                .leftClick(this.selector.BO.ModuleConfiguration.rules_condition)
                .pause(5000)
                .setValue(this.selector.BO.ModuleConfiguration.rules_condition,'{default_cat_name} EN1')
                .call(done);
        });
        it('should save the form', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.save_rules, 90000)
                .click(this.selector.BO.ModuleConfiguration.save_rules)
                .call(done);
        });

        it('should close the green validatlon ', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(2000)
                .click(this.selector.BO.ModuleConfiguration.close_green_validation)
                .call(done);
        });

        it('should click on apply rule ', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.BO.ModuleConfiguration.apply_rule1_btn, 90000)
                .click(this.selector.BO.ModuleConfiguration.apply_rule1_btn)
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