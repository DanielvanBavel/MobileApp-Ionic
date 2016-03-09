angular.module('music.controllers', ['youtube-embed'])

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://i.ytimg.com/**'
  ])
})


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	$scope.loginData = {};
	$scope.registerData = {}

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// $ionicModal.fromTemplateUrl('templates/register.html', {
	// 	scope: $scope
	// }).then(function(modal) {
	// 	$scope.modal = registerModal;
	// });

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
	  		$scope.closeLogin();
		}, 1000);
	};

	$scope.register = function() {
		$scope.registerModal.show();
	};

	// $scope.closeRegister = function() {
	// 	$scope.modal.hide();
	// };

	// $scope.doRegister = function() {
	// 	$scope.login.hide();
	// 	$scope.register.show();
	// 	console.log('register', $scope.registerData);

	// 	$timeout(function() {
	//   		$scope.closeRegister();
	// 	}, 1000);
	// };
})

.controller('PlaylistsCtrl', function($scope, $http) {
	$http({
		method: 'GET',
		url: 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCnXN1WZ57YHaSgIKbDHEnDw&fields=items%2CpageInfo&key=AIzaSyAnoF9yGSWHOEttc0dc_pLoEbZqgMafuLI'
		}).then(function successCallback(response) {
			$scope.playlists = response.data.items;
			console.log(response.data);
		// this callback will be called asynchronously
		// when the response is available
		}, function errorCallback(response) {
			console.log('het is kapot:(((((((((');
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
})

.controller('HomeCtrl', function($scope, $http){
	// Simple GET request example:
	$http({
		method: 'GET',
		url: 'https://api.soundcloud.com/users/28914014/favorites?client_id=e72abce51a00fd0b1b9e8f30410cbab8'
	}).then(function successCallback(response) {
			$scope.favorites = response.data;
		}, function errorCallback(response) {
			console.log('het is kapot:(((((((((');
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
})
.controller('PlaylistCtrl', function($scope, $http, $location) {
		var url = $location.path();
		url = url.split('/');
		$http({
		method: 'GET',
		url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=5&playlistId=' + url[3] + '&fields=items%2CpageInfo&key=AIzaSyAnoF9yGSWHOEttc0dc_pLoEbZqgMafuLI'
		}).then(function successCallback(response) {
			$scope.playlists = response.data.items;
			console.log(response.data.items);
		// this callback will be called asynchronously
		// when the response is available
		}, function errorCallback(response) {
			console.log('het is kapot:(((((((((');
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
})











