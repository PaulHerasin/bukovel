
$('.drop-down__btn').on('click', function () {
    $(this).closest('.header__nav-item').toggleClass('header__nav-item--active')

})
$('.header__drop-down-item').on('click', function () {
    $(this).closest('.header__nav-item--active').removeClass('header__nav-item--active')
})

$(document).mouseup(function (e){ // событие клика по веб-документу
    $('.header__nav-item').removeClass('header__nav-item--active')
});