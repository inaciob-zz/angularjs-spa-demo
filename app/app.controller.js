var app = angular.module('SPADemo', ['ui.router']);

(function() {
	'use strict';
	
	app.controller('AppCtrl', AppCtrl);

	AppCtrl.$inject = ['$state', '$stateParams'];

	function AppCtrl($state, $stateParams) {
		var vm = this;

		// Set variables

		vm.init = init;

		function init() {
			// Startup code goes here
		}
		init();
	}

	app.config(function($stateProvider) {
		var homeState = {
	    	name: 'home',
	    	url: '/',
	    	templateUrl: '/angularjs-spa-demo/home.html'
	  	}

		var aboutState = {
	    	name: 'about',
	    	url: '/about',
	    	templateUrl: '/angularjs-spa-demo/about.html'
	  	}

	  	var contactState = {
	    	name: 'contact',
	    	url: '/contact',
	    	templateUrl: '/angularjs-spa-demo/contact.html'
	  	}

	  	$stateProvider.state(homeState);
	  	$stateProvider.state(aboutState);
	  	$stateProvider.state(contactState);
	});
})();
