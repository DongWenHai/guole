angular.module('app')
	.factory('API',['$http',function($http){
		return {

			fetchGet: function(url, params){
				return $http({
					method: 'GET',
					url: url,
					params: params
				})
			},

			fetchPost: function(url, data){
				return $http({
					method: 'POST',
					url: url,
					data: data
				})
			}

		}
	}])