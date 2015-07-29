### To display the inheritance of scopes in angularjs applications do the following:
1. with ng-init create a shared value in root scope
2. create parentCtrl1 and parentCtrl2 on the same level under root scope
3. in the scope level of parentCtrl1 and parentCtrl2 place inputs with ng-model bound to shared value
4. near each input place output of shared value with {{}} expression
5. create ChildCtrl1 and ChildCtrl2 under parentCtrl1 scope
6. in the scope level of ChildCtrl1 and ChildCtrl2 place inputs with ng-model bound to shared value
7. near each inputs place outputs of shared value with {{}} expression
8. improve the application so that all the {{}} show the same values after different scenarios of typing in valuse into different inputs.