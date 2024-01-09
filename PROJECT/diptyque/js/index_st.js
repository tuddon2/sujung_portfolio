$(document).ready(function(){
    // 메인 페이지 슬라이드 텍스트
    setInterval(function(){
        $(".move_box").animate({
            left:-3840
        },15000,function(){
            $(".move_text").first().appendTo(".move_box");
            $(".move_box").css({
                left:0
            })
        })
    })

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
    let ww=$(window).width()
    let sh=$(window).height() - 180;

    //섹션 높이용(스크롤 방지)
    function sec_layout(){
        ww=$(window).width()
        sh=$(window).height() - 180;
        $(".sec").css({
            width:ww,
            height:sh
        })
        $(".main_menu").css({
            height:sh
        })
        $("body").css({
            overflowX:"hidden"
        })

    }
    sec_layout();

    $(window).resize(function(){
        sec_layout();
    })


    // 배경 영상 탭 전환
    $(".goods").eq(0).mouseover(function(){
        $(".goods img").css({
            display:"none"
        })
        $(".goods img").eq(0).css({
            display:"block"
        })
        $(".back_video_1").css({
            display:"block"
        })
        $(".move_text").css({
            opacity:0
        })
        $(".stop_text").css({
            display:"block"
        })
    })
    $(".goods").eq(0).mouseleave(function(){
        $(".goods img").css({
            display:"block"
        })
        $(".back_video_1").css({
            display:"none"
        })
        $(".move_text").css({
            opacity:1
        })
        $(".stop_text").css({
            display:"none"
        })
    })

    $(".goods").eq(1).mouseover(function(){
        $(".goods img").css({
            display:"none"
        })
        $(".goods img").eq(1).css({
            display:"block"
        })
        $(".back_video_2").css({
            display:"block"
        })
        $(".move_text").css({
            opacity:0
        })
        $(".stop_text").css({
            display:"block"
        })
    })
    $(".goods").eq(1).mouseleave(function(){
        $(".goods img").css({
            display:"block"
        })
        $(".back_video_2").css({
            display:"none"
        })
        $(".move_text").css({
            opacity:1
        })
        $(".stop_text").css({
            display:"none"
        })
    })

    $(".goods").eq(2).mouseenter(function(){
        $(".goods img").css({
            display:"none"
        })
        $(".goods img").eq(2).css({
            display:"block"
        })
        $(".back_video_3").css({
            display:"block"
        })
        $(".move_text").css({
            opacity:0
        })
        $(".stop_text").css({
            display:"block"
        })
    })
    $(".goods").eq(2).mouseleave(function(){
        $(".goods img").css({
            display:"block"
        })
        $(".back_video_3").css({
            display:"none"
        })
        $(".move_text").css({
            opacity:1
        })
        $(".stop_text").css({
            display:"none"
        })
    })





})