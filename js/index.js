$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();

// --------------------------메인화면 시작
    function main_layout(){
        ww=$(window).width();
        wh=$(window).height();
        // if(ww>1440){
        $('.wrap').css({
            width:ww*3,
            // height:wh
        });
        $('.main_horizontal_page').css({
            width:ww*3,
            height:wh
        });
        $('.main_page,.video_bg,.s_con_box,.con_wrap').css({
            width:ww,
            height:wh
        });
        $('.main_text,.gap').css({
            width:ww,
            height:wh*0.5
        });
        $('.gap2').css({
            width:ww,
            height:wh*0.3
        });
        $('.rt_menu').css({
            width:ww*0.95,
            height:wh*0.9
        });
        
    // }
    $('.rt_overlay').on({
        mouseenter:(function(){
            $('.r_top_menu').animate({
                width: '200px',
                left:"0px"
            })
            $('.r_top_menu p').fadeIn(500);
            $(".menu_img").fadeIn(500);
            $(".menu_img img").attr("src","https://i.postimg.cc/pTXkpvrT/ufo-2.png");
        }),
        mouseleave:(function(){
            $('.r_top_menu').animate({
                width: '150px',
                left:"50px"
            });
            $('.r_top_menu p').fadeOut(500);
            $(".menu_img").fadeIn(500);
            $(".menu_img img").attr("src","https://i.postimg.cc/Prg41c2t/ufo-3.png");
        }),
        click:(function(){
            $('.r_top_menu').animate({
                width: '70px',
                left:"130px"
            })
            $('.r_top_menu p').fadeOut(500);
            $(".menu_img").fadeOut(500);
            $('.rt_menu').fadeIn(500);
            $('.rt_ufo').animate({
                scale: 1,
            },500);
            $('.rt_ufo_img').delay(500).animate({
                top:"15%"
            },1000,function(){
                $('.rt_ufo a').fadeIn(500)
            });
        })
    })

// --------------------------------------------고정메뉴


    $('.x_box').click(function(){
        $('.rt_menu').fadeOut(500)
    })

    $('.rt_menu a').click(function(){
        $('.rt_menu').fadeOut(500)
        // $(".sub_wrap").animate({
        //     height: '600px'
        // },1000)
        $(".video_bg").css({
            clipPath:"circle(0px at center center )"
        });
        $('.wp_con').css({
            position:'relative'
        });
        $('.vd_menu').css({
            transform: "rotate(0deg)"
        });
        $('.sub_wrap').css({
            transform: "rotate(0deg)"
        });
        $('.roket_box').css({
            top: '100px',
            left: '-80%'
        });
        $('.con_box').fadeIn(500)
        $('.b_img').css({
            display:'none'
        });
        $('.ufo_footer').delay(200).animate({
            left:'50%',
            // marginLeft:'-35%',
            top:'0',
        },1000,function(){
            $(".ufo_footer img").attr("src","https://i.postimg.cc/cHW4pQ0q/ufo-light.png")
            $(this).css({
                width:'950px',
                height:'800px',
            })
            $('.ct_wrap').fadeIn(1500)
        });
    })

    $('.vd a').click(function(){
        $('.vd_menu').css({
            transform: "rotate(0deg)"
        });
        $('.sub_wrap').css({
            transform: "scaleX(1) scaleY(1) "
        });
        $('.vd_title').css({
            display:'none'
        });
        $(".swiper").fadeIn(500)

    })
    

    }
    main_layout();
// --------------------------메인화면 가로스크롤

