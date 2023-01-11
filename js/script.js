// Event when clicked the link
$('.page-scroll').on('click', function(e) {
 //Jquery panggilkan saya element dengan class page-scroll dan dalam kondisi diklik jalankan saya fungsi ini..
 
    //Taken the href
    var dest = $(this).attr('href');
    //Catch element
    var sectionDest = $(dest);
    
    //Moved with animate the scrollTop
    $('body').animate({
        scrollTop: sectionDest.offset().top - 50
    },900, 'easeInOutExpo');
    
    e.preventDefault();
});
//About
$(window).on('load', function(){
    $('.pLeft').addClass('pShowup');
    $('.pRight').addClass('pShowup');
});
//Parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    //Jumbotron
        $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });
    
    //Portfolio
    if(wScroll > $('.portfolio').offset().top -280){
        
        $('.portfolio .thumbnail').each(function(i){
            
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('show-up');
            }, 300 * (i+1));
            
           
            
        });
        
    }
        

});


