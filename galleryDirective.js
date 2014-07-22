window.app.directive('gallery', ['galleryService', function (galleryService){


        return {
            restrict: 'A',
            controller: 'ModalCtrl',
            template:
                '<div id="photos">'+
                '<div ng-repeat="slide in slides">' +
                '<a href="#" ng-click="open(slide);select();">' +
                '<img ng-src="{{slide.image}}" alt="" class="img-responsive">'+
                '</a>' +
                '</div>'+
                '</div>'

                    ,

            link: function (scope, element, attrs){

              // defaults
              scope.src = attrs.src || "photos_public.gne?id=92505062@N04";

            var render = function (photos){
                scope.slides = photos;
            };

              function successHandler(photos){
                render(photos);
              }

              function errorHandler(){
                alert('Sorry, the gallery is not available now. Please try again soon, or try refreshing the page.');
              }




                if (galleryService.hasPhotos()){
                    // show cached photos
                    render(galleryService.photos);
                } else {
                    // download photos
                    galleryService.query(scope.src)
                    .then(successHandler, errorHandler);
                }
            }
        }
    }]);
