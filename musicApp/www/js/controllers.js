var app = angular.module('music.controllers', ['youtube-embed']);

app.config(function($sceDelegateProvider) {
 	$sceDelegateProvider.resourceUrlWhitelist([
	    // Allow same origin resource loads.
	    'self',
	    // Allow loading from our assets domain.  Notice the difference between * and **.
	    'https://i.ytimg.com/**',
	    'https://api.soundcloud.com/**',
	    'https://i.scdn.co/**']);
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	$scope.registerData = {}


	// $ionicModal.fromTemplateUrl('templates/register.html', {
	// 	scope: $scope
	// }).then(function(modal) {
	// 	$scope.modal = registerModal;
	// });

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
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

.controller('LoginCtrl', function($scope) {
	/*facebook login*/
	$scope.FBLogin = function() {
		FB.login(function(response) {
		    if (response.authResponse) {
		     	FB.api('/me', function(response) {
		    		var accessToken = FB.getAuthResponse().accessToken;

		    		FB.getLoginStatus(function(response) {
						if (response.status === 'connected') {
					    // the user is logged in and has authenticated your
					    // app, and response.authResponse supplies
					    // the user's ID, a valid access token, a signed
					    // request, and the time the access token 
					    // and signed request each expire
					    var uid = response.authResponse.userID;
					    var accessToken = response.authResponse.accessToken;
						}
					});
		       		console.log('Good to see you, ' + response.name + '.');
		       		/*stuff to do here*/
		    	});
		    } 
		    else {
		    	console.log('User cancelled login or did not fully authorize.');
		    }
		});
	}
})

.controller('HomeCtrl', function($scope, $http){
	$http({
		method: 'GET',
		//url: 'https://api-v2.soundcloud.com/charts?kind=top&genre=soundcloud%3Agenres%3Aall-music&client_id=e72abce51a00fd0b1b9e8f30410cbab8&limit=20&offset=0'
	}).then(function successCallback(response) {
			$scope.charts = response.data.track;
			console.log(response.data.track);
		}, function errorCallback(response) {
			console.log('het is kapot:(((((((((');
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	})
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


/*Spotify
Client ID: 06115bb84b9c4c55a9e332a63dc83058
Client Secret: 236f481fc98641c7acefd5051d7be17a
*/
// .controller('HomeCtrl', function($scope, $http){
// 	// Simple GET request example:
// 	$http({
// 		method: 'GET',
// 		url: 'https://api.spotify.com/v1/users/11154843760/browse'
// 	}).then(function successCallback(response) {
// 			$scope.browse = response.data;
// 			console.log(response.data);
// 		}, function errorCallback(response) {
// 			console.log('het is kapot:(((((((((');
// 		// called asynchronously if an error occurs
// 		// or server returns response with an error status.
// 	});
// })


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
	})
})

