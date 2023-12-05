// function messege(button_text, func, after_buttons) {
//     this.button_text = button_text;
//     this.func = func;
//     this.after_buttons = after_buttons;
// }
// function bread(name, price, img_address) {
//     this.name = name;//0한국어 1외국어
//     this.price = price;
//     this.img_address = img_address;
// }
// function brand(name, address, img_address, site_address, explain, work_time, phone, naver_location) {
//     this.name = name;
//     this.address = address;
//     this.img_address = img_address;
//     this.site_address = site_address;
//     this.explain = explain;
//     this.work_time = work_time;
//     this.phone = phone;
//     this.naver_location = naver_location;
// }
// const breads = [
//     new bread("보문산메아리", "6,000원", "img/breads/보문산메아리.jpg"),
//     new bread("튀김소보로", "1,700원", "img/breads/튀김소보로.png"),
//     new bread("명란바게트", "3,800원", "img/breads/명란바게트.png"),
//     new bread("작은메아리", "3,000원", "img/breads/작은메아리.jpg"),
//     new bread("토요빵", "3,800원", "img/breads/토요빵.png"),
//     new bread("단팥빵", "1,700원", "img/breads/단팥빵.png"),
//     new bread("소보로", "1,300원", "img/breads/소보로.jpg"),
//     new bread("팡오레", "2,000원", "img/breads/팡오레.jpg"),

//     new bread("초코튀소", "2,000원", "img/breads/초코튀소.jpg"),
//     new bread("판타롱부추빵", "2,000원", "img/breads/판타롱부추빵.png"),
//     new bread("월넛브레드", "4,000원", "img/breads/월넛브레드.png"),
//     new bread("빅매치", "2,300원", "img/breads/빅매치.jpg"),
//     new bread("교황님의 치즈스콘", "4,000원", "img/breads/교황님의 치즈스콘.jpg")
// ];
// const brands = [
//     new brand("성심당 본점", '대전광역시 중구 대종로 480번길 15 (은행동 145)', "img/brands/성심당 본점.JPG", 'https://www.sungsimdang.co.kr/31/15'
//         , "대전역 앞 작은 찐빵집, 대전의 문화가 되다.", "매일 : 08:00~22:00 / 연중무휴", "1588-8069", "https://map.naver.com/p/entry/place/11871325?placePath=%2Fhome&c=15.00,0,0,0,dh"),
//     new brand("성심당 케익부띠끄", '대전광역시 중구 대종로 480', "img/brands/성심당 케익부띠끄.JPG", 'https://www.sungsimdang.co.kr/31/16', '성심당만의 다양하고 특별한 케익을 만날 수 있는 클래식한 공간', '월화수목금일 : 08:00~21:30 / 토 : 08:00~22:00 / 연중무휴', '1588-8069', 'https://map.naver.com/p/entry/place/35644550?placePath=%2Fhome&c=15.00,0,0,0,dh'),
//     new brand("성심당 DCC점", '대전광역시 유성구 엑스포로107(도룡동 4-19) 대전컨벤션센터1F', "img/brands/성심당 DCC점.JPG", 'https://www.sungsimdang.co.kr/31/17', '대전컨벤션센터를 찾는 세미나. 국제학술대회. 문화행사와 함께 만나는 향토기업 성심당', '1F.빵.매일 : 08:00~22:00 / 1F카페.매일 : 08:00~21:00 / 2F.카페 : 매일 08:00~20:00', '1588-8069', 'https://map.naver.com/p/entry/place/1977855888?placePath=%2Fhome&c=15.00,0,0,0,dh'),
//     new brand("성심당 롯데백화점 대전점", '대전광역시 서구 계룡로 598', "img/brands/성심당 롯데백화점.JPG", 'https://www.sungsimdang.co.kr/31/18', '성심당 시그니쳐 스토어. 케익부띠크. 옛맛솜씨. 카페. 감성충전 오븐스토리(B1)', '매일 : 08:00~22:00 / 연중무휴', '1588-8069', 'https://map.naver.com/p/entry/place/1170663310?placePath=%2Fhome&c=15.00,0,0,0,dh'),
//     new brand("성심당 대전역점", '대전광역시 동구 중앙로 215', "img/brands/성심당 대전역점.JPG", 'https://www.sungsimdang.co.kr/31/19', '밀가루 두 포대로 대전에서 시작된 성심당. 56년만에 대전역에 입점하다.', '매일 : 07:00~22:30 / 연중무휴', '1588-8069', 'https://map.naver.com/p/entry/place/36731468?placePath=%2Fhome&c=15.00,0,0,0,dh'),


