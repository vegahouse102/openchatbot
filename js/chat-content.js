var tree = [
    new messege(
        "처음부터",
        function (bot_content) {
            var result = document.createElement('div');
            result.innerHTML = "안녕하세요, 성심당입니다.<br><br> <strong>상담원 연결시간 </strong><br> 평일 10:00~18:00<br> - 점심시간(12:00~13:00) 제외 <br>- 주말,공휴일 휴무 <br><br>문의 사항을 아래에서 선택해주세요.";
            bot_content.appendChild(result);
            var result = document.createElement('div');
        }
        , [1, 2, 3, 4, 5,42]
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
            for (let i = 0; i < best.length; i++) {
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
                _bread.addEventListener('click', (e) => {
                    tree_implement(best[i] + 18, 1);
                });
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

            for (let i = 0; i < breads.length; i++) {
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
                _bread.addEventListener('click', (e) => {
                    tree_implement(i + 18, 1);
                });
            }
            result.appendChild(content_scroll);
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

            tmp = document.createElement('div');
            var content_scroll = document.createElement('div');
            content_scroll.classList.add('hidden-scroll');
            content_scroll.style.overflow = "scroll";
            content_scroll.style.height = "20rem";
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
            var head = document.createElement('div');
            head.innerText = '성심당 본점 매장내 지도를 확인하고 싶다면 아래 버튼을 눌러주세요!';
            head.style.width = '10rem';
            result.appendChild(head);

            var content = document.createElement('div');
            var a = document.createElement('a');
            var button = document.createElement('div');
            button.innerText = '매장지도확인';
            button.style.margin = '1rem auto 0 auto';
            button.style.cursor = 'pointer';
            button.style.backgroundColor = '#FFE8B9';
            button.style.padding = '0.5rem 1rem';
            button.style.borderRadius = '0.5rem';
            a.href = 'https://vegahouse102.github.io/DDUTI/Bread/main.html';
            a.target = '_black';
            a.appendChild(button);
            content.appendChild(a);
            content.style.display = 'flex';
            content.style.justifyContent = 'center';
            result.appendChild(content);
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
    new messege(//10
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
    new messege(//15
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
    new messege(//18
        "보문산메아리",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[0]));
        },
        [0]
    ),
    new messege(
        "튀김소보로",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[1]));
        },
        [0]
    ),
    new messege(//20
        "명란바게트",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[2]));
        },
        [0]
    ),
    new messege(
        "작은메아리",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[3]));
        },
        [0]
    ),
    new messege(
        "단팥빵",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[4]));
        },
        [0]
    ),
    new messege(
        "토요빵",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[5]));
        },
        [0]
    ),
    new messege(
        "소보로",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[6]));
        },
        [0]
    ),
    new messege(
        "팡오레",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[7]));
        },
        [0]
    ),
    new messege(
        "초코튀소",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[8]));
        },
        [0]
    ),
    new messege(
        "판타롱부추빵",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[9]));
        },
        [0]
    ),
    new messege(
        "월넛브레드",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[10]));
        },
        [0]
    ),
    new messege(
        "빅매치",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[11]));
        },
        [0]
    ),
    new messege(//30
        "교황님의 치즈스콘",
        (bot_content) => {
            bot_content.appendChild(bread_explain(breads[12]));
        },
        [0]
    ),
    new messege(
        "상품보관",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '당일생산, 당일판매를 기본으로 하고 있습니다. <br> 수령일 당일 모든 섭취가 어려울경우 제품 특성에 맞게 냉동보관 권유드립니다. <br> 냉동보관시 상품 품질 떨어질수 있으며, 가급적 빠른섭취 부탁드립니다.';
            bot_content.appendChild(result);
        },
        [0,42]
    ),
    new messege(
        "품절상품",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '당일 생산, 당일 판매되는 상품으로 일시품절 상품이 발생할 수 있습니다.<br> 품절상품은 모바일성심당에서는 이용 어려운 부분 양해부탁드리며,<br> 고객센터 통해 문의 가능하며 일부 제품은 별도 예약으로 도와드릴 수 있습니다.<br> 쇼핑몰 내에 없는 제품 또한 고객센터에서 별도 확인 후 주문예약 가능합니다.<br> 감사합니다.';
            bot_content.appendChild(result);
        },
        [0,42]
    ),
    new messege(
        "휴대전화 인증",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '온라인쇼핑에서는 보다 안전한 거래를 위해, 본인확인을 실시하고 있습니다.<br>고객님의 명의도용 등으로 인한 개인정보의 악용 방지를 위한 최고 방안으로 불편하시더라도 반드시 인증받기를 권장합니다.';
            bot_content.appendChild(result);
        },
        [0,42]
    ),
    new messege(
        "적립금 정책/패밀리 카드",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '적립금은 상품 배송완료후 구매확정시 5% 적립금을 지급하고 있습니다. <br><br> 3,000점 이상부터 현금처럼 이용가능하며, 최대 50,000점까지 사용 가능합니다. <br><br> 24개월동안 이용하지 않을 경우 소멸되며,회원 탈퇴시에도 회원 자격이 상실되므로 보유 적립금은 모두 소멸되는 점 양해부탁드립니다. <br><br>단, 대전 성심당에서 운영하는 패밀리카드의 포인트는 오프라인 매장에서만 이용 가능합니다. ';
            bot_content.appendChild(result);
        },
        [0,42]
    ),
    new messege(
        "회원탈퇴후 재가입",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '탈퇴 후 재가입은 가능하십니다만 , 보유하고 있는 적립금과 위시리스트의 저장상품들은 자동 소멸됩니다.<br>            탈퇴 후 3개월 내(90일) 재가입시 신규회원가입혜택이 지급되지 않습니다.';
            bot_content.appendChild(result);
        },
        [0,42]
    ),
    new messege(//36
        "배송구분(택배, 대전배송, 본점방문)",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '성심당에서는 3가지의 배송구분으로 진행됩니다.<br><br> 1. 택배: 롯데택배(도서산간 지역 불가)<br> 택배사를 이용해 발송하며, 발송일 포함 2일 소요됩니다. 지정하신 날짜에 수령가능합니다.<br> 식품 특성상 과자류, 파운드류, 선물류, 첨가물이 많이 들어가지 않는 제품위주로 제품 발송이 가능합니다.<br> (케익, 튀김류, 크림, 초코 발송 제외되는 상품/하절기에는 부르스떡 불가)<br><br> 2. 대전배송: 성심당 직원배송 <br> 지정하신 날짜에 성심당 배송차량으로 배달됩니다.<br> 전제품 이용 가능합니다(현장 구매제품 제외)<br><Br>            3. 방문: 성심당 본점 방문 <br> 모바일성심당 방문접수는 본점 방문 접수로만 가능합니다.<br> 양해 부탁드립니다.<br><br>※ 대량 주문시 배송방법이 변경 될 수 있으며 별도 화물비용 부과 될 수 있습니다. <br>(1588-8069)';
            bot_content.appendChild(result);
        },
        [0, 41]
    ),
    new messege(
        "배송상태 확인",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '택배사를 통한 상품출고 송장등록시 고객님께 sms 를 발송해드리고 있습니다<br><br> ※운송장 등록 후, 택배사 사정에 따라 실제 송장조회가 반영되는데 까지 영업일기준 1일 정도 소요될 수 있습니다.<br> 택배사에서 집하된 상품이 배송중 위치추적이 어렵거나, 흐름조회가 어려울 경우 <br> 실제 배송을 담당하고 있는 택배사 또는 성심당 고객센터로 문의 부탁드리겠습니다.<br><br> 1. 롯데택배 : 1588-2121<br> 2. 성심당 고객센터 : 1588-8069 <br><br> 감사합니다.';
            bot_content.appendChild(result);
        },
        [0, 41]
    ),
    new messege(
        "배송지변경",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '배송지 변경은 상품이 발송되기 전 단계에서만 고객센타를 통해 변경이 가능합니다. <br> 최종 발송대기 상태에서는 변경이 불가능합니다.<br> 고객센터(1588 - 8069)를 통해 상품의 발송여부를 확인 후 배송지를 변경할 수 있습니다.';
            bot_content.appendChild(result);
        },
        [0, 41]
    ),
    new messege(
        "배송일, 배송시간",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '예약 배송이 가능하며, 선택가능한 날짜 범위 내에서 주문 가능합니다.<br>선택이 안되는 날짜는 예약이 마감된 날짜 이오니 양해부탁드립니다.<br> 특정일이나 주문폭주시 예약 조기마감 될 수 있습니다.<br> 시간지정은 1차(9시~13시안), 2차(13시~18시안) 순차배송으로 가능하며 정확한 시간 지정은 어려운 부분 있습니다.<br> 배송기사 및 택배사 사정에 따라 변동 있습니다.';
            bot_content.appendChild(result);
        },
        [0, 41]
    ),
    new messege(
        "택배지연 및 사고",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '제품 미수령시, 고객센타로 접수 및 확인연락 주시면 <br> 택배사에 확인 후 분실한 상품의 재배송 및 환불을 신속하게 처리해 드리겠습니다.<br><br> 성심당 고객센터(1588-8069)<br>이용가능시간 : 오전 9시 ~ 오후 5시';
            bot_content.appendChild(result);
        },
        [0, 41]
    ),
    new messege(//41
        "배송관련 사항",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '해결하고자 하는 배송관련문제를 골라주세요';
            bot_content.appendChild(result);
        },
        [36, 37, 38, 39, 40]
    ),
    new messege(//42
        "문의사항",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '문의사항 관련 품목입니다. <br>궁금하신 질문이 있으신가요?';
            bot_content.appendChild(result);
        },
        [31,32,43,33,34,35,41]
    ),
    new messege(//43
        "기타",
        (bot_content) => {
            var result = document.createElement('div');
            result.innerHTML = '궁금한 점이 더 있으시다면, 우리 직원들이 더 자세하게 도와드릴수 있습니다.<br><br> 함께 더 자세한 정보를 얻고 싶으시면 고객문의 전화번호 1544-8069로 문의해주세요.<br><br> 저희 직원들이 보다 친절하게 도와드리겠습니다!';
            bot_content.appendChild(result);
        },
        [0,42]
    ),
];
