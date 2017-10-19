module.exports = {
    loginBO : function () {
        describe('Log in in Back Office', function (done) {
            it('should log in successfully in BO', function (done) {
                global.fctname = this.test.title;
                this.client
                    .signinBO()
                    .waitForExist(this.selector.BO.Common.menu, 90000)
                    .call(done);
            });
        });
    },

    logoutBO : function(){
        describe('Log out from the Back Office', function (done) {
            it('should log out successfully in BO', function (done) {
                global.fctname = this.test.title;
                this.client
                    .signoutBO()
                    .call(done);
            });
        });
    },

    loginFO : function() {
        describe('Go to the front office', function () {
            it('should go to the FO', function (done) {
                global.fctname = this.test.title;
                this.client
                    .signinFO()
                    .call(done);
            });
        });
    },

    openShop : function(){
        describe('Go to the front office', function () {
            it('should go to the FO', function (done) {
                global.fctname = this.test.title;
                this.client
                    .url('http://' + URL)
                    .waitForExist(this.selector.FO.HomePage.logo_home_page)
                    .call(done);
            });
        });
    }

};
