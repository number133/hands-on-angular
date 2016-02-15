'use strict';

angular.module('swFrontApp').service('auth', function($http){
    this.login = function(user){
        return $http.post('/api/login', { email: user.email, password: user.password });
    }
    
    this.isLoggedIn = function(){
        return (localStorage.getItem('auth_token')) ? true : false
    }
    
    this.logout = function(){
        return $http.post('/api/logout');
    }
});