angular.module( 'agora.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'Benavente - About' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope ) {
    $('#top-nav-bar').css('background-color', '#fff');
    $('#top-nav-bar h2').css('color', '#666');
    $('#top-nav-bar ul.right li a').css('color', '#428bca');
})

;
