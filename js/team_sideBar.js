'use strict'

let data = [
    {
        img: "https://velog.velcdn.com/images/chen4023/post/f84b9ba8-d151-4594-9365-857af684d82f/image.png",
        name: "이다인",
        age: 23,
        mbti: "ISTP",
        hobby: "🎮 게임 | 📒일기 쓰기 | 📺 애니메이션 보기",
        line: "좋은 동료가 됩시다",
        github: "dain391",
        githubUrl: "https://github.com/dain391",

        passion: "100%",
        focus: "80%",
        creativity: "60%",
        confidence: "50%"
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
        confidence: "100%"
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
        confidence: "60%"
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
        confidence: "99%"
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
        confidence: "50%"
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
        confidence: "60%"
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

        $('.focus').text(data[i].focus);
        $('.focus').css("--width", data[i].focus);

        $('.creativity').text(data[i].creativity);
        $('.creativity').css("--width", data[i].creativity);

        $('.confidence').text(data[i].confidence);
        $('.confidence').css("--width", data[i].confidence);
    });

    // 기본값
    $('.teamDiv').eq(0).click();
})
