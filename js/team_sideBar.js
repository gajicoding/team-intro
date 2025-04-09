'use strict'

let data = [
    {
        img: "https://velog.velcdn.com/images/chen4023/post/f84b9ba8-d151-4594-9365-857af684d82f/image.png",
        name: "이다인",
        age: 23,
        mbti: "ISTP",
        hobby: "🎮 게임 | 🏕️ 글램핑 | 📺 애니 보기",
        line: "좋은 동료가 됩시다",
        github: "dain391",
        githubUrl: "https://github.com/dain391",

        passion: "100%",
        focus: "80%",
        creativity: "60%",
        confidence: "60%",

        img1:"https://ifh.cc/g/CTsv5p.jpg",
        img2:"https://ifh.cc/g/V1NK7a.jpg",
        img3:"https://ifh.cc/g/CYcdcN.jpg"
    },

    {
        img: "https://www.chosun.com/resizer/v2/7ZPKMNWZZFFODIJ26ETNXN2FDA.jpg?auth=da537d01988a31c1969682f56a067bc2b110cbc8620556603c528495a71ffbc5&width=960&height=1025&smart=true",
        name: "김현수",
        age: 26,
        mbti: "ENTP",
        hobby: "카페☕  |   시 읽기📗  |  식물 키우기☘ ",
        line: "항상 겸손하겠습니다!",
        github: "kinhyunsu",
        githubUrl: "https://github.com/kinhyunsu",

        passion: "80%",
        focus: "65%",
        creativity: "75%",
        confidence: "100%",

        img1:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbdALwM%2FbtsNcvsR71E%2Fi0a0l8bwNJXV3LLevaCjo1%2Fimg.jpg",
        img2:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcwpIyB%2FbtsNeoyUG73%2FIHtYojpmeGqv2yRZkwu8cK%2Fimg.jpg",
        img3:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2UtA7%2FbtsNd7cXzAR%2FjknmkElSYBgHrkOPkYXdnk%2Fimg.jpg"
    },

    {
        img:"https://i.pinimg.com/736x/b4/a1/18/b4a1180668588e702b169d5c87b0e8a7.jpg",
        name: "박민욱",
        age: 29,
        mbti: "INTJ",
        hobby: "기타, jpop, 패션",
        line: "열심히 해봅시다~",
        github: "m1lotic",
        githubUrl: "https://github.com/m1lotic",

        passion: "80%",
        focus: "70%",
        creativity: "80%",
        confidence: "60%",

        img1:"https://teamsparta.notion.site/image/attachment%3Ab9917590-9dcf-4bd8-9f94-98f567f357dd%3AKakaoTalk_20250317_145639825.jpg?table=block&id=1b92dc3e-f514-8075-b2f3-d0f6db491f9b&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1420&userId=&cache=v2",
        img2:"https://teamsparta.notion.site/image/attachment%3A1eeb13b3-b352-438e-bcf8-d0e763a36e88%3AKakaoTalk_20250317_145943077.jpg?table=block&id=1b92dc3e-f514-803b-81b1-cccaddad5f00&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1420&userId=&cache=v2",
        img3:"https://teamsparta.notion.site/image/attachment%3A1d2022e1-7eda-4f0d-bc3c-b3bf74225c9d%3AKakaoTalk_20250317_145445412.jpg?table=block&id=1b92dc3e-f514-8023-af18-ea27735d09ad&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1420&userId=&cache=v2"
    },

    {
        img:"https://theyouthdream.com/files/attach/images/2021/11/22/830237e85e184f4f8ccb25083416b34f.jpg",
        name: "박현정",
        age: 28,
        mbti: "ISTP",
        hobby: "일기쓰기 📝,애니메이션",
        line: "화이팅!!!",
        github: "parkjj0408",
        githubUrl: "https://github.com/parkjj0408",

        passion: "99%",
        focus: "99%",
        creativity: "60%",
        confidence: "99%",

        img1:"C:\Users\SAMSUNG\Desktop\image_20250409_105815579.jpg", 
        img2:"C:\Users\SAMSUNG\Desktop\image_20250409_105733626.jpg", 
        img3:"C:\Users\SAMSUNG\Desktop\image_20250409_105815579.jpg"
    },

    {
        img: "https://image.chosun.com/sitedata/image/201812/04/2018120400079_0.jpg",
        name: "최태웅",
        age: 25,
        mbti: "INTP",
        hobby: "🎮 게임 | 💸 투자 | 🍽️ 맛집탐방",
        line: "파이팅팅팅팅팅팅~~!~",
        github: "taeung515",
        githubUrl: "https://github.com/taeung515",

        passion: "80%",
        focus: "70%",
        creativity: "90%",
        confidence: "50%",

        img1:"https://cgeimage.commutil.kr/phpwas/restmb_allidxmake.php?pp=002&idx=3&simg=20200624120640010583cf949c6b9123811052.jpg&nmt=27",
        img2:"https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202504/08/kedbiz/20250408132504071cgfm.jpg",
        img3:"https://ugc-images.catchtable.co.kr/rv/sbNYNcEUby1Zryfu6X5hsnQ/627b47b230d948ad953fa900c6f5993e"
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0h8zetbtWGuiH3LwJW6oFszupZu1EAdxPoxLc43dfi0TUzKdWde7U4LKdSOocTPwt4D0&usqp=CAU",
        name: "김나경",
        age: 25,
        mbti: "INTP",
        hobby: "수영 🏊 | 퍼즐 🧩 | 산책",
        line: "아자아자자 !!!",
        github: "gajicoding",
        githubUrl: "https://github.com/gajicoding",

        passion: "100%",
        focus: "100%",
        creativity: "80%",
        confidence: "60%",

        img1:"https://lh3.googleusercontent.com/pw/AP1GczNUoEfB0UsXXGrUW_AYfPduonfHeVlkm71lX-hPrlUEci58ZUX7jduiCgxCD47lkH79Ic1a07SL39N0dJNL31n5XbUJf40VlyL53xlb9Av06kGnhuYT9KHgvjRKTetD7wsNLEz25Lg_F1a5IowNLlM=w800-h449-s-no-gm",
        img2:"https://lh3.googleusercontent.com/pw/AP1GczOUt0AXyT_bFU2lADrMzernfvvBtUDd3pCIXtrxyh1VIjvrUJU1CxZI30VH9R7kJLYSJLYONlDz_2br70ycFIehmW-KJX-Pg7DgSDnKxsNmDffO8Bj0XlODi80JwwyOfrVhujuznzBZ1eI3a5VJzAA=w1280-h720-s-no-gm",
        img3:"https://lh3.googleusercontent.com/pw/AP1GczNTRZbh__hplW35m5kSLvAw-ZBtY39netJyREVDgreXueFIH5ARTrSbDX75-h4K57c0S01Ol6hUhAazoM7jU-QC2uUVDlK03mRgoDT0AenEK-GSniS83G7KyycPszoGuzAXp6XV5fN2Xx9pRYpXcjY=w1080-h607-s-no-gm?authuser=0"
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
        $('#info_line').text(data[i].line);
        $('#info_github').text(data[i].github);
        $('#info_github').attr("href", data[i].githubUrl);
        
        $('.passion').text(data[i].passion);
        $('.passion').css("--width", data[i].passion);
        $('.passion').removeClass("fill-animation");
        void $('.passion')[0].offsetWidth;
        $('.passion').addClass("fill-animation");

        $('.focus').text(data[i].focus);
        $('.focus').css("--width", data[i].focus);
        $('.focus').removeClass("fill-animation");
        void $('.focus')[0].offsetWidth;
        $('.focus').addClass("fill-animation");

        $('.creativity').text(data[i].creativity);
        $('.creativity').css("--width", data[i].creativity);
        $('.creativity').removeClass("fill-animation");
        void $('.creativity')[0].offsetWidth;
        $('.creativity').addClass("fill-animation");

        $('.confidence').text(data[i].confidence);
        $('.confidence').css("--width", data[i].confidence);
        $('.confidence').removeClass("fill-animation");
        void $('.confidence')[0].offsetWidth;
        $('.confidence').addClass("fill-animation");

        $('#flick-img1').css({'background-image': `url('${data[i].img1}')`,'background-size': '384px 200px', 'background-repeat': 'no-repeat'})
        $('#flick-img2').css({'background-image': `url('${data[i].img2}')`,'background-size': '384px 200px','background-repeat': 'no-repeat'})
        $('#flick-img3').css({'background-image': `url('${data[i].img3}')`,'background-size': '384px 200px','background-repeat': 'no-repeat'})

        // $('#flick-img1').attr('src', data[i].img1);
        // $('#flick-img2').attr('src', data[i].img2);
        // $('#flick-img3').attr('src', data[i].img3);

    });

    // 기본값
    $('.teamDiv').eq(0).click();
})
