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

    // Add EN rule in all categories in BO and check it in FO
    require('./scenario/BO/add_EN_rule_all_categories.webdriverio');
    require('./scenario/FO/check_EN_rule_all_categories.webdriverio');

    // Edit EN rule in all categories in BO and check it in FO
	require('./scenario/BO/edit_EN_rule_all_categories.webdriverio');
	require('./scenario/FO/check_edited_EN_rule_all_categories.webdriverio');

	// Add EN rule in a specific category in BO and check it in FO
	require('./scenario/BO/add_EN_rule_specific_category.webdriverio');
	require('./scenario/FO/check_EN_rule_specific_category.webdriverio');

	// Add FR rule in all categories and in specific category
	require('./scenario/BO/add_FR_rule_all_categories.webdriverio');
    require('./scenario/BO/add_FR_rule_specific_category.webdriverio');

	//Check all rules in FO
    require('./scenario/FO/check_all_rules.webdriverio')


});
