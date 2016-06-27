function nav(){
    
        var $menu = $('#menu');
    var $submenu = $('#submenuWrap');
    
    $submenu.hide();
    $menu.on('click', function(e){
        e.preventDefault();
        $submenu.stop().fadeToggle(300);
    });
    $submenu.on('click', function(){
        $submenu.stop().fadeOut(300);
    });
    
};
