angular
.module('demo', ['thatisuday.ng-image-gallery'])
.config(function(ngImageGalleryOptsProvider){
	ngImageGalleryOptsProvider.setOpts({
		thumbnails  :   false,   
		inline      :   false,
		bubbles     :   true,
		imgBubbles  :   false,   
		bgClose     :   true
	});
})
.controller('main', function($scope, $timeout, $interval){
	// Local images
	$scope.images = [
		{
			url : './images/pj1/first.jpg',
		},
		{
			url : './images/pj1/second.jpg',
		},
		{
			url : './images/pj1/third.jpg',
		},
		{
			url : './images/pj1/fourth.jpg',
		},
		{
			url : './images/pj2/first.jpg',
		},
		{
			url : './images/pj2/second.jpg',
		},
		{
			url : './images/pj2/third.jpg',
		},
		{
			url : './images/pj2/fourth.jpg',
		},
		{
			url : './images/pj3/before.jpg',
		},
		{
			url : './images/pj3/after.jpg',
		},
		{
			url : './images/pj4/first.jpg',
		},
		{
			url : './images/pj4/second.jpg',
		},
		{
			url : './images/pj4/third.jpg',
		},
		{
			url : './images/pj4/fourth.jpg',
		},
		{
			url : './images/pj5/first.jpg',
		},
		{
			url : './images/pj5/second.jpg',
		},
		{
			url : './images/pj5/third.jpg',
		},
		{
			url : './images/pj6/first.jpg',
		},
		{
			url : './images/pj6/second.jpg',
		},
		{
			url : './images/pj6/third.jpg',
		},
		{
			url : './images/pj6/fourth.jpg',
		}
	];

	/*****************************************************/

	// Gallery methods gateway
	$scope.methods = {};
	$scope.openGallery = function(index){
		$scope.methods.open(index);
	};
	
	// $scope.addPhoto = function(){
	// 	var n = Math.floor(Math.random() * 13) + 1;
	// 	window.alert("hello");
	// 	$scope.images.push(
	// 		{
	// 			url : '../demo/demo-images/' + n + '.jpg',
	// 			thumbUrl : '../demo/demo-images/thumbs/' + n + '.jpg',
	// 		}
	// 	);
	// }
	
	// $scope.removePhoto = function(){
	// 	if($scope.images.length > 1) $scope.images.pop();
	// }
})

.controller('name', ['', function(){
	
}])