module.exports = {
    selectRuleLanguage: function (i,language) {
        it('should set the rule language to' + language, function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.ruleLanguage_dropdownlist, 90000)
                .click(this.selector.BO.ModuleConfiguration.ruleLanguage_dropdownlist)
                .waitForExist(this.selector.BO.ModuleConfiguration.ruleLanguage_select.replace('%s', i), 90000)
                .click(this.selector.BO.ModuleConfiguration.ruleLanguage_select.replace('%s', i))
                .call(done);
        });
    },

    selectLanguageFO: function (i,language) {
        it('should set the shop language to' + language, function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForVisible(this.selector.FO.Common.language_button, 90000)
                .click(this.selector.FO.Common.language_button)
                .pause(3000)
                .waitForExist(this.selector.FO.Common.chooseLanguage_button.replace('%s', i), 90000)
                .click(this.selector.FO.Common.chooseLanguage_button.replace('%s', i))
                .pause(5000)
                .call(done);
        });
    }
};
