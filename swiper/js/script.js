/**
 * Created by lenovo on 17/12/5 005.
 */
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next'
    },
    loop: true,

//animate动画
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }

});