function hoverdiv(){
var bookimg = $('.bookimg');
 bookimg.on('mouseenter', function(){
     var bookcover = $(this).find('span');
   bookcover.css({'display':'block'}).on('mouseleave', function(){bookcover.css({'display':'none'})
 });
});
};