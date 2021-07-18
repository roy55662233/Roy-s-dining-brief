//------------------------------
//此方法用亂數的部分 會用到相同的圖片

// $(document).ready(function () {
//     setInterval(function () {
//         var imgArr = ["", "", ""];
//         var img = parseInt(Math.random() * (imgArr.length) + 1);

//         console.log(img)
//         $(".topBlock").css("background-image", `url("../img/food${img}.jpg ")`);
//     }, 2000);
// });
//----------------------------------------------------------------

//topImg依照順序變換
window.onload = function () {
    var imgs = ["./img/food0.jpg", "./img/food1.jpg", "./img/food2.jpg", "./img/food3.jpg", "./img/food4.jpg", "./img/food5.jpg"];
    var i = 0;
    var head = document.getElementById("topImg");
    head.style.backgroundImage = "url(./img/food0.jpg)";
    function time() {
        i++;
        i = i % 5;
        head.style.background = "url(" + imgs[i] + ")";
    }
    setInterval(time, 2000);
}
//----------------------------------------------------------------
//用jq方式將按鈕以scrollTop 滑動的方法所設定的ID
$(function () {
    $("#btnNoodle").click(function () {
        $("html, body").animate({
            scrollTop: $("#myNoodle").offset().top
        }, { duration: 300, easing: "swing" });
        return false;
    });
});

$(document).ready(function () {
    $("#btnBar").click(function () {
        $("html, body").animate({
            scrollTop: $("#myBar").offset().top
        }, { duration: 300, easing: "swing" });
        return false;
    });
});


$(document).ready(function () {
    $("#btnSpicypot").click(function () {
        $("html, body").animate({
            scrollTop: $("#mySpicypot").offset().top
        }, { duration: 300, easing: "swing" });
        return false;
    });
});

$(document).ready(function () {
    $("#btnText").click(function () {
        $("html, body").animate({
            scrollTop: $("#myText").offset().top
        }, { duration: 300, easing: "swing" });
        return false;
    });
});

//------------------------------------------------------
//按下GoTop按鈕時的事件以scrollTop到網頁最上面
$(function () {
    $('#goTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
});

//在最上面的時候 圖片會消失
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#goTop').fadeIn();
    } else {
        $('#goTop').fadeOut();
    }
});


//點擊顯示更多,下面文字會出現

var i = 0;
function changeText1(e) {
    var show = document.getElementById("btnHidden1");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";

    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }
    console.log(i);
}


function changeText2(e) {
    var show = document.getElementById("btnHidden2");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText3(e) {
    var show = document.getElementById("btnHidden3");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText4(e) {
    var show = document.getElementById("btnHidden4");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText5(e) {
    var show = document.getElementById("btnHidden5");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText6(e) {
    var show = document.getElementById("btnHidden6");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText7(e) {
    var show = document.getElementById("btnHidden7");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText8(e) {
    var show = document.getElementById("btnHidden8");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText9(e) {
    var show = document.getElementById("btnHidden9");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText10(e) {
    var show = document.getElementById("btnHidden10");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText11(e) {
    var show = document.getElementById("btnHidden11");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText12(e) {
    var show = document.getElementById("btnHidden12");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText13(e) {
    var show = document.getElementById("btnHidden13");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText14(e) {
    var show = document.getElementById("btnHidden14");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText15(e) {
    var show = document.getElementById("btnHidden15");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

function changeText16(e) {
    var show = document.getElementById("btnHidden16");
    if (i <= 1) {
        document.getElementById(e).style.visibility = 'visible';
        i = i + 1;
        show.innerHTML = "【點擊隱藏】";
        console.log(i);
    }
    if (i == 2) {
        document.getElementById(e).style.visibility = 'hidden';
        i = 0;

        show.innerHTML = "【點擊顯示更多】";
    }

}

// function changeText1() {
//     var show1 = document.getElementById("btnHidden2");
//     var hide1 = document.getElementById("hiddle2");
//     if (hide1.style.display === "none") {
//         hide1.style.display = 'block';
//         show1.innerText = "【點擊隱藏】";
//     }
//     else {
//         hide1.style.display = 'none';
//         show1.innerText = "【點擊顯示更多】";
//     }
// }