function sectiongroup_init(){
    $('.main_horizontal_page').each(function(index,node){
        var $group = $(node);
        var $section = $group.find('> .main_page');

        gsap.to($section, {
            xPercent: -100*($section.length-1),
            ease:"none",
            // =>스크롤이벤트를 진행할때 처음에는 빠르게 움직이다가 끝부분부터는 느려지는 효과를 없애는 방법
            scrollTrigger:{
                trigger:$group,
                pin:true,
                scrub:true,
            }
        })

        // let tl = gsap.timeline({
        //     // yes, we can add it to an entire timeline!
        //     scrollTrigger: {
        //       trigger: $group,
        //       pin: true, 
        //       start: "top top", // when the top of the trigger hits the top of the viewport
        //       end: "+=1200", // end after scrolling 500px beyond the start
        //       scrub:true,
        //       pinSpacing:false,
        //       snap: {
        //         // snapTo: "labels", // snap to the closest label in the timeline
        //         // duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //         // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //         ease: "none", // the ease of the snap animation ("power3" by default)
        //       },
        //     },
        //   });
          
        //   // add animations and labels to the timeline
        //   tl.addLabel("spin")
        //     .to($section, { xPercent: -100*($section.length-1) })
        //     .addLabel("end");

    })
}
    sectiongroup_init();




// ------------------------------------- ------------- 우주영상 clippath확대 


