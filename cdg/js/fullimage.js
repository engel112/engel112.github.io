function fullimage(){
    
        var $menu = $('#article02').find('div');
    var $submenu = $('#full_image');
    var $list = $submenu.find('.thumnail');
    
    $submenu.hide();
    $menu.on('click', function(e){
        e.preventDefault();
   var this_i = $(this).index() - 3;
        $submenu.stop().fadeToggle(300);
      $list.eq(this_i).show();
    });
    $submenu.find('img').on('click', function(){
        $submenu.stop().fadeOut(300);
       $list.hide();
    });
   

};
