$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css('background-color', '#ffffff');
       } else {
          $('#navbar').css('background-color', 'transparent');
       }
   });
});

  $(document).ready(function() {
    $("#lightSlider").lightSlider(
    {
          item: 1,
          controls: false,
    keyPress: true,
        loop:true
          
    }); 
     
  });

 $(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop: true,
        controls:true,
        keyPress:true,
            prevHtml: '<',
            nextHtml: '>'
    });
});

