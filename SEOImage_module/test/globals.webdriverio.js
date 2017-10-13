'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.module_tech_name = argv.MODULE;
global.browser = argv.browser;
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id=new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';

module.exports = {
    selector: {

	 BO: {
	     //Back office login page selectors
	     LoginPage: {
             login_input: '#email',
             password_input: '#passwd',
             login_button: '[name="submitLogin"]',
         },

         //Common selectors
         Common: {
             menu: '#nav-sidebar',
         },

         //Module page selectors
         ModulePage: {
             modules_subtub: '#subtab-AdminParentModulesSf',
             installed_moule_tabs: '(//div[@class="page-head-tabs"]/a)[2]',
             modules_search_results: '.module-search-result-wording',
             modules_search_input: '.pstaggerAddTagInput.module-tags-input',
             modules_search_button: '//*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[5]/div/div[1]/div/button',
             module_configuration_button: '//*[@id="modules-list-container-all"]/div[1]/div/div/div[5]/div[2]/form/button',
             module_number_span: '//*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[7]/span[1]',
         },

         //Module page configuration selectors
         ModuleConfiguration: {
             optimize_images_tab: '//*[@id="modulecontent"]/div[1]/div[1]/a[2]',
             add_new_rule_button: '.process-icon-new',
             rule_name_input: '//*[@id="rule_name"]',
             ruleLanguage_dropdownlist: '//*[@id="step-1"]/div[3]/div/div[1]/button',
             ruleLanguage_select: '//*[@id="step-1"]/div[3]/div/div[1]/div/ul/li[%s]',
             next_step_rule_button: '//*[@id="next-step"]',
             all_category_radio_button: '//*[@id="radios-0"]/label/input',
             legend_input: '//*[@id="legend"]',
             save_rule_button: '//*[@id="btn-save"]',
             green_validation_notice: '/html/body/div[6]/div/div/div[1]/div/div[2]/button',
             apply_rule_button: '//*[@id="table-metas-1"]/tbody/tr[%s]/td[7]/div/div/a',
             apply_second_rule_button: '//*[@id="table-metas-1"]/tbody/tr[2]/td[7]/div/div/a',
             apply_all_rules_button: '//*[@id="table-metas-1"]/a[1]',
             dropdown_button: '//*[@id="table-metas-1"]/tbody/tr[1]/td[7]/div/div/button',
             edit_rule_button: '//*[@id="table-metas-1"]/tbody/tr[1]/td[7]/div/div/ul/li[1]/a',
             expan_all_button: '//*[@id="expandall"]',
             evening_dresses_checkbox: '//*[@id="category_10"]/a/i[1]',
         },
     },
        FO : {
	        //Common selectors
            Common: {
                language_button: '//*[@id="_desktop_language_selector"]/div/div/button',
                chooseLanguage_button: '//*[@id="_desktop_language_selector"]/div/div/ul/li[%s]/a',
            },

            //Home page selectors
            HomePage: {
                access_login_button: 'div.user-info > a',
                login_input: '//*[@id="login-form"]/section/div[1]/div[1]/input',
                password_input: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
                login_button: '//*[@id="login-form"]/footer/button',
                logout_button: '.logout',
                logo_home_page: '//*[@id="_desktop_logo"]/a/img',
                sleeves_tshirt_image: '//*[@id="content"]/section/div/article[1]/div/a/img',
                printed_dress_casual_dresses_category_image: '//*[@id="content"]/section/div/article[3]/div/a/img',
                printed_dress_evening_dresses_category_image: '//*[@id="content"]/section/div/article[4]/div/a/img',
            },

            //Product page selectors
            ProductPage: {
                product_name: '//*[@id="main"]/div[1]/div[2]/h1',
                product_price: '//*[@id="main"]/div[1]/div[2]/div[1]/div[1]/div/span',
                product_image: '//*[@id="product-modal"]/div/div/div/figure/img',
                thumbnail_image: '//*[@id="content"]/div[1]/div[2]/ul/li[1]/img',
                category_name: '//*[@id="wrapper"]/div/nav/ol/li[4]/a/span',
                women_category_select: '//*[@id="wrapper"]/div/nav/ol/li[2]/a',
            },
        }

    },
    shouldExist: function(err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};