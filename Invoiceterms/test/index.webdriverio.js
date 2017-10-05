'use strict';
var should = require('should');
var common = require('./common.webdriverio');


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

    // Test case n°1 = Check the default configuration

	 require('./scenario/BO/disable_module.webdriverio');
     require('./scenario/FO/buy_product.webdriverio');
	 require('./scenario/BO/default_configuration.webdriverio');

    // Test case n°2 = Check the added configuration
     require('./scenario/BO/enable_module.webdriverio')
     require('./scenario/FO/buy_product.webdriverio');
	 require('./scenario/BO/invoiceterms_default.webdriverio');

    // Test case n°3 = Modify terms and conditions of use
	 require('./scenario/BO/edit_invoiceterms.webdriverio');
	 require('./scenario/FO/buy_product.webdriverio');
	 require('./scenario/BO/check_edited_invoiceterms.webdriverio');


});
