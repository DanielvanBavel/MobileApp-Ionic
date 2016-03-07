angular.module('music.controllers', [])
// angular.module('ionicApp', ['ionic', 'ionic-audio'])

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

.controller('PlaylistsCtrl', function($scope) {
	$scope.playlists = [
		{ title: 'Mijn playlist', id: 1 },
		{ title: 'Chill', id: 2 },
		{ title: 'Dubstep', id: 3 },
		{ title: 'Indie', id: 4 },
		{ title: 'Rap', id: 5 },
		{ title: 'Cowbell', id: 6 }
	];
})

.controller('HomeCtrl', function($scope, $http){
	// Simple GET request example:
	$http({
		method: 'GET',
		url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=FLL7gFFBTgbNSpBReiip0xdA&fields=items%2CpageInfo&key=AIzaSyAnoF9yGSWHOEttc0dc_pLoEbZqgMafuLI'


		}).then(function successCallback(response) {
			console.log(response);
		// this callback will be called asynchronously
		// when the response is available
		}, function errorCallback(response) {
			console.log('het is kapot:(((((((((');
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});

	$response = 

	 $scope.tracks = [
        {
            url: '',
            artist: 'The Police',
            title: 'Message in a bottle',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
        },
        {
            url: 'https://ionic-audio.s3.amazonaws.com/Roxane.mp3',
            artist: 'The Police',
            title: 'Roxane',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
        }
    ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})










// .controller('MyCtrl', function($scope) {
 
//   $scope.tracks = [
//         {
//             url: 'https://ionic-audio.s3.amazonaws.com/Message%20in%20a%20bottle.mp3',
//             artist: 'The Police',
//             title: 'Message in a bottle',
//             art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
//         },
//         {
//             url: 'https://ionic-audio.s3.amazonaws.com/Roxane.mp3',
//             artist: 'The Police',
//             title: 'Roxane',
//             art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
//         }
//     ];
// });