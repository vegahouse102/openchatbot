////////////////////////////////////////////////////////////////////////////////////////
var body = document.querySelector("body");
var chat_body = document.querySelector("#chat-body");
var chat_create_button = document.querySelector("#chat-create-button");
let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var answer_idx = 0;
init();
tree_implement(0, 0);
chat_body.style.visibility = "visible";
chat_body.style.setProperty('opacity', 1);
// chat_create_button.addEventListener('click', (e) => {
//     if (chat_body.style.opacity == 0) {

//         if (windowWidth > 768)
//             chat_body.style.setProperty('transform', 'translateY(-20px)');
//     } else {
//         chat_body.style.setProperty('opacity', 0);
//         if (windowWidth > 768)
//             chat_body.style.setProperty('transform', 'translateY(20px)');
//         setTimeout(() => {
//             chat_body.style.visibility = "hidden";
//         }, 200);
//     }
// });
// chat_create_button.addEventListener('mousedown', (e) => {
//     chat_create_button.style.setProperty('transform', 'translateY(2px)');
// });
// chat_create_button.addEventListener('mouseup', (e) => {
//     chat_create_button.style.setProperty('transform', 'translateY(-2px)');
// });
// document.querySelector('#chat-img').addEventListener('click', (e) => {
//     chat_body.style.setProperty('opacity', 0);
//     if (windowWidth > 768)
//         chat_body.style.setProperty('transform', 'translateY(20px)');
//     setTimeout(() => {
//         chat_body.style.visibility = "hidden";
//     }, 200);
// });

