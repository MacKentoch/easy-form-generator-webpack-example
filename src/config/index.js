function configFct(easyFormSteWayConfigProvider) {
  //enable/disable modal animation
  easyFormSteWayConfigProvider.setModalAnimation(false);
  //show/hide preview panel => default is true
  easyFormSteWayConfigProvider.showPreviewPanel(true);
  //show/hide models in preview panel => default is true
  easyFormSteWayConfigProvider.showPreviewModels(true);
};

configFct.$inject = ['easyFormSteWayConfigProvider'];

export default configFct;
