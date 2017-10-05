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
global.my_src_image1 = "";
global.my_src_image2 = "";
global.indexofterms = 0;
module.exports = {
    selector: {


        BO: {
            //Back office login page selector
            AccessPage: {
                login_input: '#email',
                password_input: '#passwd',
                login_button: '[name="submitLogin"]'
            },

            //Advenced Parameter page
            AdvancedParametersPage:{
                menu:'//*[@id="subtab-AdminAdvancedParameters"]/a',
                Webservice:'//*[@id="subtab-AdminWebservice"]/a',
                WebserviceOption:{
                    search_input:'//*[@id="form-webservice_account"]/div/div[2]/table/thead/tr[2]/th[3]/input',
                    search_button:'//*[@id="submitFilterButtonwebservice_account"]',
                    Upela_webservice:'//*[@id="form-webservice_account"]/div/div[2]/table/tbody/tr/td[2]'
                }
            },

            //Common selectors
            Common: {
                menu: '#nav-sidebar',
                close_validation_button: '.growl-close',
                red_validation_notice: '[class="growl growl-error growl-medium"]',
                green_validation_notice: '[class="growl growl-notice growl-medium"]'
            },

            //Modules page selectors
            ModulesPage: {
                modules_subtab: '#subtab-AdminParentModulesSf',
                search_input: 'div.pstaggerAddTagWrapper > input',
                search_button: '.btn.btn-primary.pull-right.search-button',
                page_loaded: '.module-search-result-wording',
                installed_modules_tabs: '(//div[@class="page-head-tabs"]/a)[2]',
                module_number_span: '[class="module-sorting-search-wording"]',
                number_of_module_found:'//*[@id="main-div"]/div[3]/div/div/div[2]/div/div[7]/span[1]',
                configuration_button:'//*[@id="modules-list-container-all"]/div[1]/div/div/div[5]/div[2]/form/button',
                module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',
                install_module_button: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@data-confirm_modal="module-modal-confirm-' + module_tech_name + '-install"]',
                uninstall_module_list: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="btn btn-primary-outline  dropdown-toggle"]',
                uninstall_module_button: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="dropdown-item module_action_menu_uninstall"]',
                modal_confirm_uninstall: '//*[@id="module-modal-confirm-' + module_tech_name + '-uninstall" and @class="modal modal-vcenter fade in"]//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
                module_menu_button: '[class="btn btn-primary-outline  dropdown-toggle"]',
                enable_module_button: '[class="dropdown-item module_action_menu_enable"]'
            }
        },
        ModuleInvoiceterms:'//*[@id="modules-list-container-all"]/div/div/div/div[5]/div[2]/form/button',
	//Installation
	    language:'//*[@id="langList"]',
	    next_step:'//*[@id="btNext"]',
	    agree_checkbox:'//*[@id="set_license"]',
	    test_result_compatibility:'//*[@id="sheet_"]/h3',
        shop_name:'//*[@id="infosShop"]',
        country_fo:'//*[@id="infosCountry_chosen"]',
        country_france:'//*[@id="infosCountry_chosen"]/div/ul/li[2]',
        first_name:'//*[@id="infosFirstname"]',
        last_name:'//*[@id="infosName"]',
        email_address:'//*[@id="infosEmail"]',
        shop_password:'//*[@id="infosPassword"]',
        retype_password:'//*[@id="infosPasswordRepeat"]',
        database_address:'//*[@id="dbServer"]',
        database_name:'//*[@id="dbName"]',
        database_login:'//*[@id="dbLogin"]',
        database_password:'//*[@id="dbPassword"]',
        database_server_address:'//*[@id="dbServer"]',
        test_conection:'#btTestDB',
        dbResultCheck:'//*[@id="dbResultCheck"]',
        step_success:'[class:"class="process_step success"]',
        create_file_parameter_step:'//li[@id="process_step_generateSettingsFile" and @class="process_step success"]',
        create_database_step:'//li[@id="process_step_installDatabase" and @class="process_step success"]',
        create_default_shop_step:'//li[@id="process_step_installDefaultData" and @class="process_step success"]',
        create_database_table_step:'//li[@id="process_step_populateDatabase" and @class="process_step success"]',
        create_shop_informations_step:'//li[@id="process_step_configureShop" and @class="process_step success"]',
        create_demonstration_data_step:'//li[@id="process_step_installFixtures" and @class="process_step success"]',
        install_module_step:'//li[@id="process_step_installModules" and @class="process_step success"]',
        install_addons_modules_step:'//li[@id="process_step_installModulesAddons" and @class="process_step success"]',
        install_theme_step:'//li[@id="process_step_installTheme" and @class="process_step success"]',
        finish_step:'//*[@id="install_process_success"]/div[1]/h2',



	 //BO
		login: '#email',
		password: '#passwd',
		login_btn: '[name="submitLogin"]',
		exit_welcome:'[class="btn btn-tertiary-outline btn-lg onboarding-button-shut-down"]',
		click_outside:'//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]',
		profil: '#employee_infos',
		new_profil: '.employee-dropdown.dropdown > div',
		logout: '#header_logout',
		products: '#subtab-AdminCatalog',
		go_to_catalog: '//*[@id="form"]/div[4]/div[2]/div/div[2]/a[2]',
		more_option:'[class="btn btn-primary dropdown-toggle"]',
		new_product: '#page-header-desc-configuration-add',
		menu: '#nav-sidebar',
		product_name: '#form_step1_name_1',
		save_product: '//*[@id="form"]/div[4]/div[2]/div/button[1]',
		catalog_list: '#product_catalog_list',
		//green_validation: '#main-div > div.content-div > div.row > div > div.flash-message-list.alert.alert-success > ul > li',
		//for 1.7.1.0
		green_validation: '#growls > div > div.growl-message',
		close_green_validation: '.growl-close',
		red_validation:'#main-div > div.content-div > div > div > div.flash-message-list.alert.alert-danger > ul > li',
		summary_button: '[href="#description_short"]',
		summary: 'form_step1_description_short_1_ifr', //not declare than an id because using into function "frame" that not need this information;
		description_button: '[href="#description"]',
		description: 'form_step1_description_1_ifr',//not declare than an id because using into function "frame" that not need this information;
		priceTE_shortcut: '#form_step1_price_shortcut',
		quantity_shortcut: '#form_step1_qty_0_shortcut',
		picture: '[class="dz-hidden-input"]',
		picture_cover: '.iscover',
		product_online: '.switch-input ',
		catalogue_filter_by_name: '//input[@name="filter_column_name"]',
		catalogue_submit_filter: '//button[@name="products_filter_submit"]',
		catalogue_filter_reset: '//button[@type="reset" and @style="display: inline-block;"]',
		orders: '#subtab-AdminParentOrders',
		orders_form: '#form-order',
		order_product_name: '.productName',
		order_quantity: '.product_quantity_show',
		order_total: '#total_order > td.amount.text-right.nowrap',
		//order_reference: '#content > div.row > div > div:nth-child(5) > div.col-lg-7 > div:nth-child(1) > div.panel-heading > span:nth-child(2)',
		order_reference: '((//div[@class="panel-heading"])[1]/span)[1]',
		modules_menu: '#subtab-AdminParentModulesSf',
        modules_search: 'div.pstaggerAddTagWrapper > input',
        modules_search_button: '.btn.btn-primary.pull-right.search-button',

		modules_page_loaded: '.module-search-result-wording',
		modules_installed: '(//div[@class="page-head-tabs"]/a)[2]',
		modules_validate_uninstall: '//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
		close_sf_toolbar:'//a[@class="hide-button"]',
		//module invocie terms
		apparence_btn:'//*[@id="subtab-AdminParentThemes"]/a',
		pages_btn:'//*[@id="subtab-AdminCmsContent"]/a',
		search_zone_pages:'//*[@id="table-cms"]/thead/tr[2]/th[3]/input',
		serach_btn_pages:'//*[@id="submitFilterButtoncms"]',
        edit_btn_pages:'//*[@id="tr_1_3_2"]/td[7]/div/div/a',
        btn_save_page:'//*[@id="cms_form_submit_btn"]',
        First_order:'//*[@id="form-order"]/div/div[2]/table/tbody/tr[1]/td[12]/div/a',
        panel_document:'//*[@id="tabOrder"]/li[2]/a',
        btn_download:'//*[@id="documents_table"]/tbody/tr[1]/td[3]/a',
        document_name:'//*[@id="documents_table"]/tbody/tr[1]/td[3]/a',
        order_state:'//*[@id="id_order_state_chosen"]/a',
        payment_accepted:'//*[@id="id_order_state_chosen"]/div/ul/li[12]',
        valid_payment:'//*[@id="status"]/form/div/div[2]/button',
        btn_edit_page_terms:'//*[@id="content_1_ifr"]',
	//FO
		access_loginFO:'div.user-info > a',
		loginFO: '//*[@id="login-form"]/section/div[1]/div[1]/input',
		passwordFO: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
		login_btnFO: '//*[@id="login-form"]/footer/button',
		logoutFO: '.logout',
		//create_account: '#email_create',
		home_logo_url:'//*[@id="_desktop_logo"]/a',
		First_product:'//*[@id="content"]/section/div/article/div/a',
		add_to_cart_lifestyle:'//*[@id="add-to-cart-or-refresh"]/div[2]/div[1]/div[2]/button',
        valid_cart_lifestyle:'//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
		create_account_button: '[data-link-action="display-register-form"]',
		create_account_firstname: '[name="firstname"]',
		create_account_lastname: '[name="lastname"]',
		create_account_email: '[name="email"]',
		create_account_password: '[name="password"]',
		create_account_info_validate: '[data-link-action="save-customer"]',
		logo_home_pageFO: '.logo.img-responsive',
		first_product_home_page: '.thumbnail.product-thumbnail',
		add_to_cart: '.btn.btn-primary.add-to-cart',
		first_product_home_page_name: '[itemprop="name"]',
		product_image: '#content',
		product_name_details: '//*[@id="main"]/div[1]/div[2]/h1',
		product_price_details: '[itemprop="price"]',
		product_quantity_details: '#quantity_wanted',
		layer_cart: '//div[@id="blockcart-modal" and @style="display: block;"]',
		layer_cart_name_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/h6',
		layer_cart_price_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[1]',
		layer_cart_quantity_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[2]',
		layer_cart_command_button: '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
		//for 1.7.1.0
		//layer_cart_command_button: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
		//command_product_quantity: '//div[@class="product-line-grid-body col-md-5 col-xs-5"]/div[5]',
		command_product_name: '(//div[@class="product-line-info"])[1]/a',
		command_product_price: '(//div[@class="product-line-info"])[2]/span',
		command_button_checkout: '//*[@id="main"]/div/div[2]/div[1]/div[3]/div/a',
		check_out_step1: '#checkout-personal-information-step',
		check_out_step2: '#checkout-addresses-step',
        checkout_step2_continue_button:'//*[@id="checkout-addresses-step"]/div/div/form/div[2]/button',
		check_out_step3: '#checkout-delivery-step',
		checkout_step3_continue_button: '//*[@id="js-delivery"]/button',
		check_out_step4: '#checkout-payment-step',
		checkout_step4_payment: '//*[@id="payment-option-2"]',
		checkout_step4_cgv: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
		checkout_step4_order: '//*[@id="payment-confirmation"]/div[1]/button',
		checkout_total: '//div[@class="cart-summary-line cart-total"]/span[2]',
		order_confirmation_name: '#order-items > div > div > div.col-sm-4.col-xs-9.details > span',
		order_confirmation_price1: '#order-items > div > table > tbody > tr:nth-child(1) > td:nth-child(2)',
		order_confirmation_price2: '#content-hook_payment_return > div > div > div > dl > dd:nth-child(2)',
		order_confirmation_ref: '(//div[@id="order-details"]/ul/li)[1]',
		search_product: '.ui-autocomplete-input',
		search_product_button: '.material-icons.search',
		search_product_result_image: '.thumbnail.product-thumbnail',
		search_product_result_name: '//*[@id="js-product-list"]/div[1]/article[1]/div/div[1]/h1/a',
		search_product_result_price: '[itemprop="price"]',
		close_error:'//*[@id="error-modal"]/div/div/button'
	},
    shouldExist: function(err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};