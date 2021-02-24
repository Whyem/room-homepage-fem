var current_index = 0;
var h1s = ["Discover innovative ways to decorate","We are available all across the globe","Manufactured with the best materials"];
var ps = ["Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        ];
var device = "desktop";

$(document).ready(function(){
    
    $(window).resize(function() {
        var link = $(".article__image").attr("src");

        if (window.matchMedia('(max-width: 376px)').matches) {
            device = "mobile";
        }
        else{
            device = "desktop";
        }
        $(".article__image").attr("src","images/"+device+"-image-hero-"+String(Math.abs((current_index % 3)+ 1 ))+".jpg");
    });

    $(".next").click(function(){
        current_index += 1;
        var article_id = current_index % 3;
        displayArticle(Math.abs(article_id));
    });

    $(".previous").click(function(){
        current_index -= 1;
        var article_id = current_index % 3;
        displayArticle(Math.abs(article_id));
    });

    $(".burger").click(function(){
        $(".header_mobile_links").addClass("fade-in");
        $(".overlay").addClass("fade-in");
        $("body").addClass("noscroll");        
    });

    $(".close").click(function(){
        $(".header_mobile_links").removeClass("fade-in");
        $(".overlay").removeClass("fade-in");
        $("body").removeClass("noscroll");
    });

});

function displayArticle(i){
    $("#title").text(h1s[i]);
    $("#desc").text(ps[i]);

    $(".article__image").attr("src","images/"+device+"-image-hero-"+String(i+1)+".jpg");
    

    var textWrapperH1 = document.querySelector('#title');
    textWrapperH1.innerHTML = textWrapperH1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    var text_animation = anime.timeline({loop: false})
                            .add({
                                    targets: '#desc',
                                    opacity: [1,0]
                                    })
                                .add({
                                    targets: '#title',
                                    opacity: [0,1],
                                    easing: "easeOutExpo",
                                    duration: 300,
                                    //delay: (el, i) => 200 + 30 * i
                                    }).add({
                                        targets: '#desc',
                                        opacity: [0,1],
                                        easing: "easeOutExpo",
                                        duration: 300,
                                        delay: (el, i) => 300 + 30 * i
                                        });

    var image_animation = anime.timeline({loop: false})
                            .add({
                            targets: '.article__image',
                            opacity: [0,1],
                            easing: "easeOutExpo",
                            duration: 1200
                                });

    image_animation.restart();
    text_animation.restart();
}