cir_num=0;
$(window).scroll(function(){
    sct=$(window).scrollTop();
    value=sct-400;
    val2=1000-(sct-2400);
    // alert(sct)
    console.log(sct);
    if(sct>=400 && sct<=2400){
        $(".video_bg").css({
            clipPath:"circle("+ value +"px at center center )"
        })
    }
    
    else if(sct>2400 && sct<=3600){
        $(".video_bg").css({
            clipPath:"circle("+ val2+"px at center center )"
        })
    }
    if(ww>1440){

    // ------------------------------------------ --------우주선이동
    if(sct>=100 && sct<200){
        $(".main_ufo").css({
            width: '247px',
            height: '157px',
            left:'10vw',
            top:'10vw',
            rotate:"40deg"
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/pTXkpvrT/ufo-2.png")
        $(".s_box").css({display: "none"})
        $(".video_bg").css({
            clipPath:"circle(0px at center center )"
        });
    }
    else if(sct<100){
        $(".main_ufo").css({
            width: '207px',
            height: '137px',
            left:'5vw',
            top:'5vw',
            rotate:"-10deg"
        },500)
        $(".main_ufo_img").attr("src","https://i.postimg.cc/pTXkpvrT/ufo-2.png")
        $(".s_box").css({display: "none"})
        $(".video_bg").css({
            clipPath:"circle(0px at center center )"
        });
    }
    if(sct>=200 && sct<300){
        $(".main_ufo").css({
            width: '397px',
            height: '227px',
            left:'15vw',
            top:'20vw',
            rotate:"30deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/Prg41c2t/ufo-3.png");
        $(".s_box").css({display: "none"});
        $(".video_bg").css({
            clipPath:"circle(0px at center center )"
        });
    }
    if(sct>=300 && sct<400){
        $(".main_ufo").css({
            width: '447px',
            height: '247px',
            left:'20vw',
            top:'30vw',
            rotate:"20deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/VvRSGKCH/ufo-4.png");
        $(".s_box").css({display: "none"});
    }
    if(sct>=400 && sct<500){
        $(".main_ufo").css({
            width: '347px',
            height: '227px',
            left:'25vw',
            top:'20vw',
            rotate:"30deg",
        });
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png");
        $(".s_box").css({display: "none"});
    }
    if(sct>=500 && sct<600){
        $(".main_ufo").css({
            width: '247px',
            height: '157px',
            left:'30vw',
            top:'10vw',
            rotate:"40deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box").css({display: "none"})
    }
    if(sct>=600 && sct<700){
        $(".main_ufo").css({
            width: '207px',
            height: '137px',
            left:'35vw',
            top:'15vw',
            rotate:"50deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box").css({display: "none"})
    }
    if(sct>=700 && sct<800){
        $(".main_ufo").css({
            width: '157px',
            height: '107px',
            left:'42vw',
            top:'20vw',
            rotate:"30deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box").css({display: "none"})
    }
    if(sct>=800 && sct<900){
        $(".main_ufo").css({
            width: '147px',
            height: '87px',
            left:'50vw',
            top:'15vw',
            rotate:"35deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/VvRSGKCH/ufo-4.png")
        $(".s_box").css({display: "none"})
    }
    if(sct>=900 && sct<1000){
        $(".main_ufo").css({
            width: '217px',
            height: '137px',
            left:'55vw',
            top:'15vw',
            rotate:"35deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/mgcDCL8n/ufo-5.png")
        $(".s_box").css({display: "none"})
    }
    //------------------------------------------텍스트 나타남
    if(sct>=1000 && sct<1100){
        $(".main_ufo_2").css({
            width: '700px',
            height: '600px',
            left:'50%',
            // marginLeft:'50px',
            top:'5vw',
            rotate:"55deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/cHW4pQ0q/ufo-light.png")
        $(".s_box1").fadeIn(500);
        $(".s_box2").hide(1500);
        $(".s_box3").hide(1500);
    }
    if(sct>=1200 && sct<1300){
        $(".main_ufo_2").css({
            width: '207px',
            height: '137px',
            left:'60vw',
            top:'15vw',
            rotate:"35deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box1").hide(1500);
        $(".s_box2").hide(1500);
        $(".s_box3").hide(1500);
    }
    if(sct>=1300 && sct<1400){
        $(".main_ufo_2").css({
            width: '207px',
            height: '137px',
            left:'50vw',
            top:'20vw',
            rotate:"15deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box1").hide(1500);
        $(".s_box2").hide(1500);
        $(".s_box3").hide(1500);
    }
    if(sct>=1400 && sct<1500){
        $(".main_ufo_2").css({
            width: '347px',
            height: '227px',
            left:'30vw',
            top:'15vw',
            rotate:"-20deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/hjVQxDPn/ufo-1.png")
        $(".s_box1").hide(1500);
        $(".s_box2").hide(1500);
        $(".s_box3").hide(1500);
    }
    if(sct>=1500 && sct<1600){
        $(".main_ufo_2").css({
            width: '800px',
            height: '680px',
            left:'10vw',
            top:'5vw',
            rotate:"-30deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/cHW4pQ0q/ufo-light.png")
        $(".s_box1").hide(1500);
        $(".s_box2").fadeIn(1500);
        $(".s_box3").hide(1500);
    }
    if(sct>=1800 && sct<1900){
        $(".main_ufo_2").css({
            width: '355px',
            height: '227px',
            left:'30vw',
            top:'8vw',
            rotate:"-10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/mgcDCL8n/ufo-5.png")
        $(".s_box1").hide(1000);
        $(".s_box2").hide(1000);
        $(".s_box3").hide(1000);
    }
    if(sct>=1900 && sct<2000){
        $(".main_ufo_2").css({
            width: '300px',
            height: '200px',
            left:'35vw',
            top:'5vw',
            rotate:"10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/VvRSGKCH/ufo-4.png")
        $(".s_box1").hide(1500);
        $(".s_box2").hide(1500);
        $(".s_box3").hide(1500);
    }
    if(sct>=2000 && sct<2100){
        $(".main_ufo_2").css({
            width: '260px',
            height: '157px',
            left:'50%',
            top:'5vw',
            marginLeft:'-130px',
            rotate:"10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/Prg41c2t/ufo-3.png")
        $(".s_box1").hide(1500);
        $(".s_box2").hide(1500);
        $(".s_box3").hide(1500);
    }
    if(sct>=2100 && sct<2200){
        $(".main_ufo_2").css({
            width: '347px',
            height: '227px',
            left:'50%',
            top:'10vw',
            marginLeft:'-173.5px',
            rotate:"10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/pTXkpvrT/ufo-2.png")
        $(".s_box1").hide(1500);
        $(".s_box2").hide(1500);
        $(".s_box3").hide(1500);
    }
    if(sct>=2200 && sct<2300){
        $(".main_ufo_2").css({
            width: '397px',
            height: '247px',
            left:'50%',
            top:'15vw',
            marginLeft:'-198.5px',
            rotate:"10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/pTXkpvrT/ufo-2.png")
        $(".s_box1").hide(1500);
        $(".s_box2").hide(1500);
        $(".s_box3").hide(1500);
    }
    if(sct>=2300 && sct<2400){
        $(".main_ufo_2").css({
            width: '900px',
            height: '800px',
            left:'50%',
            top:'8vw',
            marginLeft:'-450px',
            rotate:"10deg",
        })
        $(".main_ufo_img").attr("src","https://i.postimg.cc/FzfyLgSd/ufo-light-3.png")
        $(".s_box1").hide(1500);
        $(".s_box2").hide(1500);
        $(".s_box3").show(1500);
    }
    // -----------------------------------------------------------로켓
    if(sct>=3600 && sct<3800){

        $('.roket_box').animate({
            left:'-1400px',
            scale:1,
            top: '100px'
        },500,function(){
            $('.con_box').fadeIn(500)
        })
        $(".video_bg").css({
            clipPath:"circle(0px at center center )"
        })
    }
    if(sct>=4000 && sct<4100){

        $('.roket_box').animate({
            left:'10%',
            scale:0.9,
            top: '20vw'
        },500,function(){
            $('.con_box').fadeOut(500)
        })
        $(".video_bg").css({
            clipPath:"circle(0px at center center )"
        })
    }
    
    // ------------------------------------------프로젝트
    if(sct>=4600 && sct<5700){

        $('.bg_img3').css({
            position: 'fixed',
        })
        
        if(sct>=4700 && sct<4800){
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
        if(sct>=4800 && sct<4900){
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
        if(sct>=4900 && sct<5000){
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
        if(sct>=5000 && sct<5100){
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
        if(sct>=5100 && sct<5200){
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
                top:'1000px',
                marginLeft: "-485px"
            })
        }
        if(sct>=5200 && sct<5600){
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
        if(sct>=5700 && sct<6600){
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
        if(sct>=6600 && sct<7500){
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
        if(sct>=7500 && sct<8400){
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
        if(sct>=8400 && sct<9300){
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
        if(sct>=9900 && sct<10000){
            $('.vd_title').animate({
                width:'500px',
                marginLeft:'-250px',
                fontSize: '2vw',
                fontWeight: 400
            },function(){
                    $('.sub_wrap').css({
                        transform: 'scaleX(0.003) scaleY(0.2)',
                    })
                })
                $('.vd_menu').css({
                    transform: 'rotate(90deg)',
                    top:"100px",
                })
        }
        if(sct>=10000 && sct<10100){
            $('.vd_title').animate({
                width:'900px',
                marginLeft:'-450px',
                fontSize: '3vw',
                fontWeight: 600
            },function(){
                $('.sub_wrap').css({
                    transform: 'scaleX(0.005) scaleY(0.5)',
                })
            })
            $('.vd_menu').css({
                transform: 'rotate(90deg)',
                top:"100px",
            })
            $('.vd_title').fadeIn(500)
            $('.swiper').fadeOut(300)
        }
        if(sct>=10100 && sct<10200){
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
        if(sct>=10300 && sct<10900){
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
                left:'50%',
                top:'0px',
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





// ---------------------------------------------스와이퍼

const swiper = new Swiper('.mySwiper', {
    grabCursor:true,
    slidesPerView:'auto',
    direction: 'horizontal',
    loop: true,
    centeredSlides:true,
    effect:'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch:100,
        depth:500,
        modifier: 1,
        slideShadows: true,
        },
        autoplay:{
            delete:700,
            disableOnInteraction:true
        }
    });


// --------------------------리사이즈
    $(window).resize(function(){
        main_layout();
        // sectiongroup_init();
        // setTimeout(function(){
        //     $("#f5").click();
        // },100)
        history.go() 
    })



    // 지우지마
})
