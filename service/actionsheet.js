angular.module('app')
	.factory('ActionSheet', ['$ionicActionSheet', function ($ionicActionSheet) {

		return {
			showSheet: function (o) {
				var closeSheet = $ionicActionSheet.show({
					buttons: [
						{text: o.typeone},
						{text: o.typetwo}
					],
					cancelText: o.cancle,
					buttonClicked: function (i) {
						o.success && typeof o.success === 'function' && o.success(i);
						closeSheet();
					}
				});

				return closeSheet;
			},

			hideSheet: function (fn) {
				fn && typeof fn === 'function' && fn();
			}

		};

	}])