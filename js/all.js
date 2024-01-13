// 捲動時header背景色改變/LOGO變小
const navbar = document.querySelector(".header");
const logo = document.querySelector(".header .logo img");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
        logo.style.maxWidth = "100px";
    } else {
        navbar.classList.remove("scrolled");
        logo.style.maxWidth = "180px";
    }
});



// 點選漢堡後自動顯示menu(JS寫法)
// document.getElementById('mymenu').addEventListener('click', function () {
//     var navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('menued');
//     navbar.classList.remove('closed');
// });

// document.getElementById('close').addEventListener('click', function () {
//     document.querySelector('.navbar').classList.toggle('closed');
// });










$(document).ready(function () {

    // 選單預設和點擊樣式
    // 在css要特別設一個.active的樣式，例如  .my-navbar .nav-link.active
    $('.overline').click(function () {
        // 移除之前的活動類別
        $('.overline').removeClass('active');
        // 添加當前點擊的菜單項的活動類別
        $(this).addClass('active');
    });



    // 點選漢堡後自動顯示menu
    $('#mymenu').on('click', function (event) {
        var navbar = $('.navbar');
        navbar.toggleClass('menued').removeClass('closed');
        event.stopPropagation();
    });

    $('#close').on('click', function () {
        $('.navbar').toggleClass('closed');
    });


    // 點選項目後自動收合
    $(".navbar a").click(function () {
        hideOverlay();
    });

    function hideOverlay() {
        $(".navbar").addClass("closed").removeClass("menued");
    }

    // 初始化時調整一次
    adjustMiddleHeight();





});









