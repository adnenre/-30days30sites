var app=angular.module('myApp',[]);
app.controller('myCtrl', function($scope){
  $scope.slider=[
    
    {
      msg:"Welcome to Tunisia",
      img:"http://www.tourisme-sud-tunisien.com/assets/images/sahara-tunisia.jpg",
    },
    {
    msg:"",  img:"http://www.discovertunisia.com/sites/default/files/slider3n.jpg",
    },
    {
      msg:"Welcome to Tunsia ",
      
      img:"https://media-cdn.tripadvisor.com/media/photo-s/02/76/e2/28/piscina.jpg",
    },
    {
      msg:"Welcome to Tunsia ",
      
      img:"http://tunisie.co/uploads/images/content/beach-110716-2.jpg",
    },
    {
      msg:"Welcome to Tunsia ",
      
      img:"http://medafricatimes.com/wp-content/uploads/2012/12/tunisia-tourism.jpg",
    },{
      msg:"Welcome to Tunsia ",
      
      img:"http://www.thalassa-hotels.com/images/galerie/min/97.jpg",
    },{
    
      msg:"Welcome to Tunsia ",
      img:"http://www.jektis.com/gallerie_hotels/galerie_285/img20100823-48241.jpg",
    },{
      msg:"Welcome to Tunsia ",
      
      img:"http://fwk.e-receptif.com/cr.fwk/images/hotels/Section-2204-20120222-101302.jpg",
    },{
    
      msg:"Welcome to Tunsia ",
      img:"http://img.ev.mu/images/attractions/160/960x384/366439.jpg"
    },
    {
      msg:"Welcome to Tunsia ",
      
      img:"http://fwk.e-receptif.com/cr.fwk/images/hotels/Section-3656-20130618-114458.jpg"
    }
  ]
});


$(document).ready(function(){
  var $item = $('.item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.item img').each(function() {
  var $src = $(this).attr('src');
 
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')'
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "true"
});
});