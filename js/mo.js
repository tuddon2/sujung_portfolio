$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();

// ------------------------------------- ------------- 우주영상 clippath확대 

cir_num=0;
$(window).scroll(function(){
    sct=$(window).scrollTop();
    value=sct-400
    val2=1000-(sct-2400)
    // alert(sct)
    // if(ww<1023 && ww>700){

    wrap_h=$(".wrap2").height();
    wrap_st=wrap_h-wh;
    wrap_st2=wrap_h-(wh*2);

        if(ww<700){
            
// ------------------------------------- 모바일버전--------
            $(".m_roket_box img").click(function(){
                $(".m_roket_box").animate({
                    left:"20vw",
                    top:"50vw"
                },)
                $(".con_box").fadeOut(500)
                $(".click_img").fadeOut(500)
            })
            $(".click_box").click(function(){
                $(".m_roket_box").animate({
                    left:"-110vw",
                    top:"10vw"
                    // left: "calc(50% - 165vw)"
                },500)
                $(".con_box").fadeIn(500)
                $(".click_img").fadeIn(500)
                
            })

    if(sct>=wrap_st){
        $('.m_b_img').css({
            display:'none'
        })
        $('.m_ufo_footer').delay(200).animate({
            // width:'800px',
            // height:'800px',
            left:'10%',
            marginLeft:'-35%',
            top:'-20%',
            scale:0.7
        },1000,function(){
            $(".m_ufo_footer img").attr("src","https://i.postimg.cc/cHW4pQ0q/ufo-light.png")
            $(this).css({
                width:'950px',
                height:'800px',
                scale:0.7
            })
            $('.m_ct_wrap').fadeIn(1500)
        })
    }else{
        $('.m_b_img').css({
            display:'block'
        })
    }

    if(sct>=wrap_st2){
        $('.mo_sub_wrap').css({
            transform: 'scaleX(1) scaleY(1)',
        })
        $('.mo_vd_menu').css({
            transform: 'rotate(0deg)',
            top:"200px",
        })
        $('.mo_vd_menu .swiper').fadeIn(500)
        $(".m_vd_title").fadeOut(1000)
    }else{
        $('.mo_sub_wrap').css({
            transform: 'scaleX(0.003) scaleY(0.2)',
        })
        $('.mo_vd_menu').css({
            transform: 'rotate(90deg)',
            top:"200px",
        })
        $('.mo_vd_menu .swiper').fadeOut(500)
        $(".m_vd_title").fadeIn(1000)
    }


    const swiper = new Swiper('.mySwiper2', {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: false,
          shadowOffset:100,
          shadowScale: 0.8,
        },
        pagination: {
          el: ".bg_img5 .swiper-pagination",
        },
        });
    
     // ------------------------------------------ --------우주선확대
    // if(sct>=400 && sct<=2400){
    //     $(".video_bg").css({
    //         clipPath:"circle("+ value +"px at center center )"
    //     })
    // }else if(sct>2400 && sct<=3400){
    //     $(".video_bg").css({
    //         clipPath:"circle("+ val2+"px at center center )"
    //     })
        

    // }
    // ------------------------------------------ --------우주선이동
    if(sct<100 && sct<2800){
        $(".main_ufo").css({
            scale:0.8
        })
    }
    if(sct>=100 && sct<200){
        $(".main_ufo").css({
            width: '247px',
            height: '157px',
            left:'6%',
            top:'200px',
            rotate:"40deg"
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/pTXkpvrT/ufo-2.png")
        $(".s_box").css({display: "none"})
        $(".video_bg").css({
            clipPath:"circle(0px at center center )"
        })
        // ----------------------------------모바일
        $(".main_text1").animate({
            width: "30vw",
            height:"30vw",
            fontSize: "4vw",
            lineHeight: "10vw",
            top:0
        })
        $(".m_video_bg").fadeIn(1000)
        $(".mo_ufo_2").animate({
            top:"22vh"
        },1000)
        $(".mo_ufo_text").slideDown(1000)
    }
    else if(sct<100){
        $(".main_ufo").css({
            width: '207px',
            height: '137px',
            left:'3%',
            top:'50px',
            rotate:"-10deg"
        },500)
        $(".main_ufo_img").attr("src","https://i.postimg.cc/pTXkpvrT/ufo-2.png")
        $(".s_box").css({display: "none"})
        $(".video_bg").css({
            clipPath:"circle(0px at center center )"
        })
        // ----------------------------------모바일
        $(".main_text1").animate({
            width: "100%",
            height:"50%",
            fontSize: "15vw",
            lineHeight: "100vh",
            top:0
        })
        $(".m_video_bg").fadeOut(1000)
        $(".mo_ufo_2").animate({
            top:"50vh"
        },1000)
        $(".mo_ufo_text").slideUp(1000)
    }
    if(sct>=200 && sct<300){
        $(".main_ufo").css({
            width: '397px',
            height: '227px',
            left:'7.5%',
            top:'400px',
            rotate:"30deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/Prg41c2t/ufo-3.png")
        $(".s_box").css({display: "none"})
        $(".video_bg").css({
            clipPath:"circle(0px at center center )"
        })
    }
    if(sct>=300 && sct<400){
        $(".main_ufo").css({
            width: '447px',
            height: '247px',
            left:'8%',
            top:'600px',
            rotate:"20deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/VvRSGKCH/ufo-4.png")
        $(".s_box").css({display: "none"})
    }
    if(sct>=400 && sct<500){
        $(".main_ufo").css({
            width: '347px',
            height: '227px',
            left:'8.5%',
            top:'250px',
            rotate:"30deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box").css({display: "none"})
    }
    if(sct>=500 && sct<600){
        $(".main_ufo").css({
            width: '247px',
            height: '157px',
            left:'9%',
            top:'100px',
            rotate:"40deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box").css({display: "none"})
    }
    if(sct>=600 && sct<700){
        $(".main_ufo").css({
            width: '207px',
            height: '137px',
            left:'50%',
            marginLeft:"-170px",
            top:'200px',
            rotate:"50deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box").css({display: "none"})
    }
    if(sct>=700 && sct<800){
        $(".main_ufo").css({
            width: '157px',
            height: '107px',
            left:'50%',
            marginLeft:"-70px",
            top:'250px',
            rotate:"55deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box").css({display: "none"})
    }
    if(sct>=800 && sct<900){
        $(".main_ufo").css({
            width: '147px',
            height: '87px',
            left:'50%',
            top:'320px',
            rotate:"35deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/VvRSGKCH/ufo-4.png")
        $(".s_box").css({display: "none"})
    }
    if(sct>=900 && sct<1000){
        $(".main_ufo").css({
            width: '217px',
            height: '137px',
            left:'50%',
            marginLeft:'50px',
            top:'250px',
            rotate:"35deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/mgcDCL8n/ufo-5.png")
        $(".s_box").css({display: "none"})
    }
    //------------------------------------------텍스트 나타남
    if(sct>=1000 && sct<1300){
        $(".main_ufo_2").css({
            width: '700px',
            height: '600px',
            left:'50%',
            marginLeft:'-150px',
            top:'100px',
            rotate:"55deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/cHW4pQ0q/ufo-light.png")
        $(".s_box1").fadeIn(500);
        $(".s_box2").hide(1000);
        $(".s_box3").hide(1000);
    }
    if(sct>=1400 && sct<1500){
        $(".main_ufo_2").css({
            width: '207px',
            height: '137px',
            left:'50%',
            marginLeft:'50px',
            top:'250px',
            rotate:"35deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box1").hide(1000);
        $(".s_box2").hide(1000);
        $(".s_box3").hide(1000);
    }
    if(sct>=1500 && sct<1600){
        $(".main_ufo_2").css({
            width: '207px',
            height: '137px',
            left:'50%',
            marginLeft:'-200px',
            top:'300px',
            rotate:"15deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box1").hide(1000);
        $(".s_box2").hide(1000);
        $(".s_box3").hide(1000);
    }
    if(sct>=1600 && sct<1700){
        $(".main_ufo_2").css({
            width: '347px',
            height: '227px',
            left:'50%',
            marginLeft:'-400px',
            top:'280px',
            rotate:"-20deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box1").hide(1000);
        $(".s_box2").hide(1000);
        $(".s_box3").hide(1000);
    }
    if(sct>=1700 && sct<2000){
        $(".main_ufo_2").css({
            width: '800px',
            height: '680px',
            left:'50%',
            top:'100px',
            marginLeft:"-600px",
            rotate:"-30deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/cHW4pQ0q/ufo-light.png")
        $(".s_box1").hide(1000);
        $(".s_box2").fadeIn(500);
        $(".s_box3").hide(1000);
    }
    if(sct>=2000 && sct<2100){
        $(".main_ufo_2").css({
            width: '355px',
            height: '227px',
            left:'50%',
            marginLeft:"-200px",
            top:'150px',
            rotate:"-10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/mgcDCL8n/ufo-5.png")
        $(".s_box1").hide(1000);
        $(".s_box2").hide(1000);
        $(".s_box3").hide(1000);
    }
    if(sct>=2100 && sct<2300){
        $(".main_ufo_2").css({
            width: '370px',
            height: '227px',
            left:'50%',
            top:'150px',
            marginLeft:'-40%',
            rotate:"10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/VvRSGKCH/ufo-4.png")
        $(".s_box1").hide(1000);
        $(".s_box2").hide(1000);
        $(".s_box3").hide(1000);
    }
    if(sct>=2300 && sct<2400){
        $(".main_ufo_2").css({
            width: '260px',
            height: '157px',
            left:'50%',
            top:'100px',
            marginLeft:'-130px',
            rotate:"10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/Prg41c2t/ufo-3.png")
        $(".s_box1").hide(1000);
        $(".s_box2").hide(1000);
        $(".s_box3").hide(1000);
    }
    if(sct>=2400 && sct<2500){
        $(".main_ufo_2").css({
            width: '347px',
            height: '227px',
            left:'50%',
            top:'150px',
            marginLeft:'-173.5px',
            rotate:"10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/pTXkpvrT/ufo-2.png")
        $(".s_box1").hide(1000);
        $(".s_box2").hide(1000);
        $(".s_box3").hide(1000);
    }
    if(sct>=2500 && sct<2600){
        $(".main_ufo_2").css({
            width: '397px',
            height: '247px',
            left:'50%',
            top:'200px',
            marginLeft:'-198.5px',
            rotate:"10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/pTXkpvrT/ufo-2.png")
        $(".s_box1").hide(1000);
        $(".s_box2").hide(1000);
        $(".s_box3").hide(1000);
    }
    if(sct>=2600 && sct<2800){
        $(".main_ufo_2").css({
            width: '900px',
            height: '800px',
            left:'50%',
            top:'100px',
            marginLeft:'-450px',
            rotate:"10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/FzfyLgSd/ufo-light-3.png")
        $(".s_box1").hide(1000);
        $(".s_box2").hide(1000);
        $(".s_box3").show(1000);
    }
        // ------------------------------------------로켓
    if(sct>=2700 && sct<3600){
        // $('.roket_box').addClass('roket_animation')
        $(".roket_box>img").attr("src","https://i.postimg.cc/T1hKtJQf/roket-smoke-3.png.png")
        $('.roket_box').animate({
            left:'-80%',
            scale:1,
            top: '0px'
        },function(){
            $('.con_box').fadeIn(500)
        })
    }
    if(sct>=3600 && sct<4500){
        // $('.roket_box').removeClass('roket_animation')
        $(".roket_box>img").attr("src","https://i.postimg.cc/T1hKtJQf/roket-smoke-3.png.png")
        $('.roket_box').animate({
            left:'35%',
            scale:1.3,
            top: '400px'
        },function(){
            $('.con_box').fadeOut(500)
        })
        $(".video_bg").css({
            clipPath:"circle(0px at center center )"
        })
    }
    
    
    // ------------------------------------------프로젝트
    if(sct>=4800 && sct<5800){
        $('.bg_img3').css({
            position: 'fixed',
        })
        if(sct>=4800 && sct<4900){
            $('.preview_img').css({
                scale:1.3
            })
            $('.preview_img2').css({
                filter: 'brightness(0.9)',
                boxShadow: '0px 0px 0px white',
            })
            $('.preview_img1').css({
                top:'170px',
                marginLeft: "-700px"
            })
            $('.preview_img3').css({
                top:'-80px',
                marginLeft: "120px"
            })
            $('.preview_img4').css({
                top:'-50px',
                marginLeft: "500px"
            })
            $('.preview_img5').css({
                top:'600px',
                marginLeft: "-370px"
            })
        }
        if(sct>=4900 && sct<5000){
            $('.preview_img').css({
                scale:1.6,
            })
            $('.preview_img2').css({
                filter: 'brightness(0.8)',
                boxShadow: 'inset 0px 0px 30px gray'
            })
            $('.preview_img1').css({
                top:'180px',
                marginLeft: "-830px"
            })
            $('.preview_img3').css({
                top:'-150px',
                marginLeft: "180px"
            })
            $('.preview_img4').css({
                top:'-150px',
                marginLeft: "630px"
            })
            $('.preview_img5').css({
                top:'700px',
                marginLeft: "-410px"
            })
        }
        if(sct>=5000 && sct<5100){
            $('.preview_img').css({
                scale:2.2
            })
            $('.preview_img2').css({
                filter: 'brightness(0.7)',
                boxShadow: 'inset 0px 0px 20px black'
                
            })
            $('.preview_img1').css({
                top:'200px',
                marginLeft: "-1100px"
            })
            $('.preview_img3').css({
                top:'-300px',
                marginLeft: "300px"
            })
            $('.preview_img4').css({
                top:'-150px',
                marginLeft: "900px"
            })
            $('.preview_img5').css({
                top:'860px',
                marginLeft: "-485px"
            })
        }
        if(sct>=5100 && sct<5200){
            $('.preview_img').css({
                scale:2.6
            })
            $('.preview_img2').css({
                filter: 'brightness(0.6)',
                boxShadow: 'inset 0px 0px 20px gray'
            })
            $('.preview_img1').css({
                top:'220px',
                marginLeft: "-1280px"
            })
            $('.preview_img3').css({
                top:'-450px',
                marginLeft: "300px"
            })
            $('.preview_img4').css({
                top:'-150px',
                marginLeft: "1100px"
            })
            $('.preview_img5').css({
                top:'1000px',
                marginLeft: "-485px"
            })
        }
        if(sct>=5200 && sct<5300){
            $('.preview_img').css({
                scale:2.8
            })
            $('.preview_img2').css({
                filter: 'brightness(0.5)',
                boxShadow: 'inset  0px 0px 30px gray'
                
            })
            $('.preview_img1').css({
                top:'220px',
                marginLeft: "-1400px"
            })
            $('.preview_img3').css({
                top:'-450px',
                marginLeft: "300px"
            })
            $('.preview_img4').css({
                top:'-150px',
                marginLeft: "1200px"
            })
            $('.preview_img5').css({
                top:'1050px',
                marginLeft: "-485px"
            })
        }
        if(sct>=5300 && sct<5800){
            $('.preview_img').css({
                scale:3,
            })
            $('.preview_img2').css({
                filter: 'brightness(0.4)',
                boxShadow: 'inset  0px 0px 30px gray'
            })
            $('.preview_img1').css({
                top:'220px',
                marginLeft: "-1400px"
            })
            $('.preview_img3').css({
                top:'-450px',
                marginLeft: "300px"
            })
            $('.preview_img4').css({
                top:'-150px',
                marginLeft: "1200px"
            })
            $('.preview_img5').css({
                top:'1100px',
                marginLeft: "-485px"
            })
            $('.wp_con1').css({
                position: 'relative',
            })
        }

    }
    else{
        $('.bg_img3').css({
            position: 'relative',
        })
        $('.preview_img').css({
            scale:1,
            filter: 'brightness(1)'
        })
        $('.preview_img1').css({
            marginLeft: "-560px",
            top: '160px'
        })
        $('.preview_img3').css({
            marginLeft: "65px",
            top: '0px'
        })
        $('.preview_img4').css({
            marginLeft: "350px",
            top: '0px'
        })
        $('.preview_img5').css({
            marginLeft: "-330px",
            top: '520px'
        })
    }
// ----------------------------------------------------웹사이트 프로젝트
if(sct>=5800 && sct<6700){
    $('.wp_con1').css({
        position: 'fixed',
        // display:'block'
    })
    $(".wp_con1").fadeIn(500);
    $(".wp_t1 .wp_con_box").slideDown(1000);
    $('.wp_t1').css({
        display:'block'
    })
    $('.wp_con4,.wp_con3,.wp_con2,.wp_t4,.wp_t3,.wp_t2').css({
        position: 'relative',
        display:'none'
    })
}
if(sct>=6700 && sct<7600){
    $('.wp_con2').css({
        position: 'fixed',
        // display:'block'
    })
    $(".wp_con2").fadeIn(500);
    $(".wp_t2 .wp_con_box").slideDown(1000);
    $('.wp_t2').css({
        display:'block'
    })
    $('.wp_con4,.wp_con3,.wp_t4,.wp_t3').css({
        position: 'relative',
        display:'none'
    })
}
if(sct>=7600 && sct<8500){
    $('.wp_con3').css({
        position: 'fixed',
        // display:'block'
    })
    $(".wp_con3").fadeIn(500);
    $(".wp_t3 .wp_con_box").slideDown(1000);
    $('.wp_t3').css({
        display:'block'
    })
    $('.wp_con4,.wp_t4').css({
        position: 'relative',
        display:'none'
    })
}
if(sct>=8500 && sct<9400){
    $('.wp_con4').css({
        position: 'fixed',
        // display:'block'
    })
    $(".wp_con4").fadeIn(500);
    $(".wp_t4 .wp_con_box").slideDown(1000);
    $('.wp_t4').css({
        display:'block'
    })
    $('#vd').css({
        position:"relative",
    })
}
// --------------------------------------------시각디자인 프로젝트
if(sct>=9800 && sct<9900){
    $('.vd_title').animate({
        width:'70vw',
        marginLeft:'-35vw',
        fontSize: '18px',
        fontWeight: 400
    },function(){
            $('.sub_wrap').css({
                transform: 'scaleX(0.003) scaleY(0.2)',
            })
        })
        $('.vd_menu').css({
            transform: 'rotate(90deg)',
            top:"0px",
        })
}
if(sct>=9900 && sct<10000){
    $('.vd_title').animate({
        width:'80vw',
        marginLeft:'-40vw',
        fontSize: '20px',
        fontWeight: 600
    },function(){
        $('.sub_wrap').css({
            transform: 'scaleX(0.005) scaleY(0.5)',
        })
    })
    $('.vd_menu').css({
        transform: 'rotate(90deg)',
        top:"0px",
    })
    $('.vd_title').fadeIn(500)
    $('.swiper').fadeOut(300)
}
if(sct>=10000 && sct<10100){
    $('.vd_title').fadeOut(500)
    $('.sub_wrap').css({
        transform: 'scaleX(0.01) scaleY(0.9)',
    })
    $('.vd_menu').css({
        transform: 'rotate(60deg)',
        top:"100px",
    })
    $('.swiper').fadeOut(300)
}
if(sct>=10200 && sct<10300){
    $('.vd_title').fadeOut(500)
    $('.sub_wrap').css({
        transform: 'scaleX(0.01) scaleY(0.9)',
    })
    $('.vd_menu').css({
        transform: 'rotate(30deg)',
        top:"100px",
    })
    $('.swiper').fadeOut(300)
}
if(sct>=10300 && sct<10400){
    $('.vd_title').fadeOut(500)
    $('.sub_wrap').css({
        transform: 'scaleX(1) scaleY(1)',
    })
    $('.vd_menu').css({
        transform: 'rotate(0deg)',
        top:"200px",
    })
    $('.swiper').fadeIn(300)
}
// if(sct>=10400 && sct<10500){
//     $('.vd_title').fadeOut(500)
//     $('.sub_wrap').css({
//         transform: 'scaleX(1) scaleY(1)'
//     })
//     $('.vd_menu').css({
//         transform: 'rotate(0deg)'
//     })
//     $('.swiper').fadeIn(300)
// }
// --------------------------------------------푸터그라데이션
if(sct<11100){
    $('.b_img').css({
        display:'block'
    })
}
if(sct>=11100){
    $('.b_img').css({
        display:'none'
    })
    $('.ufo_footer').delay(200).animate({
        // width:'800px',
        // height:'800px',
        left:'-25%',
        top:'-15%',
    },1000,function(){
        $(".ufo_footer img").attr("src","https://i.postimg.cc/cHW4pQ0q/ufo-light.png")
        $(this).css({
            width:'950px',
            height:'800px',
        })
        $('.ct_wrap').fadeIn(1500)
    })
}
    }
})
// -------------------------스크롤이벤트 종료


    // 지우지마
})
