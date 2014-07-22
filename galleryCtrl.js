window.app.controller('ModalCtrl', function ($scope, $modal){
    $scope.open = function (_slide) {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        slide: function () {
          return _slide;
        }
      }
    });
  };
});

window.app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, slide) {
  $scope.selected = slide;
  $scope.id = $scope.selected.$$hashKey;
  $scope.commview = false;
  $scope.album = 'Test Album';
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  $scope.click = function (){
     console.log('hello');
  };
});
