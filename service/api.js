angular.module('app')
	.factory('API',['$http',function($http){
		return {

			fetchGet: function(url, params){
				return $http({
					methed: 'GET',
					url: url,
					params: params
				})
			}

		}
	}])