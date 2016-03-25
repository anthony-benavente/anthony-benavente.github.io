angular.module( 'agora.resume', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'resume', {
    url: '/resume',
    views: {
      "main": {
        controller: 'ResumeCtrl',
        templateUrl: 'resume/resume.tpl.html'
      }
    },
    data:{ pageTitle: 'Benavente - Resume' }
  });
})

.controller( 'ResumeCtrl', function AboutCtrl( $scope ) {
    $('#top-nav-bar').css('background-color', '#fff');
    $('#top-nav-bar h2').css('color', '#666');
    $('#top-nav-bar ul.right li a').css('color', '#428bca');
})

;
