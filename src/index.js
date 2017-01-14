import './vendors';
import appModule from './application';

angular.element(document).ready(
  () => angular.bootstrap(document, [appModule.name], { strictDi: false })
);