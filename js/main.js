
$(document).ready(function() {
 
  $("#owl-demo1").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
    
      autoplay:true,
    
      loop: true,
      
      rewindNav : true,
      rewindSpeed:0,
      slideTransition: 'linear',
      autoplayTimeout: 0,
      
      autoplayHoverPause: false,
      pagination:true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

 
  });
 
});


  
$(document).ready (function(){
    $(".button").click(function(){
      var value=$(this).attr("data-filter");
      if (value=="All")
      {
        $(".filter").show("1000");
        
      }
      else
      {
      $(".filter").not("."+value).hide("1000");
      $(".filter").filter("."+value).show("1000");
      }
      
    
  
  
        $("ul.button").click(function(){
        $(this).addClass('active').sibling().removeClass('active');
})
})





$('.sec1_col1').waypoint(function(direction){

    $('.sec1_col1').addClass(' animated slideInLeft')
    },{
    offset:'50%'
  })


$('.sec2_div1').waypoint(function(direction){

    $('.sec2_div1').addClass(' animated fadeInLeft')
    },{
    offset:'50%'
  })



$('.media1').waypoint(function(direction){

    $('.media1').addClass(' animated fadeInLeft')
    $('.media2').addClass(' animated fadeInRight')
    },{
    offset:'50%'
  })




$('.col_div').waypoint(function(direction){

    $('.col_div').addClass(' animated fadeInRight')
    
    },{
    offset:'50%'
  })











})












  mybutton = document.getElementById("myBtn2");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



var preloader = document.getElementById("loader1");
  function loadfunction(){
    preloader.style.display = "none";}



