'use strict'

let data = [
    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "홍길동"
    },

    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "홍길동"
    },

    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "홍길동"
    },

    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "홍길동"
    },

    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "홍길동"
    },

    {
        img: "https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg",
        name: "홍길동"
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
    });

    // 기본값
    $('.teamDiv').eq(0).click();
})
