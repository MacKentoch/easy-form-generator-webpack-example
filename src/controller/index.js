export const DEMO_CONTROLLER_NAME 		= 'demoController';
export const DEMO_CONTROLLERAS_NAME 	= 'demoCtrl';

class DemoController {
  static $inject = ['easyFormSteWayConfig'];

  constructor(easyFormSteWayConfig) {
    this.easyFormSteWayConfig = easyFormSteWayConfig;
    this.init();
  }
  
  init() {
    console.info(`DemoController loaded`);
    this.easyFormGeneratorModel = {};
    this.currentLangue = this.refreshCurrentLanguage();
  }

  switchLanguage(toLanguage = 'en') {
    if (angular.isString) {
      this.easyFormSteWayConfig.setLanguage(toLanguage);
      this.currentLangue = this.refreshCurrentLanguage();
      console.info('language changed to ' + this.currentLangue);
    }
  }

  refreshCurrentLanguage(){
    return this.easyFormSteWayConfig.getCurrentLanguage();
  }

  saveForm(easyFormGeneratorModel) {
    console.info('-> from here : you can save models to database (your controller)');
    console.dir({
      'What is it?': 'this log shows you easy form returned model on save event',
      'easyFormGeneratorModel': easyFormGeneratorModel
    });
    /**
     *
     * MORE DETAILS ON 'easyFormGeneratorModel'
     * ----------------------------------------
     *
     * easy form generator model properties:
     *
     * - formName:                   {string} (at save step you name your form)
     * - btnSubmitText:              {string} (if 'Submit' does not suits to you change submit button name)
     * - btnCancelText:              {string} (if 'Cancel' does not suits to you change cancel button name)
     * - edaFieldsMode:              {array} - easy form generator model that describe form
     * - edaFieldsModelStringified:  {string} - exactly same as edaFieldsModel it is just stringified
     * - formlyFieldsModel:          {object} - easy form generator model translate by itself 'edaFieldsModel' to 'angular formly fields model' -> usefull is you just need a formly directive
     * - dataModel:                  {object} - this object is filled when filling form.
     */
  }
}

export default angular
                .module('demoController.module', [])
                .controller(DEMO_CONTROLLER_NAME, DemoController);
