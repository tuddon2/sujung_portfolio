$(document).ready(function(){
        let pw=$(window).width();
        let ph=$(window).height();
        let mh=(ph - 380)/2;
        let box_index=0;
        let before_time=new Date().getTime();
        let now_time=new Date().getTime();
        let direction='';

        page_layout();
    function page_layout(){
        pw=$(window).width();
        ph=$(window).height();
    
    $(".wrap").css({
        width:pw,
        height:ph*6
    })
    $(".page").css({
        width:pw,
        height:ph,
        position:"relative"
    })
    $(".in_move_box").css({
        width:pw,
        height:ph
    })
    $(".in_page").css({
        width:pw,
        height:ph
    })
    $(".move_wrap").css({
        marginTop: mh,

    })
    //메인메뉴 길이
    if(pw<1400){
        $(".main_menu").css({
            height:ph
        })   
    }

    // 푸터 크기 잡기
    $(".prod_footer").css({
        width:pw,
        height:ph
    })
    $(".foot_con").eq(0).css({
        width:pw,
        height:ph*0.6
    })
    $(".foot_con").eq(1).css({
        width:pw,
        height:ph*0.3
    })
    $(".foot_con").eq(2).css({
        width:pw,
        height:ph*0.1
    })    

    }


    $(window).resize(function(){
        page_layout();
    })
    
    function wrap_scroll_down(){

        if(box_index<4){
            box_index++;
            direction='down';
        }

        $(".wrap").animate({
            top:-box_index*ph
        },'slow')
        before_time=now_time;

    }

    function wrap_scroll_up(){
        ww=$(window).width();
        wh=$(window).height();

        if(box_index>0){
            box_index--;
            direction='up';
        }

        $(".wrap").animate({
            top:-box_index*ph
        },'slow')
        before_time=now_time;

    }

    if(pw>1399){
        $(window).on('mousewheel',function(event){
            $(".wrap").clearQueue();
            now_time=new Date().getTime();
    
            if(0>event.originalEvent.wheelDeltaY){
                if(direction=='down'){
                    if(before_time+100<now_time){
                        if(box_index>=0){
                            wrap_scroll_down();
                        }else{
                            wrap_scroll_up();
                        }
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
                    if(before_time+100<now_time){
                        if(box_index<=6){
                            wrap_scroll_up();
                        }else{
                            wrap_scroll_down();
                        }
                    }
                }else{
                    if(box_index<6){
                        wrap_scroll_up();
                    }else{
                        wrap_scroll_down();
                    }
                }
            }
        })    

    }



    //숨김버튼(햄버거버튼) + 메뉴
    let but_num=0;
    $(".ham_but").click(function(){
        but_num++;
        if(but_num==1){
            $(".main_menu").css({
                display:"block"
            })
        }else if(but_num==2){
            $(".main_menu").css({
                display:"none"
            })
            but_num=0;
        }
    })

    // 메인 폰트 애니메이션
    $(".top_text").fadeIn(800);
    $(".logo_box span").fadeIn(800);
    $(".bottom_text").fadeIn(800);
    new Promise(r=>setTimeout(r,500));
    $(".page_1").animate({
        height:0,
        overflow:"hidden"
    },1000)

    // 3페이지 무브박스 이동
    let click_num=0;
    let iw=280;
    let line_width=175;
    $(".page_3 .con_img").eq(0).children(".back_img").css({
        display:"block"
    })
    $(".page_3 .right_side").click(function(){
        click_num++;
        if(click_num==1){
            $(".page_3 .move_box").css({
                left: -(iw*click_num)
            })
        }
        if(click_num>7){
            click_num=7;
        }
        $(".page_3 .move_box").css({
            left: -iw*click_num
        })
        $(".page_3 .in_line").animate({
            width: line_width*click_num
        },500)
        $(".con_img").eq(click_num).children(".front_img").css({
            display:"none"
        })
        $(".con_img").children(".back_img").css({
            display:"none"
        })
        $(".con_img").eq(click_num).children(".back_img").css({
            display:"block"
        })
        $(".con_img").children(".front_img").css({
            display:"block"
        })
    })

    $(".page_3 .left_side").click(function(){
        click_num--;
        if(click_num<=0){
            click_num=0;
        }
        $(".page_3 .move_box").css({
            left: -iw*click_num
        })
        $(".page_3 .in_line").animate({
            width: line_width*click_num
        },500)
        $(".page_3 .con_img").eq(click_num).children(".page_3 .front_img").css({
            display:"none"
        })
        $(".page_3 .con_img").children(".page_3 .back_img").css({
            display:"none"
        })
        $(".page_3 .con_img").eq(click_num).children(".page_3 .back_img").css({
            display:"block"
        })
        $(".page_3 .con_img").children(".page_3 .front_img").css({
            display:"block"
        })
    })
    

    // 4페이지   
    let num=0;
    $(".buy_but").click(function(){
        num++;
        if(num>3){
            num=0;
        }
        $(".left_back_img").animate({
            opacity: 0.4
        },500)
        $(".in_page").eq(num).fadeIn(500);
        $(".in_page").eq(num-1).fadeOut(500);
        // 페이지 카운트 바꾸기
        $(".cur_num").text(num);
    })

    // 5페이지 무브박스 이동
    $(".page_5 .con_img").eq(0).children(".back_img").css({
        display:"block"
    })

    let click_num_5=0;
    $(".page_5 .right_side").click(function(){
        click_num_5++;
        if(click_num_5>7){
            click_num_5=7;
        }
        $(".page_5 .move_box").css({
            left: -iw*click_num_5
        })
        $(".page_5 .in_line").animate({
            width: line_width*click_num_5
        },500)
        $(".page_5 .con_img").eq(click_num_5).children(".page_5 .front_img").css({
            display:"none"
        })
        $(".page_5 .con_img").children(".page_5 .back_img").css({
            display:"none"
        })
        $(".page_5 .con_img").eq(click_num_5).children(".page_5 .back_img").css({
            display:"block"
        })
        $(".page_5 .con_img").children(".page_5 .front_img").css({
            display:"block"
        })

    })

    $(".page_5 .left_side").click(function(){
        click_num_5--;
        if(click_num_5<=0){
            click_num_5=0;
        }
        $(".page_5 .move_box").css({
            left: -iw*click_num_5
        })
        $(".page_5 .in_line").animate({
            width: line_width*click_num_5
        },500)
        $(".page_5 .con_img").eq(click_num_5).children(".page_5 .front_img").css({
            display:"none"
        })
        $(".page_5 .con_img").children(".page_5 .back_img").css({
            display:"none"
        })
        $(".page_5 .con_img").eq(click_num_5).children(".page_5 .back_img").css({
            display:"block"
        })
        $(".page_5 .con_img").children(".page_5 .front_img").css({
            display:"block"
        })


    })






})