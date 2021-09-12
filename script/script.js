
var pos = 0;
setInterval(function(){
    if (pos<3){
        pos+=1;
    }else{
        pos = 0;
    }

    if(pos == 1){
        $(".full_slider").animate({left:"0px"});
    }else if(pos == 2){
        $(".full_slider").animate({left:"-1400px"});
    }else if(pos == 3){
        $(".full_slider").animate({left:"-2800px"});
    }
},3000);