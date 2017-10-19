module.exports = {
    addRule : function (x) {
        it('should click on "add new rule" button', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(3000)
                .waitForVisible(this.selector.BO.ModuleConfiguration.add_new_rule_button, 90000)
                .click(this.selector.BO.ModuleConfiguration.add_new_rule_button)
                .call(done);
        });

        it('should set the rule name', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.rule_name_input, 60000)
                .setValue(this.selector.BO.ModuleConfiguration.rule_name_input, x)
                .call(done);
        });
    },

    allCategory : function(){
        it('should select "all category"', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(2000)
                .waitForExist(this.selector.BO.ModuleConfiguration.all_category_radio_button, 90000)
                .click(this.selector.BO.ModuleConfiguration.all_category_radio_button)
                .call(done)
        });
    },

    clickNextButton : function(){
        it('should click on "next" button', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.next_step_rule_button, 90000)
                .click(this.selector.BO.ModuleConfiguration.next_step_rule_button)
                .call(done)
        });
    },

    selectEveningDressesCategory : function(){
        it('should select "Evening dresses" category', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(2000)
                .waitForExist(this.selector.BO.ModuleConfiguration.expan_all_button, 90000)
                .click(this.selector.BO.ModuleConfiguration.expan_all_button)
                .waitForExist(this.selector.BO.ModuleConfiguration.evening_dresses_checkbox, 90000)
                .click(this.selector.BO.ModuleConfiguration.evening_dresses_checkbox)
                .call(done)
        });
    },

    ruleCondition : function(x , ruleCondition){
        it('should set the rule condition to' + ruleCondition, function(done){
            global.fctname= this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.legend_input, 90000)
                .pause(5000)
                .setValue(this.selector.BO.ModuleConfiguration.legend_input, x)
                .call(done);
        });
    },

    saveForm : function(){
        it('should save the form', function(done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.ModuleConfiguration.save_rule_button, 90000)
                .click(this.selector.BO.ModuleConfiguration.save_rule_button)
                .call(done);
        });
    },

    applyRule : function(i){
        it('should click on "apply rule" button', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(6000)
                .waitForVisible(this.selector.BO.ModuleConfiguration.apply_rule_button.replace('%s', i), 90000)
                .click(this.selector.BO.ModuleConfiguration.apply_rule_button.replace('%s', i))
                .pause(5000)
                .call(done);
        });
    },

    closeGreenValidation : function(){
        it('should close the green validatlon', function(done){
            global.fctname= this.test.title;
            this.client
                .pause(2000)
                .waitForExist(this.selector.BO.ModuleConfiguration.green_validation_notice, 90000)
                .click(this.selector.BO.ModuleConfiguration.green_validation_notice)
                .call(done);
        });
    }
}