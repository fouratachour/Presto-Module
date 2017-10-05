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
            .waitForExist(this.selector.BO.LoginPage.login, 90000)
            .setValue(this.selector.BO.LoginPage.login, 'demo@prestashop.com')
            .setValue(this.selector.BO.LoginPage.password, 'prestashop_demo')
            .click(this.selector.BO.LoginPage.login_btn)
            .waitForExist(this.selector.BO.Common.menu, 90000)
            .call(cb);
    });

    client.addCommand('signinFO', function (cb) {
        this.selector = globals.selector;
        client
            .url('http://' + URL)
            .waitForExist(this.selector.FO.HomePage.access_loginFO, 90000)
            .click(this.selector.FO.HomePage.access_loginFO)
            .waitForExist(this.selector.FO.HomePage.loginFO, 90000)
            .setValue(this.selector.FO.HomePage.loginFO, 'pub@prestashop.com')
            .setValue(this.selector.FO.HomePage.passwordFO, '123456789')
            .click(this.selector.FO.HomePage.login_btnFO)
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

    client.addCommand('changeENlanguageFO', function (cb) {
        this.selector = globals.selector;
        client
            .pause(6000)
            .waitForExist(this.selector.FO.Common.lang_btn, 90000)
            .click(this.selector.FO.Common.lang_btn)
            .pause(3000)
            .waitForExist(this.selector.FO.Common.english_btn, 90000)
            .click(this.selector.FO.Common.english_btn)
            .call(cb);
    });

    client.addCommand('changeFRlanguageFO', function (cb) {
        this.selector = globals.selector;
        client
            .pause(6000)
            .waitForExist(this.selector.FO.Common.lang_btn, 90000)
            .click(this.selector.FO.Common.lang_btn)
            .pause(3000)
            .click(this.selector.FO.Common.french_btn)
            .pause(3000)
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
    take_screenshot: function (done) {
        client.saveScreenshot(__dirname +'/screenshots/' + client.desiredCapabilities.browserName + '-Exception' + '_' + global.fctname + '.png');
    },
    initMocha: function () {
        this.timeout(900000000);
        this.slow(45000);
    }
};
