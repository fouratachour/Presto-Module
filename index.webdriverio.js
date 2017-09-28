'use strict';
var should = require('should');
var common = require('./common/common.webdriverio');


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
    require('./Faviconotification/test/index.webdriverio.js');

    //Test case n°2 = Buy a product
    require('./Prestafraud/test/index.webdriverio.js');

    //Test case n°3 = Check the notification Prestafraud
    require('./Upela/test/index.webdriverio.js');

});
