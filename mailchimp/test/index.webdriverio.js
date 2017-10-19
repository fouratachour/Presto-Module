'use strict';
var should = require('should');
var common = require('../../common/common.webdriverio');


describe('Allscenario', function () {
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

         // Test n°1 = Check the store configuration
    require('./scenario/BO/check_magasin_configuration.webdriverio.js');
        // Test n°2 = Check the mailchimp configuration
    require('./scenario/BO/check_mailchimp_configuration.webdriverio.js');



});
