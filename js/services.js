var classAppServices = angular.module('classAppServices',[]);

classAppServices.service('imageService',['$http',function($http){
	return {
		getImages: function(){
			return $http.get("framework/photos.json", {responseType: "json"});
		}
	}
}])