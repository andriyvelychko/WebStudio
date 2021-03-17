$(function(){
       // высота "шапки", px
       var h_hght = $('.firstScreen').outerHeight();
       // высота блока с меню, px
       var h_nav = $('#top_nav').outerHeight();
       var top;
       $(window).scroll(function(){
           // отступ сверху
           top = $(this).scrollTop();
           if((h_hght-top) <= h_nav){
               $('#top_nav').css('top','0');
           }
           else if(top < h_hght && top > 0){
               $('#top_nav').css({'bottom' : top, 'top':''});
           }
           else if(top < h_nav){
               $('#top_nav').css({'top':'','bottom':'0'});
           }
       });
   }); 

$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });

//--------------------------------------------------
//Автоматическая высота окна
var textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});
//--------------------------------------------------
//Плавный скрол
    $(document).ready(function(){
        $("#menu, #nav-menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
        });
    });
//--------------------------------------------------
//Плавный скрол
// // Cache selectors
// var lastId,
//     topMenu = $("#menu"),
//     topMenuHeight = topMenu.outerHeight()+15,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//       var item = $($(this).attr("href"));
//       if (item.length) { return item; }
//     });

// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({ 
//       scrollTop: offsetTop
//   }, 300);
//   e.preventDefault();
// });

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;
   
//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
   
//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active")
//          .end().filter("[href='#"+id+"']").parent().addClass("active");
//    }                   
// });

