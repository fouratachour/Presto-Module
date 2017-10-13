module.exports = {
    searchModule: function (moduleName) {
        describe('Go to the module configuration page', function (done) {
            it('should go to the modules page', function (done) {
                global.fctname = this.test.title;
                this.client
                    .pause(5000)
                    .click(this.selector.BO.ModulePage.modules_subtub)
                    .waitForExist(this.selector.BO.ModulePage.modules_search_results, 90000)
                    .call(done);
            });

            it('should search the ' + moduleName + ' module', function (done) {
                global.fctname = this.test.title;
                this.client
                    .click(this.selector.BO.ModulePage.installed_moule_tabs)
                    .waitForExist(this.selector.BO.ModulePage.modules_search_input, 90000)
                    .setValue(this.selector.BO.ModulePage.modules_search_input, moduleName)
                    .click(this.selector.BO.ModulePage.modules_search_button)
                    .getText(this.selector.BO.ModulePage.module_number_span).then(function (text) {
                    global.nbr = parseInt(text[0]);
                    if (global.nbr == 0) {
                        done(new Error('The module you are searching for does not exist!'));
                    }
                    else
                        done();
                })
            });
        });
    },
    configureModule: function () {
        it('should go to the module configuration page', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModulePage.module_configuration_button, 90000)
                .click(this.selector.BO.ModulePage.module_configuration_button)
                .call(done);
        });

        it('should go to "Optimize Images" tab', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.optimize_images_tab, 90000)
                .click(this.selector.BO.ModuleConfiguration.optimize_images_tab)
                .call(done);
        });
    }
}
