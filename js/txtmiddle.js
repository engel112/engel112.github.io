function txtmiddle($all, $inner){

var sec_h = $all.height();
var sec_inner = $all.find($inner);
var sec_i_h = sec_inner.height();
sec_inner.css({'margin-top': (sec_h / 2) - (sec_i_h / 2)});


};