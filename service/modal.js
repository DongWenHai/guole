angular.module('app')
	.factory('Modal', ['$ionicModal', function ($ionicModal) {
		return {
			initModal: function (scope, templateUrl) {
				$ionicModal.fromTemplateUrl(templateUrl, {
					scope: scope,
					animation: 'slide-in-up'
				}).then(function(modal) {
				    scope.modal = modal;
				  });
			},
			openModal: function (scope) {
				scope.modal.show();
			},
			closeModal: function (scope) {
				scope.modal.hide();
			}
			
		};
	}])