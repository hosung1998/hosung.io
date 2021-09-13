
var pos = 0;
var select = 1;
setInterval(function(){
    if (pos<3){
        pos+=1;
    }else{
        pos = 0;
    }

    if(pos == 1){
        $(".full_slider").animate({left:"0px"});
        $(".page").attr("src","IMG/1page.png");
    }else if(pos == 2){
        $(".full_slider").animate({left:"-1400px"});
        $(".page").attr("src","IMG/2page.png");
    }else if(pos == 3){
        $(".full_slider").animate({left:"-2800px"});
        $(".page").attr("src","IMG/3page.png");
    }


    if (select < 7 ){
        select +=1;
    }else{
        select = 1;
    }
    
        var posi = -500 * (select-1) ;


    $(".service").animate({top:posi});


        $(".left img").attr("src","IMG/page"+select+".png"); 
},3000);

function popupERD(){ //ERD Popup
    $(".black_background").css("display","block");
    $(".more_img_box").css("display","block");
}

function closebtn(){ //Close Popup
    $(".black_background").css("display","none");
    $(".more_img_box").css("display","none");
}

$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 200 ) {
		$( '.top_btn' ).fadeIn();
	} else {
		$( '.top_btn' ).fadeOut();
	}
} );

$( '.top_btn' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

function showscroll(pos){
    if(pos == 1){
        $( 'html, body' ).animate( { scrollTop : 600 }, 400 );
    }else if(pos == 2){
        $( 'html, body' ).animate( { scrollTop : 800 }, 400 );
    }else if(pos == 3){ 
        $( 'html, body' ).animate( { scrollTop : 1000 }, 400 );
    }
}
