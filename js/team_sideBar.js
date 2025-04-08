'use strict'

let data = [
    {
        img: "https://sitem.ssgcdn.com/87/70/47/item/1000026477087_i1_750.jpg",
        name: "김나경",
        age: 25,
        mbti: "INTP",
        hobby: "수영, 퍼즐"
    },

    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "홍길동"
    },

    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "김길동"
    },

    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "이길동"
    },

    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "나길동"
    },

    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "가길동"
    },
];

$(document).ready(function () {
    data.forEach((d) => {
        let html = `
            <div class="teamDiv">
                <div class="teamDiv_img" style="background-image: url('${d.img}');"></div>
                <div>
                    ${d.name}
                </div>
            </div>
        `;
    
        $('#sideBar').append(html);
    });
});


$(document).ready(function () {
    $('.teamDiv').click(function(){
        $(this).addClass('teamActive').siblings().removeClass('teamActive');
    
        let i = $(this).index();
        console.log(data[i]);

        $('#info_name').text(data[i].name);
        $('#info_age').text(data[i].age);
        $('#info_mbti').text(data[i].mbti);
        $('#info_hobby').text(data[i].hobby);
    });

    // 기본값
    $('.teamDiv').eq(0).click();
})
