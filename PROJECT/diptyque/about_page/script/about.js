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
                  display:"block"
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
            height:wh*8
        })
        $('.page_wrap').css({
            width:ww,
            height:wh
        })

        let auto=setInterval(function(){
            $("con_box1").slideToggle(2000);
        })
        setTimeout(function(){
            clearInterval(auto);
        },3000)
        


        function wrap_scroll_down(){
            ww=$(window).width();
            wh=$(window).height();
            if(box_index<7){
                box_index++;
                direction='down';
            }
            $(".mask_wrap").animate({
                top:-box_index*wh
            },"slow")
            before_time=now_time;
            if(box_index>1 && box_index<8){
                $('.main_header a').css({
                    color:"#333"
                });
                $(".ham_but").css({
                    filter: "invert(0%)"
                })
                if(ww<1400){
                    $('.main_header .main_menu').css({
                        background:"#fff"
                    });
                }
                
            }else{
                $('.main_header a').css({
                    color:"#fff"
                });
                $(".ham_but").css({
                    filter: "invert(100%)"
                })
                if(ww<1400){
                    $('.main_header .main_menu').css({
                        background:"#0b0b0b"
                    });
                }
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
            if(box_index>1 && box_index<8){
                $('.main_header a').css({
                    color:"#333"
                });
                if(ww<1400){
                    $('.main_header .main_menu').css({
                        background:"#fff"
                    });
                }
                $(".ham_but").css({
                    filter: "invert(0%)"
                })
            }else{
                $('.main_header a').css({
                    color:"#fff"
                });
                if(ww<1400){
                    $('.main_header .main_menu').css({
                        background:"#0b0b0b"
                    });
                }
                $(".ham_but").css({
                    filter: "invert(100%)"
                })
            }
        }
    
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
                $(".page_2 .title_box").slideDown(2500);
        
            }else if(box_index==2){
                if(ww<800){
                    $(".t_left_box").css({
                        display:"none"
                    });
                }else{
                    $(".t_left_box").slideDown(1000);
                }
                $(".t_img").slideDown(1500);
            }else if(box_index==3){
                $(".page_4 .title_box").slideDown(1500);
            }else if(box_index==5){
                $(".page_6 .title_box").slideDown(1500);
            }else if(box_index==6){
                if(ww<1440){
                    $(".p_sub_title").text("향수의 이야기를 확인해보세요.");
                }
                if(ww<800){
                    $(".page_7 .p_img_4").show(1000);
                }else{
                    $(".product_img").show(1000);
                }
                
                $(".product_title").slideDown(1500);
            }
            
        
        
        })
        

    }
    layout();

    $(window).resize(function(){
        layout();
    })
// ---------------------스크롤이벤트


   
    

// -----------------텍스트효과

let page1_title =setInterval(function(){
    $(".con_box1").animate({
        height: 800
    },1000)
})

setTimeout(function(){
    clearInterval(page1_title);
},1200)

// -----------------푸터 화살표이미지효과






    // 지우지마
})