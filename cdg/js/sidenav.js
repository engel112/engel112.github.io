/*sidenav.js*/
function sidenav(){

    
//nav 버튼생성
        var art_length = $('#sectionWrap').find('article').length;
        for(var i = 0; i < art_length; i++){
            $('#side_button').children('ul').append('<li><a href="#"><span>이동');
        };
    
    
//클릭시 이동
       var navBtn = $('#side_button').find('li'),
            $body = $('html, body');
    
    navBtn.on('click', function(e){
    var iBtn = $(this).index(),
        $this= $('section').find('article').eq(iBtn),
        thisArt = $this.offset().top;
        e.preventDefault();
        $body.stop().animate({'scrollTop': thisArt - 80 }, 500);
    });
var nav_h = $('#side_button').height;
  $('#side_button').css({'top':'50%'}).css({'top': "-=nav_hpx"});
    
};
