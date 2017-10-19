'use strict';
var client;
var webdriverio = require('webdriverio');
var globals = require('./globals.webdriverio');

var options = {
    logLevel: 'silent',
    waitForTimeout: 30000,
    desiredCapabilities: {
        browserName: 'chrome',
	},
	port: 4444
}; 

var options2 = {
    logLevel: 'silent',
    waitForTimeout: 30000,
    desiredCapabilities: {
        browserName: 'chrome',
		'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
		username: process.env.SAUCE_USERNAME,
		access_key: process.env.SAUCE_ACCESS_KEY,
		screenResolution: "1680x1050",
		platform: "Windows 7",
	},
	port: 4445
}; 

function initCommands(client) {

    client.addCommand('localhost', function (cb) {
        this.selector = globals.selector;
        client
            .url('http://' + URL + 'install-dev')
            .call(cb);
    });

    client.addCommand('signinBO', function (cb) {
        this.selector = globals.selector;
        client
            .url('http://' + URL + '/admin-dev/')
            .waitForExist(this.selector.BO.LoginPage.login_input, 90000)
            .setValue(this.selector.BO.LoginPage.login_input, 'demo@prestashop.com')
            .setValue(this.selector.BO.LoginPage.password_input, 'prestashop_demo')
            .click(this.selector.BO.LoginPage.login_button)
            .waitForExist(this.selector.BO.Common.menu, 90000)
            .call(cb);
    });

    client.addCommand('signinFO', function (cb) {
        this.selector = globals.selector;
        client
            .url('http://' + URL)
            .waitForExist(this.selector.FO.HomePage.access_login_button, 90000)
            .click(this.selector.FO.HomePage.access_login_button)
            .waitForExist(this.selector.FO.HomePage.login_input, 90000)
            .setValue(this.selector.FO.HomePage.login_input, 'pub@prestashop.com')
            .setValue(this.selector.FO.HomePage.password_input, '123456789')
            .click(this.selector.FO.HomePage.login_button)
            .waitForExist(this.selector.FO.HomePage.logo_home_page)
            .call(cb);
    });

    client.addCommand('signoutBO', function (cb) {
        this.selector = globals.selector;
        client
            .deleteCookie()
            .call(cb);
    });

    client.addCommand('signoutBO2', function (cb) {
        this.selector = globals.selector;
        client
            .deleteCookie()
            .call(cb);
    });

    client.addCommand('signoutFO', function (cb) {
        this.selector = globals.selector;
        client
            .deleteCookie()
            .call(cb);
    });

    client.addCommand('getProductname', function (cb) {
        this.selector = globals.selector;
        client
            .getText(this.selector.FO.ProductPage.product_name).then(function (text) {
				global.prod_name = text.toLowerCase();
        	})
            .call(cb);
    });

    client.addCommand('getProductprice', function (cb) {
        this.selector = globals.selector;
        client
            .getText(this.selector.FO.ProductPage.product_price).then(function (text) {
				global.prod_price = text;
				})
            .call(cb);
    });

    client.addCommand('getProductcategory', function (cb) {
        this.selector = globals.selector;
        client
            .getText(this.selector.FO.ProductPage.category_name).then(function (text) {
            global.categ_name = text.toLowerCase();
        })
            .call(cb);
    });
}
module.exports = {
    getClient: function () {
        if (client) {
            return client;
        } else {
			if (typeof saucelabs !== 'undefined' && saucelabs != "None"){
				client = webdriverio
					.remote(options2)
					.init()
					.windowHandleMaximize()
			}else{
            client = webdriverio
					.remote(options)
					.init()
					.windowHandleMaximize()
			}
            initCommands(client);

            return client;
        }
    },
    after: function (done) {
            done();
    },
    /*take_screenshot: function (done) {
        client.saveScreenshot(__dirname +'/screenshots/' + client.desiredCapabilities.browserName + '-Exception' + '_' + global.fctname + '.png');
    },*/
    initMocha: function () {
        this.timeout(900000000);
        this.slow(45000);
    }
};
