var classAppDirectives = angular.module('classAppDirectives',[]);

classAppDirectives.directive('repeatDone', function() {

    function link(scope, element, attrs){
    	/*scope.$eval(attrs.repeatDone);*/
	    element.on("load",function(){
            var parentW = angular.element('.photographs-photo').css('width');
	        var parentH= angular.element('.photographs-photo').css('height');
            var childW = angular.element('.photo-img').css('width');
	        var childH = angular.element('.photo-img').css('height');
	        var oWidth = parseInt(parentW.slice(0,parentW.indexOf("p")))-parseInt(childW.slice(0,childW.indexOf("p")));
	        var oHeight = parseInt(parentH.slice(0,parentH.indexOf("p")))-parseInt(childH.slice(0,childH.indexOf("p")));
            var oLeft = Math.floor(Math.random()*oWidth + 1);
	        var oTop = Math.floor(Math.random()*oHeight + 1);
	        var zIndex=scope.$index;
	        var oOpacity=zIndex/20;


	        element.css({
	        	top : oTop + "px" ,
	        	left: oLeft + "px", 
	        	'z-index': zIndex ,
                opacity: oOpacity
	        });

	        element.on('mouseenter',function(){
	    	    element.css({  
	                'z-index': 100,
                    opacity: 1
	            });
	        });
	        element.on('mouseleave',function(){
	    	    element.css({  
	                'z-index': zIndex,
                    opacity: oOpacity
	        });
	    });

	});            
}

	return {
		restrict: "AE",
		link: link
	}
})


classAppDirectives.directive('', function() {})