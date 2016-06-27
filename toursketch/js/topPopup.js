// topPopup.js

function topPopup(){
  var popupBox = $('#h_top_wrap');
  var closeBtn= popupBox.find('button');
  var wrap_h = $('#header').height();
  var popup_h = popupBox.height();
  var final_h = wrap_h - popup_h
  closeBtn.on('click',function(){
    popupBox.slideUp(300),
    $('#header').css({'height': final_h});
  });
};