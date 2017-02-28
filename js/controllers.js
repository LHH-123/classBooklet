var classAppCtrls = angular.module('classAppCtrls',['classAppServices']);

classAppCtrls.controller('photoList',['$scope', 'imageService',function($scope, imageService) {
	
	$scope.setImges = function(){
		imageService.getImages().success(function(result){
		    $scope.images = result;
		    return images;
	    });
	    imageService.getImages().error(function(){
		   alert("获取图片失败...");
	    });
	}

	$scope.setImges();

}]);

classAppCtrls.controller('login',['$scope',function($scope) {
	
	$scope.isShow = false;
	$scope.isHide = true;
    $scope.showorhide = function () {
		$scope.isShow = !$scope.isShow;
	}
	$scope.hideorshow = function(){
        $scope.isHide = !$scope.isHide;
	}

}]);