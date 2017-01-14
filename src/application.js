import Config from './config';
import DemoController from './controller';

const APP_MODULE_NAME   = 'demo.app';
const APP_MODULE_INJECT = [
  'textAngular',
  'textAngularSetup',
  'ngAnimate',
  'toaster',
  'formly',
  'formlyBootstrap',
  'ui.bootstrap',
  'nya.bootstrap.select',
  'pascalprecht.translate',
	'eda.easyformGen.stepway',
  DemoController.name
];

export default angular
                .module(APP_MODULE_NAME, APP_MODULE_INJECT)
                .config(Config);
