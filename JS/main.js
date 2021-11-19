$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    startPosition: 4,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true
})  

/*    
//ẩn hiện content của what-we-do
$('.btn-wwd').click(function(){
    $(this).parent().next().toggleClass('active');
})
//mũi tên hướng lên khi click hiển thị nội dung
$('.btn-wwd').click(function(){
    $(this).toggleClass('active');
})
//đóng nội dung cũ khi hiển thị nội dung mới
$('.btn-wwd').click(function(){
    $(this).parent().parent().nextAll().find('.title__text').removeClass('active');
})
*/

//hàm sử lí what-we-do
var bool = true;
if(bool){
    $('.btn-wwd').click(function(){
        $(this).parent().next().toggleClass('active');
        $(this).toggleClass('active');
    })
    bool = false;
}
if(!bool){
    $('.btn-wwd').click(function(){
        $(this).parent().parent().parent().find('.title__text').removeClass('active');
        $(this).parent().parent().parent().find('.btn-wwd').removeClass('active');
        $(this).parent().next().toggleClass('active');
        $(this).toggleClass('active'); 
    })
    bool = true;
}

//slide cho phần note
