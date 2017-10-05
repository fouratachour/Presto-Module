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
             login: '#email',
             password: '#passwd',
             login_btn: '[name="submitLogin"]',
         },

         //Common selectors
         Common: {
             menu: '#nav-sidebar',
         },

         //Module page selectors
         ModulePage: {
             modules_menu: '#subtab-AdminParentModulesSf',
             installed_moule_page: '//*[@id="main-div"]/div[1]/div[2]/a[2]',
             modules_page_loaded: '.module-search-result-wording',
             modules_search: '.pstaggerAddTagInput.module-tags-input',
             modules_search_button: '//*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[5]/div/div[1]/div/button',
             module_configuration_btn: '//*[@id="modules-list-container-all"]/div[1]/div/div/div[5]/div[2]/form/button',
             nbr_module: '//*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[7]/span[1]',
         },

         //Module page configuration selectors
         ModuleConfiguration: {
             seo_config_panel: '//*[@id="modulecontent"]/div[1]/div[1]/a[2]',
             add_rules_btn: '.process-icon-new',
             rule_name: '//*[@id="rule_name"]',
             rule_lang_btn: '//*[@id="step-1"]/div[3]/div/div[1]/button',
             rule_english_lang: '//*[@id="step-1"]/div[3]/div/div[1]/div/ul/li[1]',
             rule_french_lang: '//*[@id="step-1"]/div[3]/div/div[1]/div/ul/li[2]',
             next_step_rules: '//*[@id="next-step"]',
             all_catalog_btn_rules: '//*[@id="radios-0"]/label/input',
             rules_condition: '//*[@id="legend"]',
             save_rules: '//*[@id="btn-save"]',
             close_green_validation: '/html/body/div[6]/div/div/div[1]/div/div[2]/button',
             apply_rule1_btn: '//*[@id="table-metas-1"]/tbody/tr/td[7]/div/div/a',
             apply_rule2_btn: '//*[@id="table-metas-1"]/tbody/tr[2]/td[7]/div/div/a',
             apply_rule3_btn: '//*[@id="table-metas-1"]/tbody/tr[3]/td[7]/div/div/a',
             apply_rule4_btn: '//*[@id="table-metas-1"]/tbody/tr[4]/td[7]/div/div/a',
             apply_all_rules: '//*[@id="table-metas-1"]/a[1]',
             dropdownlist_btn: '//*[@id="table-metas-1"]/tbody/tr[1]/td[7]/div/div/button',
             edit_rule_btn: '//*[@id="table-metas-1"]/tbody/tr[1]/td[7]/div/div/ul/li[1]/a',
             expan_all_btn: '//*[@id="expandall"]',
             evening_dress_checkbox: '//*[@id="category_10"]/a/i[1]',
         },
     },
        FO : {
	        //Common selectors
            Common: {
                lang_btn: '//*[@id="_desktop_language_selector"]/div/div/button',
                english_btn: '//*[@id="_desktop_language_selector"]/div/div/ul/li[1]/a',
                french_btn: '//*[@id="_desktop_language_selector"]/div/div/ul/li[2]/a',
            },

            //Home page selectors
            HomePage: {
                access_loginFO: 'div.user-info > a',
                loginFO: '//*[@id="login-form"]/section/div[1]/div[1]/input',
                passwordFO: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
                login_btnFO: '//*[@id="login-form"]/footer/button',
                logoutFO: '.logout',
                logo_home_pageFO: '.logo.img-responsive',
                all_product: '//*[@id="content"]/section/a',
            },

            //Category page selectors
            CategoryPage: {
                first_product: '//*[@id="js-product-list"]/div[1]/article[1]/div/a/img',
                category_list: '//*[@id="left-column"]/div[1]/ul/li[2]/ul/li/div[1]',
                category_women_list: '//*[@id="left-column"]/div[1]/ul/li[2]/ul/li/div[1]/i[1]',
                tops_category: '//*[@id="left-column"]/div[1]/ul/li[2]/ul/li[1]/a',
                dresses_category: '//*[@id="left-column"]/div[1]/ul/li[2]/ul/li[2]/a',
                dresses_category_list: '//*[@id="exCollapsingNavbar3"]/ul/li[2]/span/i[1]',
                evening_dresses_category: '//*[@id="exCollapsingNavbar8"]/ul/li[2]/a',
                casual_dresses_category: '//*[@id="exCollapsingNavbar8"]/ul/li[1]/a',
                dresses_list: '//*[@id="left-column"]/div[1]/ul/li[2]/ul/li[2]/div[1]/i[1]',
            },

            //Product page selectors
            ProductPage: {
                product_name: '//*[@id="main"]/div[1]/div[2]/h1',
                product_price: '//*[@id="main"]/div[1]/div[2]/div[1]/div[1]/div/span',
                product_image: '//*[@id="product-modal"]/div/div/div/figure/img',
                thumbnail_image: '//*[@id="content"]/div[1]/div[2]/ul/li[1]/img',
                category_name: '//*[@id="wrapper"]/div/nav/ol/li[4]/a/span',
                women_category: '//*[@id="wrapper"]/div/nav/ol/li[2]/a',
            },
        }

    },
    shouldExist: function(err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};