$(document).ready(function(){
    
    let ww=$(window).width();
    let wh=$(window).height();
    let box_index=0;
    let direction='';
    let before_time=new Date().getTime();
    let now_time=new Date().getTime();

        //숨김버튼(햄버거버튼) + 메뉴
        let but_num=0;
        $(".ham_but").click(function(){
            but_num++;
            if(but_num==1){
                $(".main_menu").css({
                    display:"block",
                    background:"#000"
                })
            }else if(but_num==2){
                $(".main_menu").css({
                    display:"none"
                })
                but_num=0;
            }
        })
        



    function layout(){
        ww=$(window).width();
        wh=$(window).height();
        $('.mask_wrap').css({
            width:ww,
            height:wh*5
        })
        $('.page_wrap').css({
            width:ww,
            height:wh
        });
          
//////////////////스크롤 이벤트///////////////////////////////////////////////////


    function wrap_scroll_down(){
        ww=$(window).width();
        wh=$(window).height();
        if(box_index<4){
            box_index++;
            direction='down';
        }
        $(".mask_wrap").animate({
            top:-box_index*wh
        },"slow")
        before_time=now_time;
        if(box_index>0 && box_index<5){
            $('.left_title,.main_header a').css({
                color:"#333"
            });
            $(".ham_but").css({
                filter: "invert(0%)"
            })
        }else{
            $('.left_title,.main_header a').css({
                color:"#fff"
            });
            $(".ham_but").css({
                filter: "invert(100%)"
            })
        }
    }

    function wrap_scroll_up(){
        ww=$(window).width();
        wh=$(window).height();
        if(box_index>0){
            box_index--;
            direction='up';
        }
        $(".mask_wrap").animate({
            top:-box_index*wh
        },"slow")
        before_time=now_time;
        if(box_index>0 && box_index<5){
            $('.left_title,.main_header a').css({
                color:"#333"
            });
            $(".ham_but").css({
                filter: "invert(0%)"
            })
            
        }else{
            $('.left_title,.main_header a').css({
                color:"#fff"
            });
            $(".ham_but").css({
                filter: "invert(100%)"
            })
            
        }
    }


////////////////////////////////////////////////////////////////////////////

    if(ww>1399){
        $('.mask_wrap').css({
            position:"fixed"
        })
        $(window).on('mousewheel',function(event){
            $(".mask_wrap").clearQueue();
            if(0>event.originalEvent.wheelDeltaY){
                if(direction=='down'){
                    if(box_index>=0){
                        wrap_scroll_down();
                    }else{
                        wrap_scroll_up();
                    }
                }else{
                    if(box_index>=0){
                        wrap_scroll_down();
                    }else{
                        wrap_scroll_up();
                    }
                }
                
            }else{
                if(direction=='up'){
                    if(box_index<=7){
                        wrap_scroll_up();
                    }else{
                        wrap_scroll_down();
                    }
                }else{
                    if(box_index<8){
                        wrap_scroll_up();
                    }else{
                        wrap_scroll_down();
                    }
                }
            }
            if(box_index==1){
        
                $(".page_wrap_2 .on").slideDown(1500);
            }else if(box_index==2){
                $(".page_wrap_3 .on").slideDown(1500);
            }else if(box_index==3){
                $(".page_wrap_4 .on").slideDown(1500);
            }else if(box_index==4){
                $(".page_wrap_5 .on").slideDown(1500);
            }
        })
            
    }//윈도우 if문 마감
    else{
        $('.mask_wrap').css({
            position:"relative"
        })
    }

    if(ww<800){
        $('p').css({
            display:"none"
        })
    }
   /////////////////////////////////////////////////////

 
   $(window).scroll(function(){
    let st=$(this).scrollTop();
    if(st>wh){
        $('.left_title,.main_header a').css({
            color:"#333"
        });
        $(".ham_but").css({
            filter: "invert(0%)"
        })
        $(".left_title").css({
            opacity:0
        })
        $('.main_header .main_menu').css({
            background:"#fff"
        });
        
    }else{
        $('.left_title,.main_header a').css({
            color:"#fff"
        });
        $(".ham_but").css({
            filter: "invert(100%)"
        })
        $(".left_title").css({
            opacity:1
        })
        $('.main_header .main_menu').css({
            background:"#000"
        });
    }
    })
/////////////////////////////////////////////////////

    }
    layout();


    $(window).resize(function(){
        layout();
    })









    // 지우지마쇼
})