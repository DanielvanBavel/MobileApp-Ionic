angular.module('music.controllers', ['soundCloud'])

.controller('SoundcloudCtrl', function($scope, $http, $sce){
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

	$scope.playMusic = function(clickEvent) {
		$scope.endUrl = '';
		soundcloudUrl = clickEvent;
		// client_id = "?client_id=e72abce51a00fd0b1b9e8f30410cbab8";
		SC = soundcloudUrl + "?client_id=e72abce51a00fd0b1b9e8f30410cbab8";
		$scope.endUrl = SC;
		var player = document.getElementById('musicPlayer');
		player.load(player.play);
	}
})