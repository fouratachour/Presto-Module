'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
var pdfUtil = require('pdf-to-text');
var TextPosition;
describe('Test case n°1 = Check the default configuration', function(){
	common.initMocha.call(this);

	before(function(done){
		this.selector = globals.selector;
		this.client.call(done);
	});

	after(common.after);


		describe('Log in in Back Office', function(done){
		    it('should log in successfully in BO', function(done){
			    this.client
                    .signinBO()
                    .waitForExist(this.selector.menu, 90000)
                    .call(done);
			});
		});

		describe('Check the default configuration in BO', function(done){

            it('should go to modules page', function (done) {
                this.client
                    .waitForExist(this.selector.BO.ModulesPage.modules_subtab, 90000)
                    .click(this.selector.BO.ModulesPage.modules_subtab)
                    .waitForExist(this.selector.BO.ModulesPage.page_loaded, 90000)
                    .call(done);
            });

            it('should go to the module and enable', function (done) {
                if (global.nbr === 0) {
                    done(new Error('The module you are searching for does not exist!'));
                }else {
                    this.client
                        .setValue(this.selector.BO.ModulesPage.search_input, "invoice")
                        .click(this.selector.BO.ModulesPage.search_button)

                        .waitForExist('//*[@id="modules-list-container-all"]/div/div/div/div[5]/div[2]/form/button', 90000)
                        .click('//*[@id="modules-list-container-all"]/div/div/div/div[5]/div[2]/form/button')


                        .waitForVisible(this.selector.green_validation, 90000)
                        .click(this.selector.green_validation)

                        .call(done);
                }
            });

		});



		
	describe('Log out in Back Office', function(done){
        it('should log out successfully in BO', function(done){
			this.client
				.signoutBO()
				.call(done);
		});
	});

});