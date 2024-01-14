
// ヘッダーメニューを隠す、表示させる

$(function () {
    var lastScrollTop = 0;
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop && scrollTop > $('#mainvisual').height()) {
            // Down scroll and beyond mainvisual
            $('#header_menu').addClass('hide');
        } else {
            // Up scroll
            $('#header_menu').removeClass('hide');
        }
        lastScrollTop = scrollTop;
    });
});

// スクロールで発火
const scheduleAnime = () => {
    let time = 0.2;
    let value = time;
    let scroll;
    let winH = $(window).height();
    let objTop = $('#about').offset().top;
    $(window).on('scroll', function () {
        scroll = $(window).scrollTop();
        if (scroll >= objTop - winH / 2) {
            //ここに処理
        }
    });
}


// ハンバーガーメニュー

$("#target").click(function () {
    $(this).toggleClass('active');
    if ($("#nav_target").is(":visible")) {
        $("#nav_target").slideUp();
    } else {
        $("#nav_target").slideDown();
    }
});

$("#nav_target a").click(function () {
    $("#target").toggleClass('active');
    $("#nav_target").slideUp();
});

// クラス名.course1_box要素がクリックされたときに発火
$(".course1_box").on("click", (event) => {
    let value = $(event.currentTarget).next();
    value.stop().slideToggle(1500);
    $('#course1_plus').toggleClass('active')
})

$(".course2_box").on("click", (event) => {
    let value = $(event.currentTarget).next();
    value.stop().slideToggle(1500);
    $('#course2_plus').toggleClass('active')
})

$(".course3_box").on("click", (event) => {
    let value = $(event.currentTarget).next();
    value.stop().slideToggle(1500);
    $('#course3_plus').toggleClass('active')
});


$(window).on('load', () => {
    const subtitle = () => {
        var num = Math.floor(10 * Math.random());
        let mainTitle;
        if (num <= 1) {
            mainTitle = "未来のテックプロフェッショナルになるチャンス"
        } else if ((num >= 2) && (num <= 3)) {
            mainTitle = "ウェブの舞台裏を学び、夢のキャリアを実現しよう"
        } else if ((num >= 3) && (num <= 4)) {
            mainTitle = "レイアウトからデザインまで、全てを学べる場所"
        } else if ((num >= 4) && (num <= 5)) {
            mainTitle = "テクノロジーの力でキャリアを形にしましょう"
        } else if ((num >= 5) && (num <= 6)) {
            mainTitle = "テクノロジーの未来を共に切り拓こう"
        } else if ((num >= 6) && (num <= 7)) {
            mainTitle = "キャリアの高みへの始まりを踏み出そう"
        } else if ((num >= 7) && (num <= 8)) {
            mainTitle = "デジタルエキスパートになるためのトレーニングセンター"
        } else if ((num >= 8) && (num <= 9)) {
            mainTitle = "未来のテックリーダーへ道がここに"
        } else if ((num >= 9) && (num <= 10)) {
            mainTitle = "テクノロジーの力でキャリアを形にしましょう"
        } else if (num = 0) {
            mainTitle = "ウェブの世界を創造し、プロフェッショナルに成長する"
        }
        console.log(num);
        return mainTitle;
    }

    const typewriter = (param) => {
        let el = document.querySelector(param.el);
        let speed = param.speed;
        let string = param.string.split("");

        string.forEach((char, index) => {
            setTimeout(() => {
                el.textContent += char;
            }, speed * index);
        });
    };
    typewriter({
        el: "#typewriter",
        speed: 50,
        string: subtitle()
    });
});


// vegas

$(function () {
    $('.vegas').vegas({
        slides: [
            { src: 'img/1.png' },
            { src: 'img/2.png' },
            { src: 'img/3.png' },
            { src: 'img/4.png' },
        ],
        overlay: 'vegas/overlays/01.png', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
        transition: 'fade', //スライドを遷移させる際のアニメーション
        transitionDuration: 4000, //スライドの遷移アニメーションの時間
        delay: 2000, //スライド切り替え時の遅延時間
        animation: 'random', //スライド表示中のアニメーション
        animationDuration: 5000, //スライド表示中のアニメーションの時間
        timer: false
    });
});

// カレンダー
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ja',   //日本語化
        businessHours: true, //土日グレー
        events: 'teru.frontendkouchikuka@gmail.com',
        // events: "ja.japanese.official#holiday@group.v.calendar.google.com", // 日本の祝日カレンダ
        googleCalendarApiKey: 'AIzaSyAoaRzBABxI3Ar2oi32JZkODVZ5F-AQJts'
        // googleCalendarApiKey: "AIzaSyA_xhSbC_z8eW0IbUaq7luOBf2vRfWikso" 		// 日本の祝日カレンダー
    });
    calendar.render();
});
// phind
$(document).ready(function () {
    $('#hamburger-icon').click(function () {
        $(this).toggleClass('open');
        $('#navigation-menu').slideToggle();
    });

    $('#navigation-menu a').click(function () {
        $('#hamburger-icon').removeClass('open');
        $('#navigation-menu').slideUp();
    });
});