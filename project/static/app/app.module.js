angular.module('app', [])
  .controller('MainCtrl', [function() {
    var self = this;
    self.submit = function() {
      console.log("Yummy!");
    };
  }]);