$(document).ready(function(){

    let ww=$(window).width();
    let wh=$(window).height();

    function main_layout(){
        ww=$(window).width();
        wh=$(window).height();

        if(ww>=1025){
          wh=$(window).height();

          var swiper1 = new Swiper(".fastival_wrap .mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            // slidesPerView: "auto",
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 100,
            pagination: {
                el: ".fastival_wrap .swiper-pagination",
                clickable: true,
              },
            navigation: {
              nextEl: ".fastival_wrap .swiper-button-next",
              prevEl: ".fastival_wrap .swiper-button-prev",
            },
            autoplay: {
              delay: 3500,
              disableOnInteraction: false
            },
            coverflowEffect: {
              rotate: 0,
              stretch:-80,
              depth: 100,
              modifier:2,
              // slideShadows: true,
            },
          });
          
          var swiper2 = new Swiper(".proposal_slide .mySwiper2", {
            slidesPerView: 4,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: ".proposal_slide .swiper-pagination",
                clickable: true,
              },
            navigation: {
              nextEl: ".proposal_slide .swiper-button-next",
              prevEl: ".proposal_slide .swiper-button-prev",
            },
            autoplay: {
              delay: 3000,
              disableOnInteraction: false
            },
          });
          var swiper3 = new Swiper(".sns_slide .mySwiper", {
            slidesPerView: 5,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: ".sns_slide .swiper-pagination",
                clickable: true,
              },
            navigation: {
              nextEl: ".sns_slide .swiper-button-next",
              prevEl: ".sns_slide .swiper-button-prev",
            },
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
          });
    

        }else{
          wh=ww*0.56
          var swiper1 = new Swiper(".fastival_wrap .mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            // slidesPerView: "auto",
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            spaceBetween: 100,
            pagination: {
                el: ".fastival_wrap .swiper-pagination",
                clickable: true,
              },
            navigation: {
              nextEl: ".fastival_wrap .swiper-button-next",
              prevEl: ".fastival_wrap .swiper-button-prev",
            },
            autoplay: {
              delay: 3500,
              disableOnInteraction: false
            },
            coverflowEffect: {
              rotate: 0,
              stretch:-80,
              depth: 100,
              modifier:2,
              // slideShadows: true,
            },
          });
          // var swiper1 = new Swiper(".fastival_wrap .mySwiper", {
          //   slidesPerView: 3,
          //   centeredSlides: true,
          //   loop: true,
          //   spaceBetween: 30,
          //   pagination: {
          //       el: ".fastival_wrap .swiper-pagination",
          //       clickable: true,
          //     },
          //   navigation: {
          //     nextEl: ".fastival_wrap .swiper-button-next",
          //     prevEl: ".fastival_wrap .swiper-button-prev",
          //   },
          //   autoplay: {
          //     delay: 3500,
          //     disableOnInteraction: false
          //   },
          // });
          
          var swiper2 = new Swiper(".proposal_slide .mySwiper2", {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: ".proposal_slide .swiper-pagination",
                clickable: true,
              },
            navigation: {
              nextEl: ".proposal_slide .swiper-button-next",
              prevEl: ".proposal_slide .swiper-button-prev",
            },
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
          });
          var swiper3 = new Swiper(".sns_slide .mySwiper", {
            slidesPerView:3,
            loop: true,
            spaceBetween: 10,
            pagination: {
                el: ".sns_slide .swiper-pagination",
                clickable: true,
              },
            navigation: {
              nextEl: ".sns_slide .swiper-button-next",
              prevEl: ".sns_slide .swiper-button-prev",
            },
          });
    

        }
        $(".page_wrap").css({
          width:ww,
          height:wh
        })
        $(".page_wrap_padding").css({
            width:ww*0.7,
            height:wh
        })
        $(".page_t").css({
            width:ww*0.7,
            height:wh*2
        })
        $(".footer_con_wrap").css({
            width:ww*0.7,
            height:"100%"
        })

        if(ww<700){
          $(".page_wrap").css({
            width:ww,
            height:wh*2
          })
          $(".page_wrap_padding").css({
              width:ww*0.9,
              height:wh*2
          })
          $(".page_t").css({
              width:ww*0.9,
              height:wh*4
          })
          $(".footer_con_wrap").css({
              width:ww*0.7,
              height:"100%"
          })
        }
      
    }//메인레이아웃 마감
    main_layout();
    // -------------------------------------------------메뉴

    $(".f_but").click(function(){
      $(".fixed_menu_wrap").fadeIn(500)
    })
    $(".x_box").click(function(){
      $(".fixed_menu_wrap").fadeOut(500)
    })
    
    

    // -------------------------------------------------     스와이퍼

      
    // -------------------------------------------------웰니스


    function wellness_img_ani(){
      $(".wellness_img_box img").eq(0).fadeIn(500);
      $(".img_title a").eq(0).fadeIn(500);
      let num=0;

      $(".right_arrow").click(function(){
        num++;
        if(num>5){
          num=0;
        }
        $(".wellness_img_box img").fadeOut(500);
        $(".img_title a").fadeOut(500);
        $(".wellness_img_box img").eq(num).fadeIn(500);
        $(".img_title a").eq(num).fadeIn(500);
        $(".well_num").text(num+1)
      })
      
      $(".left_arrow").click(function(){
        let last_num=$(".wellness_img_box img").length-1;
        num--;
        if(num<0){
          num=5;
        }
        $(".wellness_img_box img").fadeOut(500);
        $(".img_title a").fadeOut(500);
        $(".wellness_img_box img").eq(num).fadeIn(500);
        $(".img_title a").eq(num).fadeIn(500);
        $(".well_num").text(num+1)
      })

      // setInterval(function(){
      //   $(".right_arrow").trigger("click")
      // },3000)

    }
    wellness_img_ani();


   // ------------------------------------------------푸터

      $(".low_banner a").eq(0).fadeIn(500);
        let low_num=0;
      setInterval(function(){
        low_num++
        if(low_num>3){
          low_num=0;
        }
        $(".low_banner a").fadeOut(500);
        $(".low_banner a").eq(low_num).fadeIn(500);
      },3000)





    $(".slide_meun_but span").click(function(){
      clearInterval(auto)
    })
    
      $(".slide_meun_but span").eq(2).click(function(){
        a_width=$(".slide_meun_move a").width()
        $(".slide_meun_move").animate({
          left:-a_width
        },1000,function(){
          $(".slide_meun_move a").first().appendTo(".slide_meun_move");
          $(".slide_meun_move").css({
            left:0
          })
        })
      })
      $(".slide_meun_but span").eq(0).click(function(){
        a_width=$(".slide_meun_move a").width()
        $(".slide_meun_move a").last().prependTo(".slide_meun_move");
        $(".slide_meun_move").css({
          left:-a_width
        }).animate({
          left:0
        },1000)
      })

      let auto=setInterval(function(){
        $(".trigger_but").trigger("click")
      },3000)

    


      



    // --------------------------------------리사이즈
    $(window).resize(function(){
        main_layout();
        wellness_img_ani();

    })


    // 지우지마소
})