////////////////////////////////////////////////////////////////////////////////////////////
function bread_box(_bread) {
    var result = document.createElement('div');
    var head = document.createElement('div');
    var tmp = document.createElement('div');
    tmp.innerHTML = _bread.name;
    head.appendChild(tmp);
    tmp = document.createElement('div');
    tmp.innerHTML = _bread.price;
    tmp.style.fontSize = '0.8rem';

    head.appendChild(tmp);
    head.style.display = 'flex';
    head.style.flexDirection = 'column';
    head.style.justifyContent = 'space-around';
    head.style.paddingLeft = '0.5rem';

    result.appendChild(head);
    tmp = document.createElement('img');
    tmp.src = _bread.img_address;
    tmp.alt = 'a';
    tmp.style.width = '4rem';
    tmp.style.height = '4rem';
    result.appendChild(tmp);

    result.style.display = 'flex';
    result.style.justifyContent = 'space-between';
    result.style.height = "4rem";
    result.style.cursor = 'pointer';
    return result;
}
function brand_box(_brand, flag) {
    var result = document.createElement('div');
    var head = document.createElement('div');
    var tmp = document.createElement('div');
    tmp.innerHTML = _brand.name;
    tmp.style.fontSize = '1rem';
    head.appendChild(tmp);
    tmp = document.createElement('div');
    tmp.innerHTML = _brand.address;
    tmp.style.fontSize = '0.7rem';

    head.appendChild(tmp);
    head.style.display = 'flex';
    head.style.flexDirection = 'column';
    head.style.justifyContent = 'space-around';
    head.style.paddingLeft = '0.5rem';
    head.style.paddingRight = '0.5rem';

    result.appendChild(head);
    tmp = document.createElement('img');
    tmp.src = _brand.img_address;
    tmp.alt = 'a';
    tmp.style.width = '4rem';
    tmp.style.height = '4rem';
    result.appendChild(tmp);

    result.style.display = 'flex';
    result.style.justifyContent = 'space-between';
    result.style.height = "4rem";
    if (flag == 0)
        result.style.backgroundColor = '#FFE8B9';
    else
        result.style.backgroundColor = '#FFFFFF';
    result.style.cursor = 'pointer';
    return result;
}
function brand_locate(brand) {
    var result = document.createElement('div');
    var tmp = document.createElement('div');
    tmp.innerText = brand.name;
    // tmp.style.fontWeight = 'bold'
    tmp.style.marginBottom = '1.5rem';
    tmp.style.fontSize = '1.2rem';
    result.appendChild(tmp);

    tmp = document.createElement('div');
    tmp.textContent = brand.explain;
    tmp.style.marginBottom = '1rem';
    tmp.style.wordWrap = 'break-all';
    tmp.style.overflowWrap = 'break-all';
    result.appendChild(tmp);

    var content = document.createElement('div');
    tmp = document.createElement('img');
    tmp.src = brand.img_address;
    tmp.classList.add('bot-messege-img');
    content.appendChild(tmp);
    content.style.marginBottom = '1rem';
    content.style.textAlign = 'center';
    result.appendChild(content);
    result.appendChild(document.createElement('hr'));

    content = document.createElement('div');
    tmp = document.createElement('div');
    tmp.style.marginTop = '1rem';
    tmp.innerText = '오시는 길';
    tmp.minWidth = '10rem';
    tmp.style.marginRight = '0.5rem';
    content.appendChild(tmp);

    tmp = document.createElement('div');
    tmp.style.marginTop = '1rem';
    tmp.innerText = brand.address;
    tmp.style.marginBottom = '1rem';
    content.appendChild(tmp);
    content.style.display = 'block';
    result.appendChild(content);

    result.appendChild(document.createElement('hr'));

    content = document.createElement('div');
    tmp = document.createElement('div');
    tmp.style.marginTop = '1rem';
    tmp.innerText = '영업시간';
    tmp.minWidth = '10rem';
    tmp.style.marginRight = '0.5rem';
    content.appendChild(tmp);

    tmp = document.createElement('div');
    tmp.style.marginTop = '1rem';
    tmp.innerHTML = brand.work_time;
    tmp.style.marginBottom = '1rem';
    content.appendChild(tmp);
    content.style.display = 'block';
    result.appendChild(content);

    result.appendChild(document.createElement('hr'));

    content = document.createElement('div');
    tmp = document.createElement('div');
    tmp.style.marginTop = '1rem';
    tmp.innerText = '전화번호';
    tmp.width = '10rem';
    tmp.style.marginRight = '0.5rem';
    content.appendChild(tmp);

    tmp = document.createElement('div');
    tmp.style.marginTop = '1rem';
    tmp.innerText = brand.phone;
    tmp.style.marginBottom = '1rem';
    content.appendChild(tmp);
    content.style.display = 'block';
    result.appendChild(content);

    var content_box = document.createElement('div');
    content = document.createElement('a');
    content.href = brand.naver_location;
    content.target = '_black';
    tmp = document.createElement('div');
    tmp.innerText = '지도 보기';
    tmp.style.textAlign = 'center';
    content.appendChild(tmp);
    content_box.appendChild(content);
    content_box.style.backgroundColor = '#FFE8B9';
    result.appendChild(content_box);
    return result;
}
function bread_explain(bread) {
    var result = document.createElement('div');
    result.style.display = 'flex';
    result.style.flexDirection = 'column';
    var tmp = document.createElement('img');
    tmp.id = 'gallery-image';
    tmp.src = bread.img_address;
    result.appendChild(tmp);

    breadimformation = document.createElement('div');
    breadimformation.classList.add('bread-imformation');
    var breadname = document.createElement('div');
    breadname.classList.add('bread-name');
    breadname.innerText = bread.name;
    breadimformation.appendChild(breadname);

    var bread_description = document.createElement('div');
    bread_description.classList.add('bread-description');
    bread_description.innerHTML = bread.explain;
    breadimformation.appendChild(bread_description);

    var bread_price = document.createElement('div');
    bread_price.classList.add('bread-price');
    bread_price.innerText = bread.price;
    breadimformation.appendChild(bread_price);
    var bread_detail = document.createElement('div');
    bread_detail.classList.add('bread-detail');
    var bread_detail_left_border = document.createElement('div');
    bread_detail_left_border.classList.add('detail-left-border');
    var bread_detail_left = document.createElement('div');
    bread_detail_left.classList.add('detail-left');
    var bread_detail_left_font = document.createElement('div');
    bread_detail_left_font.innerText = '유통기한';
    bread_detail_left_font.classList.add('detail-left-font');
    bread_detail_left.appendChild(bread_detail_left_font);

    bread_detail_left_font = document.createElement('div');
    bread_detail_left_font.innerText = '보관방법';
    bread_detail_left_font.classList.add('detail-left-font');
    bread_detail_left.appendChild(bread_detail_left_font);

    bread_detail_left_font = document.createElement('div');
    bread_detail_left_font.innerText = '배송비';
    bread_detail_left_font.classList.add('detail-left-font');
    bread_detail_left.appendChild(bread_detail_left_font);

    bread_detail_left_font = document.createElement('div');
    bread_detail_left_font.innerText = '사이즈';
    bread_detail_left_font.classList.add('detail-left-font');
    bread_detail_left.appendChild(bread_detail_left_font);
    bread_detail_left_border.appendChild(bread_detail_left);
    bread_detail.appendChild(bread_detail_left_border);
    var bread_detail_right = document.createElement('div');
    bread_detail_right.classList.add('detail-right');
    var bread_detail_right_font = document.createElement('div');
    bread_detail_right_font.innerText = bread.best_before;
    bread_detail_right_font.classList.add('detail-right-font');
    bread_detail_right.appendChild(bread_detail_right_font);

    bread_detail_right_font = document.createElement('div');
    bread_detail_right_font.innerText = bread.storage_method;
    bread_detail_right_font.classList.add('detail-right-font');
    bread_detail_right.appendChild(bread_detail_right_font);

    bread_detail_right_font = document.createElement('div');
    bread_detail_right_font.innerText = '선불 3000원';
    bread_detail_right_font.classList.add('detail-right-font');
    bread_detail_right.appendChild(bread_detail_right_font);

    bread_detail_right_font = document.createElement('div');
    bread_detail_right_font.innerText = bread.size;
    bread_detail_right_font.classList.add('detail-right-font');
    bread_detail_right.appendChild(bread_detail_right_font);
    bread_detail.appendChild(bread_detail_right);
    breadimformation.appendChild(bread_detail);
    var detail_border = document.createElement('div');
    detail_border.classList.add('detail-border');
    breadimformation.appendChild(detail_border);
    result.appendChild(breadimformation);

    var more_box = document.createElement('div');
    more_box.classList.add('more_Box');
    more_information = document.createElement('div');
    more_information.classList.add('more_information');
    more_information.innerText = '알레르기정보';
    more_box.appendChild(more_information);

    var tmp = document.createElement('div');
    tmp.classList.add('more_information_detail');
    tmp.innerText = bread.allergy;
    more_box.appendChild(tmp);

    tmp = document.createElement('div');
    tmp.classList.add('more_information');
    tmp.innerText = '성분표시';
    more_box.appendChild(tmp);

    var tmp = document.createElement('div');
    tmp.classList.add('more_information_detail');
    tmp.innerText = bread.ingredient;
    more_box.appendChild(tmp);
    result.appendChild(more_box);
    return result;
}
function init() {
    var chat_content = document.querySelector('#chat-content');
    while (chat_content.firstChild) {
        chat_content.removeChild(chat_content.firstChild);
    }
    const cur_time = new Date();
    var chat_content_time = document.createElement('div');
    chat_content_time.innerHTML += `📅${cur_time.getFullYear()}년 ${cur_time.getMonth() + 1}월 ${cur_time.getDate()}일`;
    chat_content_time.classList.add('chat-content-time');
    var chat_content_time_contain = document.createElement('div');
    chat_content_time_contain.appendChild(chat_content_time);
    chat_content.appendChild(chat_content_time_contain);
}
function tree_implement(idx, flag) {//0 first 1 not first
    var chat_content = document.querySelector('#chat-content');
    var user;
    if (flag) {
        chat_content.removeChild(chat_content.lastChild);
        user = make_box(tree[idx].button_text, 0);
        chat_content.appendChild(user);
        
    }
    make_bot(idx);
    make_buttons(tree[idx].after_buttons);
    if(flag)
        chat_content.scrollTop = user.offsetTop- 4 * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
function make_bot(idx) {
    var chat_content = document.querySelector('#chat-content');
    var result = document.createElement('div');
    var bot_img = document.createElement('img');
    bot_img.alt = 'a';
    bot_img.src = "img/성심당프로필.png";
    bot_img.classList.add('bot-img');
    result.appendChild(bot_img);

    var chat_bot_content = document.createElement('div');
    var bot_name = document.createElement('div');
    bot_name.classList.add('bot-name');
    bot_name.innerText = '성심당';
    chat_bot_content.appendChild(bot_name);

    var chat_bot_content_box = document.createElement('div');

    tree[idx].func(chat_bot_content_box);
    chat_bot_content_box.classList.add('bot-messege');

    chat_bot_content.appendChild(chat_bot_content_box);
    result.appendChild(chat_bot_content);
    result.style.display = "flex";
    chat_content.appendChild(result);
}
function make_box(str, flag) {//0 user 1 bot
    var result = document.createElement('div');
    if (flag)
        result.classList.add('bot-messege');
    else
        result.classList.add('user-messege');
    var tmp = document.createElement('div');
    tmp.innerHTML = str;
    result.appendChild(tmp);
    return result;
}
function make_buttons(buttons) {
    var tmp = document.createElement('div');
    tmp.id = 'chat-buttons';
    document.querySelector("#chat-content").appendChild(tmp);
    var chat_buttons = tmp;
    for (var idx of buttons) {
        var result = document.createElement('div');
        result.innerText = tree[idx].button_text;
        result.classList.add('chat-button');
        result.addEventListener('click', (e) => {
            var idx = -1;
            for (var i = 0; i < tree.length; i++) {
                if (tree[i].button_text == e.target.innerText) {
                    idx = i;
                    break;
                }
            }
            tree_implement(idx, 1);
        });
        chat_buttons.appendChild(result);
    }
}