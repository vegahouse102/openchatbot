function messege(button_text, func, after_buttons) {
    this.button_text = button_text;
    this.func = func;
    this.after_buttons = after_buttons;
}
function bread(name, price, img_address) {
    this.name = name;//0한국어 1외국어
    this.price = price;
    this.img_address = img_address;
}
function brand(name, address, img_address,site_address) {
    this.name = name;
    this.address = address;
    this.img_address = img_address;
    this.site_address = site_address;
}
const breads = [
    new bread("보문산메아리", "6,000원", "img/breads/보문산메아리.jpg"),
    new bread("튀김소보로", "1,700원", "img/breads/튀김소보로.png"),
    new bread("명란바게트", "3,800원", "img/breads/명란바게트.png"),
    new bread("작은메아리", "3,000원", "img/breads/작은메아리.jpg"),
    new bread("토요빵", "3,800원", "img/breads/토요빵.png"),
    new bread("단팥빵", "1,700원", "img/breads/단팥빵.png"),
    new bread("소보로", "1,300원", "img/breads/소보로.jpg"),
    new bread("팡오레", "2,000원", "img/breads/팡오레.jpg"),

    new bread("초코튀소", "2,000원", "img/breads/초코튀소.jpg"),
    new bread("판타롱부추빵", "2,000원", "img/breads/판타롱부추빵.png"),
    new bread("월넛브레드", "4,000원", "img/breads/월넛브레드.png"),
    new bread("빅매치", "2,300원", "img/breads/빅매치.jpg"),
    new bread("교황님의 치즈스콘", "4,000원", "img/breads/교황님의 치즈스콘.jpg")
];
const brands = [
    new brand("성심당 본점", '대전광역시 중구 대종로 <br>480번길 15 (은행동 145)', "img/brands/성심당본점.JPG",'https://www.sungsimdang.co.kr/31/15'),
    new brand("성심당 케익부띠끄", '대전광역시 중구 대종로 480', "img/brands/성심당 케익부띠끄.JPG",'https://www.sungsimdang.co.kr/31/16'),
    new brand("성심당 DCC점", '대전광역시 유성구 엑스포로107<br>(도룡동 4-19) 대전컨벤션센터1F', "img/brands/성심당 DCC점.JPG",'https://www.sungsimdang.co.kr/31/17'),
    new brand("성심당 롯데백화점 대전점", '대전광역시 서구 계룡로 598', "img/brands/성심당 롯데백화점.JPG",'https://www.sungsimdang.co.kr/31/18'),
    new brand("성심당 대전역점", '대전광역시 동구 중앙로 215', "img/brands/성심당 대전역점.JPG",'https://www.sungsimdang.co.kr/31/19'),
    new brand("성심당 옛맛솜씨", '대전광역시 중구 대종로 480길 14', "img/brands/성심당 옛맛 솜씨.JPG",'https://www.sungsimdang.co.kr/31/24'),
    new brand("성심당문화원", '대전광역시 중구 중교로73번길 11', "img/brands/성심당문화원.JPG",'https://www.sungsimdang.co.kr/31/26'),
    new brand("테라스키친", '대전광역시 중구 대종로480번길 15, 2F', "img/brands/테라스키친.JPG",'https://www.sungsimdang.co.kr/31/20'),
    new brand("플라잉팬", '대전광역시 중구 대종로 480 2F', "img/brands/플라잉팬.JPG",'https://www.sungsimdang.co.kr/31/21'),
    new brand("우동야", '대전광역시 중구 대종로480번길 15<br> 지하상가 D가-22', "img/brands/우동야.JPG",'https://www.sungsimdang.co.kr/31/22'),
    new brand("삐아또", '대전광역시 중구 중앙로156번길 28', "img/brands/삐아또.JPG",'https://www.sungsimdang.co.kr/31/23'),
    new brand("오븐스토리", '대전 중구 대종로 605 1F', "img/brands/오븐스토리.JPG",'https://www.sungsimdang.co.kr/31/25')
];
var tree = [
    new messege(
        "처음부터",
        function (bot_content){
            var result = document.createElement('div');
            result.innerHTML = "안녕하세요, 성심당입니다.<br><br> <strong>​운영시간</strong><br> 평일 10:00~18:00<br> - 점심시간(12:00~13:00) 제외 <br>- 주말,공휴일 휴무 <br><br>문의 사항을 아래에서 선택해주세요.";
            bot_content.appendChild(result);
            var result = document.createElement('div');
            bot_content.appendChild(result);
        }
        , [1, 2, 3, 4,5]
    ),
    new messege(
        "인기메뉴",
        (bot_content) => {
            var best = [0, 1, 2, 3, 4];
            var result = document.createElement('div');
            var tmp = document.createElement('div');
            tmp.innerHTML = "베 스 트";
            tmp.style.marginBottom = "2rem";
            result.appendChild(tmp);

            var bot_scroll = document.createElement('div');
            bot_scroll.style.height = "20rem";
            bot_scroll.style.paddingRight = "0.2rem";
            for (var i = 0; i < best.length; i++) {
                var _bread = bread_box(breads[best[i]]);
                if (i % 2 == 0) {
                    _bread.style.backgroundColor = "#FFE8B9";
                } else {
                    _bread.style.backgroundColor = "#FFFFFF";
                }
                bot_scroll.appendChild(_bread);
                if (i != best.length - 1) {
                    tmp = document.createElement('hr');
                    bot_scroll.appendChild(tmp);
                }
            }
            result.appendChild(bot_scroll);
            result.style.width = '15rem';
            result.style.paddingBottom = '1.5rem';
            bot_content.appendChild(result);
        },
        [0]
    ),
    new messege(
        "전체메뉴",
        (bot_content) => {

            var result = document.createElement('div');
            var content = document.createElement('div');
            content.innerHTML = "전 체 메 뉴";
            content.style.marginBottom = "2rem";
            result.appendChild(content);

            var content_scroll = document.createElement('div');
            content_scroll.classList.add('hidden-scroll');
            content_scroll.style.overflow = "scroll";
            content_scroll.style.height = "20rem";
            content_scroll.style.paddingRight = "0.2rem";

            for (var i = 0; i < breads.length; i++) {
                var _bread = bread_box(breads[i]);
                if (i % 2 == 0) {
                    _bread.style.backgroundColor = "#FFE8B9";
                } else {
                    _bread.style.backgroundColor = "#FFFFFF";
                }
                content_scroll.appendChild(_bread);
                if (i != breads.length - 1) {
                    content_scroll.appendChild(document.createElement('hr'));
                }
                result.appendChild(content_scroll);
            }
            result.style.width = '15rem';
            bot_content.appendChild(result);
        },
        [0]
    ),
    new messege(
        "성심당의 역사",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = "성심당은 1956년에 설립되었으며, 국내에서 가장 오래된 빵집 중 하나로 알려져 있습니다. ";
            result.style.maxWidth = "15rem";
            bot_content.appendChild(result);
            var result = document.createElement('div');
            result.innerHTML = "성심당 창업주 故임길순·故한순덕 부부는 함경남도 함주 고향으로 1950년 한국전쟁 중 흥남부두 철수작전 마지막 피난민을 싣은 메러디스빅토리호에 기적적으로 몸을 싣어, 잠시 거제도에 머문 뒤 진해에 정착했습니다. ";
            result.style.maxWidth = "15rem";
            bot_content.appendChild(result);
            var result = document.createElement('div');
            result.innerHTML = "이후 서울로 이주하고자 열차를 타고 이동하던 중 열차 고장으로 의도치 않게 대전에 머물게 되었고 대흥동성당에서 원조 받은 밀가루 두 포대로 대전역 앞에서 찐빵집을 시작해 오늘날의 성심당이 되었습니다.";
            result.style.maxWidth = "15rem";
            bot_content.appendChild(result);
            result.style.maxWidth = "15rem";
        },
        [0]
    ),
    new messege(
        "매장 위치",
        (bot_content) => {
            var result = document.createElement('div');
            var tmp = document.createElement('div');
            tmp.innerHTML = "매 장 위 치";
            tmp.style.marginBottom = "2rem";
            result.appendChild(tmp);

            var content_scroll = document.createElement('div');
            content_scroll.classList.add('hidden-scroll');
            content_scroll.style.overflow = "scroll";
            content_scroll.style.height = "20rem";
            content_scroll.style.width = "15rem";
            content_scroll.style.paddingRight = "0.2rem";

            for (var i = 0; i < brands.length; i++) {
                var _brand;
                if (i % 2 == 0) {
                    _brand = brand_box(brands[i],0);
                } else {
                    _brand = brand_box(brands[i],1);
                }
                content_scroll.appendChild(_brand);
                if (i != brands.length - 1) {
                    content_scroll.appendChild(document.createElement('hr'));
                }
            }
            result.appendChild(content_scroll);
            result.addEventListener('click', (e) => {
                console.log('sssss');
            });
            result.classList.add('adsf');
            bot_content.appendChild(result);
        },
        [0]
    ),

    new messege(
        "매장내 지도",
        (bot_content) => {
            
        },
        [0]
    ),
    new messege(
        "주차장 위치",
        (bot_content) => {
            
        },
        [0]
    )
];