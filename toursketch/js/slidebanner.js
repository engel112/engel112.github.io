/* sildebanner.js */

function slidebanner(banner){
  var b_box = banner,
      b_box_ul = b_box.children('ul'),
      b_box_li = b_box_ul.children('li'),
      b_box_li_width = b_box.find('li').width(),
      l_btn = $('.jehyu_btn_left').children('button'),
      r_btn = $('.jehyu_btn_right').children('button');
  
  b_box_li.last().prependTo(b_box_ul);
  
  r_btn.on('click', function(){
    var b_li = b_box.find('li');
    b_li.first().stop().animate({'margin-left':b_box_li_width + 32}, 700, function(){
      b_li.css({'margin': '0 16px'})
        .last().prependTo(b_box_ul);
  });
  });
  l_btn.on('click', function(){
    var b_li = b_box.find('li');
    b_li.first().stop().animate({'margin-left':-b_box_li_width - 32}, 700, function(){
      b_li.css({'margin': '0 16px'})
      .first().appendTo(b_box_ul);
  });
  });
  
}// slidebanner