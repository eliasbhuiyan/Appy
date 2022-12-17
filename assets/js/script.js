
      let main_menu = document.querySelector('.main_menu')

      window.addEventListener('scroll',function(){
        let scrolling =this.window.scrollY;
        if(scrolling > 0){
          main_menu.classList.add('menu_fixed');
        }else{
          main_menu.classList.remove('menu_fixed');
        }
      })
      let go_top = document.querySelector('.go_top');
      
      go_top.addEventListener('click',function(){
        window.scrollTo({
          top:0
        })
      })
      window.addEventListener('scroll',function(){
        let scrolling =this.window.scrollY;
        if(scrolling > 400){
          go_top.classList.add('go_fixed');
        }else{
          go_top.classList.remove('go_fixed');
        }
      })
      
      $(function(){
        AOS.init({
          duration: 10000,
          once: true,
        });
      })

      new VenoBox({
        selector: '.my-video-links',
    });


      $('.test_slide').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          arrows: false,
          dots: true,
            infinite: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
             
            ]
          });


      
        $('.ss_slide_item').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            dots: false,
            prevArrow: '<i class="fa-solid fa-chevron-left prv_arr"></i>',
            nextArrow:'<i class="fa-solid fa-chevron-right nxt_arr"></i>',
          });
   
    
    $(function(){

      $(".counter1").countMe(200,400);
      $(".counter2").countMe(3000,0);
      $(".counter3").countMe(2000,55);
      $(".counter4").countMe(2000,8);
     
    })
   
      $('.team_slide').slick({
          slidesToShow: 4,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          dots: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
           
          ]
        });


    $('.blog_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       
      ]
    });


 