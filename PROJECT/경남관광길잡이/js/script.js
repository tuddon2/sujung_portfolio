
let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.opacity=1
        }
        // else{
            // box.target.style.opacity=0
        // }
        
    })
})

let g_box=document.querySelectorAll(".g_box")
observer.observe(g_box[0])
observer.observe(g_box[1])
observer.observe(g_box[2])
observer.observe(g_box[3])
observer.observe(g_box[4])


function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'ko'
          , includedLanguages: 'en,ja,ko,zh-CN,zh-TW'
        //   , layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL // none or HORIZONTAL, SIMPLE
        }
      , 'google_translate_element'
    );
}