//     new brand("성심당 옛맛솜씨", '대전광역시 중구 대종로 480길 14', "img/brands/성심당 옛맛솜씨.JPG", 'https://www.sungsimdang.co.kr/31/24', '성심당의 노스탤지어 감성으로 탄생한 옛맛솜씨는 70년대 옛 정서가 가득한 우리 과자점', '매일 : 09:30~21:00 / 연중무휴', '042-220-4188', 'https://map.naver.com/p/entry/place/1829271382?placePath=%2Fhome&c=15.00,0,0,0,dh'),
//     new brand("성심당문화원", '대전광역시 중구 중교로73번길 11', "img/brands/성심당문화원.JPG", 'https://www.sungsimdang.co.kr/31/26', '성심당의 이념과 대전의 정서를 담은 성심당문화원입니다.', 'Think bread, Thank nature<br>1F˙2F: 메아리상점 / 3F: 메아리라운지 / 4F˙5F: 갤러리라루 / B1: 메아리곳간', '매일 : 09:00~20:30 / 연중무휴', '1588-8069', 'https://map.naver.com/p/entry/place/1068735116?placePath=%2Fhome&c=15.00,0,0,0,dh'),
//     new brand("테라스키친", '대전광역시 중구 대종로480번길 15, 2F', "img/brands/테라스키친.JPG", 'https://www.sungsimdang.co.kr/31/20', '1992년 오픈한 전국 최초 베이커리 레스토랑', '매일 : 08:00~21:30 / 연중무휴', '042-220-4128', 'https://map.naver.com/p/entry/place/16043374?placePath=%2Fhome&c=15.00,0,0,0,dh'),
//     new brand("플라잉팬", '대전광역시 중구 대종로 480 2F', "img/brands/플라잉팬.JPG", 'https://www.sungsimdang.co.kr/31/21', '비즈니스 미팅. 디너코스, 스테이크가 있는 프라이빗 하고 품격있는 성심당 이탈리안 레스토랑', '매일 : 11:00~21:00 / 연중무휴', '042-223-4126', 'https://map.naver.com/p/entry/place/16045148?placePath=%2Fhome&c=15.00,0,0,0,dh'),
//     new brand("우동야", '대전광역시 중구 대종로480번길 15 지하상가 D가-22', "img/brands/우동야.JPG", 'https://www.sungsimdang.co.kr/31/22'
//         , '춤추는 면발로 즐기는 성심당 자가제면 일본식 우동야', '매일 : 10:30~20:00 / 지하상가휴무일(매달3째주 화요일)', '042-220-4131', 'https://map.naver.com/p/entry/place/20601419?placePath=%2Fhome&c=15.00,0,0,0,dh'),


//     new brand("삐아또", '대전광역시 중구 중앙로156번길 28', "img/brands/삐아또.JPG", 'https://www.sungsimdang.co.kr/31/23', '이탈리아 토스카나지방의 따뜻한과 정취가 묻어나는 소박한 파스타전문점', '매일 : 11:00~21:30 / 연중무휴', '042-220-4130', 'https://map.naver.com/p/entry/place/16259064?placePath=%2Fhome&c=15.00,0,0,0,dh'),
//     new brand("오븐스토리", '대전 중구 대종로 605 1F', "img/brands/오븐스토리.JPG", 'https://www.sungsimdang.co.kr/31/25', 'DAEJEON SUNGSIMDANG’S CATERING & PARTY', '연중무휴', '042-220-4112', 'https://map.naver.com/p/entry/place/36519792?placePath=%2Fhome&c=15.00,0,0,0,dh')
// ];
var tree = [
    new messege(
        "처음부터",
        function (bot_content) {
            var result = document.createElement('div');
            result.innerHTML = "안녕하세요, 성심당입니다.<br><br> <strong>​운영시간</strong><br> 평일 10:00~18:00<br> - 점심시간(12:00~13:00) 제외 <br>- 주말,공휴일 휴무 <br><br>문의 사항을 아래에서 선택해주세요.";
            bot_content.appendChild(result);
            var result = document.createElement('div');
        }
        , [1, 2, 3, 4, 5]
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

            for (let i = 0; i < brands.length; i++) {
                var _brand;
                if (i % 2 == 0) {
                    _brand = brand_box(brands[i], 0);
                } else {
                    _brand = brand_box(brands[i], 1);
                }
                _brand.addEventListener("click", (e) => {
                    tree_implement(i + 6, 1);
                });
                content_scroll.appendChild(_brand);
                if (i != brands.length - 1) {
                    content_scroll.appendChild(document.createElement('hr'));
                }
            }
            result.appendChild(content_scroll);
            bot_content.appendChild(result);
        },
        [0]
    ),

    new messege(//5
        "매장내 지도",
        (bot_content) => {
            var result = document.createElement('div');
            result.classList.add('asdf');
            result.innerText = 'asdf';
            result.style.cursor = 'pointer';
            result.addEventListener("click", () => {
                console.log('success');
            });
            bot_content.appendChild(result);
        },
        [0]
    ),

    new messege(
        "성심당 본점",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[0]));
        },
        [0]
    )
    ,
    new messege(
        "성심당 케익부띠끄",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[1]));
        },
        [0]
    ),

    new messege(
        "성심당 DCC점",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[2]));
        },
        [0]
    )
    ,
    new messege(
        "성심당 롯데백화점 대전점",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[3]));
        },
        [0]
    ),
    new messege(
        "성심당 대전역점",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[4]));
        },
        [0]
    )
    ,
    new messege(
        "성심당 옛맛솜씨",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[5]));
        },
        [0]
    ),
    new messege(
        "성심당문화원",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[6]));
        },
        [0]
    )
    ,
    new messege(
        "테라스키친",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[7]));
        },
        [0]
    ),
    new messege(
        "플라잉팬",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[8]));
        },
        [0]
    ),
    new messege(
        "우동야",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[9]));
        },
        [0]
    ),
    new messege(
        "삐아또",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[10]));
        },
        [0]
    ),
    new messege(
        "오븐스토리",
        (bot_content) => {
            bot_content.appendChild(brand_locate(brands[11]));
        },
        [0]
    ),
];