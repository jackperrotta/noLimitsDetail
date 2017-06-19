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
			title: 'Asphalt Roof',
			url  : './images/gallery/Asphalt_Roof.jpg',
		},
		{
			title: 'Asphalt Roofing, Vinyl Siding, Window Replacement',
			url  : './images/gallery/Asphalt_Roofing,Vinyl_Siding,Window_Replacement.JPG',
		},
		{
			title: 'Asphalt Roof, Vinyl Siding',
			url  : './images/gallery/Asphalt_Roof,Vinyl_Siding.jpg',
		},
		{
			title: 'Asphalt Roof, Vinyl Siding',
			url  : './images/gallery/Asphalt_Roof,Vinyl_Siding_1.jpg',
		},
		{
			title: 'Asphalt Roof, Vinyl Siding',
			url  : './images/gallery/Asphalt_Roof,Vinyl_Siding_2.jpg',
		},
		{
			title: 'Asphalt Roof, Vinyl Siding',
			url  : './images/gallery/Asphalt_Roof,Vinyl_Siding_3.jpg',
		},
		{
			title: 'Asphalt Roof, Vinyl Siding',
			url  : './images/gallery/Asphalt_Roof,Vinyl_Siding_4.jpg',
		},
		{
			title: 'Asphalt Roof, Vinyl Siding',
			url  : './images/gallery/Asphalt_Roof,Vinyl_Siding_5.jpg',
		},
		{ //8
			title: 'Asphalt Roof, Vinyl Siding, Metal Capping',
			url  : './images/gallery/Asphalt_Roof,Vinyl_Siding,Metal_Capping.jpg',
		},
		{
			title: 'Asphalt Roof, Vinyl Siding, Metal Capping',
			url  : './images/gallery/Asphalt_Roof,Vinyl_Siding,Metal_Capping_1.jpg',
		},
		{
			title: 'Metal Roof',
			url  : './images/gallery/Metal_Roof.jpg',
		},
		{
			title: 'Metal Slate Roof, Snow Guards',
			url  : './images/gallery/Metal_Slate_Roof,Snow_Guards.JPG',
		},		
		{
			title: 'Metal Slate Roof, Standing Seam Metal Roof, Vinyl Shutters',
			url  : './images/gallery/Metal_Slate_Roof,Standing_Seam_Metal_Roof,Vinyl_Shutters.jpg',
		},
		{ // 13
			title: 'Standing Seam Metal Roof',
			url  : './images/gallery/Standing_Seam_Metal_Roof.JPG',
		},

		{
			title: 'Standing Seam Metal Roof',
			url  : './images/gallery/Standing_Seam_Metal_Roof_1.jpg',
		},
		{
			title: 'Standing Seam Metal Roof',
			url  : './images/gallery/Standing_Seam_Metal_Roof_2.jpg',
		},
		{
			title: 'Standing Seam Metal Roof',
			url  : './images/gallery/Standing_Seam_Metal_Roof_3.jpg',
		},
		{
			title: 'Standing Seam Metal Roof',
			url  : './images/gallery/Standing_Seam_Metal_Roof_4.jpg',
		},
		{
			title: 'Standing Seam Metal Roof',
			url  : './images/gallery/Standing_Seam_Metal_Roof_5.jpg',
		},
		{ //19
			title: 'Stone Veneer Siding, Metal Slate Roof, Metal Siding',
			url  : './images/gallery/Stone_Veneer_Siding,Metal_Slate_Roof,Metal_Siding.JPG',
		},		
		{
			title: 'Stone Veneer Siding, Metal Slate Roof, Snow Guards',
			url  : './images/gallery/Stone_Veneer_Siding,Metal_Slate_Roof,Snow_Guards.JPG',
		},		
		{
			title: 'Stone Veneer Siding, Metal Slate Roof, Snow Guards',
			url  : './images/gallery/Stone_Veneer_Siding,Metal_Slate_Roof,Snow_Guards_1.JPG',
		},		
		{
			title: 'Stone Veneer Siding, Metal Slate Roof, Snow Guards',
			url  : './images/gallery/Stone_Veneer_Siding,Metal_Slate_Roof,Snow_Guards_2.JPG',
		},		
		{
			title: 'Stone Veneer Siding, Metal Slate Roof, Snow Guards',
			url  : './images/gallery/Stone_Veneer_Siding,Metal_Slate_Roof,Snow_Guards_3.JPG',
		},
		{ //24
			title: 'Stone Veneer Siding, Vinyl Siding',
			url  : './images/gallery/Stone_Veneer_Siding,Vinyl_Siding.jpg',
		},
		{
			title: 'Stone Veneer Siding, Vinyl Siding',
			url  : './images/gallery/Stone_Veneer_Siding,Vinyl_Siding_1.jpg',
		},
		{
			title: 'Stone Veneer Siding, Vinyl Siding',
			url  : './images/gallery/Stone_Veneer_Siding,Vinyl_Siding_2.jpg',
		},
		{
			title: 'Vinyl Siding',
			url  : './images/gallery/Vinyl_Siding.JPG',
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