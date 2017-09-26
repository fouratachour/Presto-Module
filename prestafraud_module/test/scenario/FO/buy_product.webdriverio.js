'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');
var exit_cookieBanner = false;



describe('The Purchase of a product', function(){
	common.initMocha.call(this);

	before(function(done){
		this.selector = globals.selector;
		this.client.call(done);
	});
	after(common.after);

		it('Open the shop and loggin FO', function(done){
			this.client
                .url('http://' + URL)
                .waitForExist(this.selector.FO.AccessPage.access_loginFO, 90000)
                .click(this.selector.FO.AccessPage.access_loginFO)
                .waitForExist(this.selector.FO.AccessPage.loginFO, 90000)
                .setValue(this.selector.FO.AccessPage.loginFO, 'pub@prestashop.com')
                .setValue(this.selector.FO.AccessPage.passwordFO, '123456789')
                .click(this.selector.FO.AccessPage.loginFO_button)
                .pause(3000)
                .call(done);

		});

	describe('Add product to cart', function(done){
        it('should go to the product details', function(done){
			this.client
			    .waitForExist(this.selector.FO.Common.desktop_login, 90000)
				.click(this.selector.FO.Common.desktop_login)
				.waitForExist(this.selector.FO.ProductPage.product_choice, 90000)
				.click(this.selector.FO.ProductPage.product_choice)
				.waitForExist(this.selector.FO.ProductPage.product_image, 90000)
				.pause(2000)
				.click(this.selector.FO.ProductPage.validate_cart_choice)
                .pause(3000)
                .click(this.selector.FO.ProductPage.modal_valid_btn)
			    .call(done);
		});


	});

	describe('Validate the cart', function(){

        it('should go to Checkout Btn', function(done){
			this.client
                .waitForExist(this.selector.FO.CartSummary.command_button_checkout, 90000)
                .click(this.selector.FO.CartSummary.command_button_checkout)
                .call(done);

		});

        it('should select the address step-2', function(done){
			this.client
				.waitForExist(this.selector.FO.CartSummary.checkout_step2_continue_button, 90000)
				.click(this.selector.FO.CartSummary.checkout_step2_continue_button)
				.waitForExist(this.selector.FO.CartSummary.checkout_step3_continue_button, 90000)
				.click(this.selector.FO.CartSummary.checkout_step3_continue_button)
				.call(done);
		});

		 it('should select the payment step-3', function(done){
			this.client
				.waitForExist(this.selector.FO.CartSummary.checkout_step4_payment, 90000)
				.click(this.selector.FO.CartSummary.checkout_step4_payment)
			    .call(done);
		});

		 it('should select the shipping method step-4', function(done){
			 if (this.client.isExisting(this.selector.FO.Common.eupopup_closebutton)){
				 this.client
					 .click(this.selector.FO.Common.eupopup_closebutton);
			 };
			this.client
				.waitForExist(this.selector.FO.CartSummary.checkout_step4_cgv, 90000)
				.click(this.selector.FO.CartSummary.checkout_step4_cgv)
				.waitForExist(this.selector.FO.CartSummary.checkout_step4_order, 90000)
				.pause(2000)
				
				.click(this.selector.FO.CartSummary.checkout_step4_order)
				.pause(2000)
			    .call(done);
		});

	});

	describe('Log out in Front Office', function(done){
		it('should logout successfully in FO', function(done){
			this.client
                .waitForExist(this.selector.FO.AccessPage.logoutFO, 90000)
                .click(this.selector.FO.AccessPage.logoutFO)
                .waitForExist(this.selector.FO.AccessPage.access_loginFO, 90000)
                .call(done);

		});
	});

});