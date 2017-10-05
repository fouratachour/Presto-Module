'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Verify the rule applied to a specific category when the shop is in english', function(){
    common.initMocha.call(this);

    before(function(done){
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    it('should open the shop and loggin FO', function(done) {
        global.fctname = this.test.title;
        this.client
            .signinFO()
            .call(done);
    });

    describe('Verify the rule in a specific category when the shop is in english', function(done){
        it('should change the shop language to english', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(6000)
                .waitForExist(this.selector.FO.Common.lang_btn, 90000)
                .click(this.selector.FO.Common.lang_btn)
                .pause(3000)
                .waitForExist(this.selector.FO.Common.english_btn, 90000)
                .click(this.selector.FO.Common.english_btn)
                .call(done);
        });

        it('should go to all product page', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.HomePage.logo_home_pageFO, 90000)
                .click(this.selector.FO.HomePage.logo_home_pageFO)
                .scroll(0, 400)
                .pause(5000)
                .waitForExist(this.selector.FO.HomePage.all_product, 90000)
                .click(this.selector.FO.HomePage.all_product)
                .call(done);
        });

        it('should select the category Evening Dresses', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.CategoryPage.category_women_list, 90000)
                .click(this.selector.FO.CategoryPage.category_women_list)
                .pause(3000)
                .waitForExist(this.selector.FO.CategoryPage.dresses_category_list, 90000)
                .click(this.selector.FO.CategoryPage.dresses_category_list)
				.pause(3000)
                .waitForExist(this.selector.FO.CategoryPage.evening_dresses_category, 90000)
                .click(this.selector.FO.CategoryPage.evening_dresses_category)
                .call(done);
        });

        it('should select a product in the category Evening Dresses', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.CategoryPage.first_product, 90000)
                .click(this.selector.FO.CategoryPage.first_product)
                .call(done);
        });

        it('should verify the rule in the cover image of the product in the category Evening Dresses', function(done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute(this.selector.FO.ProductPage.product_image, "alt").then(function(text) {
                should(text).be.equal("€50.99€50.99 EN2");
            })
                .call(done);
        });

        it('should verify the rule in the thumbnail image of the product in the category Evening Dresses ', function(done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute(this.selector.FO.ProductPage.thumbnail_image, "alt").then(function(text) {
                should(text).be.equal("€50.99€50.99 EN2");
            })
                .call(done);
        });

        it('should select the category Casual Dresses', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.ProductPage.women_category, 90000)
                .click(this.selector.FO.ProductPage.women_category)
                .pause(3000)
                .waitForExist(this.selector.FO.CategoryPage.dresses_list, 90000)
                .click(this.selector.FO.CategoryPage.dresses_list)
                .pause(3000)
                .waitForExist(this.selector.FO.CategoryPage.casual_dresses_category, 90000)
                .click(this.selector.FO.CategoryPage.casual_dresses_category)
                .call(done);
        });

        it('should select a product in the category Casual Dresses', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.CategoryPage.first_product, 90000)
                .click(this.selector.FO.CategoryPage.first_product)
                .call(done);
        });

        it('should verify the rule in the cover image of the product in the category Casual Dresses', function(done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute(this.selector.FO.ProductPage.product_image, "alt").then(function(text) {
                should(text).be.equal("Casual Dresses EN1");
            })
                .call(done);
        });

        it('should verify the rule in the thumbnail image of the product in the category Casual Dresses ', function(done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute(this.selector.FO.ProductPage.thumbnail_image, "alt").then(function(text) {
                should(text).be.equal("Casual Dresses EN1");
            })
                .call(done);
        });
    });

    describe('Verify the rule in a specific category when the shop is in french', function(done){
        it('should change the shop language to french', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(6000)
                .waitForExist(this.selector.FO.Common.lang_btn, 90000)
                .click(this.selector.FO.Common.lang_btn)
                .pause(3000)
                .click(this.selector.FO.Common.french_btn)
                .pause(3000)
                .call(done);
        });

		it('should verify the rule in the cover image of the product in the category Evening Dresses', function(done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute(this.selector.FO.ProductPage.product_image, "title").then(function(text) {
                should(text).be.equal("");
            })
                .call(done);
        });

        it('should verify the rule in the thumbnail image of the product in the category Evening Dresses ', function(done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute(this.selector.FO.ProductPage.thumbnail_image, "alt").then(function(text) {
                should(text).be.equal("");
            })
                .call(done);
        });
    });

    describe('Log out in Front Office', function(done){
        it('should logout successfully in FO', function(done){
            global.fctname= this.test.title;
            this.client
                .signoutFO()
                .call(done);
        });
    });

});