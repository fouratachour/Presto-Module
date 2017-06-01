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

	//create a rule FR in BO and check it in FO
        //require('./scenario/BO/add_rules_FR.webdriverio');
        //require('./scenario/FO/verify_rules_FR.webdriverio');

        //require('./scenario/BO/edit_rules_FR.webdriverio');
        //require('./scenario/FO/verify_edited_rule_FR.webdriverio');

        //require('./scenario/BO/add_rules_EN.webdriverio');
       // require('./scenario/FO/verify_rules_EN.webdriverio');

       // require('./scenario/BO/add_apply_multi_rules_EN.webdriverio');
        require('./scenario/FO/verify_rules_list_EN.webdriverio');

});
