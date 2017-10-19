var should = require('should');

module.exports = {
    verifRule: function (x , y) {
        it('should check the rule in the cover image of the' + y, function (done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute(this.selector.FO.ProductPage.product_image, "alt").then(function (text) {
                should(text).be.equal(x);
            })
                .call(done);
        });

        it('should check the rule in the thumbnail image of the' + y, function (done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute(this.selector.FO.ProductPage.thumbnail_image, "alt").then(function (text) {
                should(text).be.equal(x);
            })
                .call(done);
        });
    },

    selectSleevesTshirtProduct: function () {
        it('should select the "Faded Short Sleeves T-Shirt" product in the category "Tops"', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.HomePage.logo_home_page, 90000)
                .click(this.selector.FO.HomePage.logo_home_page)
                .waitForExist(this.selector.FO.HomePage.sleeves_tshirt_image, 90000)
                .click(this.selector.FO.HomePage.sleeves_tshirt_image)
                .call(done);
        });
    },

    selectPrintedDressCasualDressesCategory: function () {
        it('should select the "Printed Dress" product in the category "Dresses"', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.HomePage.logo_home_page, 90000)
                .click(this.selector.FO.HomePage.logo_home_page)
                .waitForExist(this.selector.FO.HomePage.printed_dress_casual_dresses_category_image, 90000)
                .click(this.selector.FO.HomePage.printed_dress_casual_dresses_category_image)
                .call(done);
        });
    },

    selectPrintedDressEveningDressesCategory: function () {
        it('should select the "Printed Dress" product in the category "Dresses"', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.FO.HomePage.logo_home_page, 90000)
                .click(this.selector.FO.HomePage.logo_home_page)
                .waitForExist(this.selector.FO.HomePage.printed_dress_evening_dresses_category_image, 90000)
                .click(this.selector.FO.HomePage.printed_dress_evening_dresses_category_image)
                .call(done);
        });
    }


}