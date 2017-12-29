angular.module('app')
	.controller('classifyController',['$scope','$state',function($scope,$state){

		$scope.goState = function(stateName){
			$state.go(stateName);
		}

		$scope.classifylistdata = [
			{cla:'液晶显示'},
			{cla:'汽车点火类'},
			{cla:'多U口输出'},
			{cla:'带LED手电'},
			{cla:'太阳能'},
			{cla:'带插头'},
			{cla:'3G上网'},
			{cla:'笔记本数码类'}
		];

		$scope.listIndex = null;

		$scope.goList = function(index){
			if(typeof index == 'number'){
				$scope.listIndex = index;
				$state.go('footer.classify.classifylistcontent',{listdata:JSON.stringify($scope.classifylistdata[index].cla)});
			}else if(typeof index == 'string'){
				$scope.listIndex = null;
				$state.go(index);
			}
		};

	}])