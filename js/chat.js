////////////////////////////////////////////////////////////////////////////////////////
var body = document.querySelector("body");
var chat_body = document.querySelector("#chat-body");
var chat_create_button = document.querySelector("#chat-create-button");
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var answer_idx = 0;
chat_create_button.addEventListener('click', (e) => {
    if (chat_body.style.opacity == 0) {
        init();
        tree_implement(0, 0);
        chat_body.style.visibility = "visible";
        chat_body.style.setProperty('opacity', 1);
        if (windowWidth >= 768)
            chat_body.style.setProperty('transform', 'translateY(-20px)');
    } else {
        chat_body.style.setProperty('opacity', 0);
        if (windowWidth >= 768)
            chat_body.style.setProperty('transform', 'translateY(20px)');
        setTimeout(() => {
            chat_body.style.visibility = "hidden";
        }, 200);
    }
});
chat_create_button.addEventListener('mousedown', (e) => {
    chat_create_button.style.setProperty('transform', 'translateY(2px)');
});
chat_create_button.addEventListener('mouseup', (e) => {
    chat_create_button.style.setProperty('transform', 'translateY(-2px)');
});
document.querySelector('#chat-img').addEventListener('click', (e) => {
    chat_body.style.setProperty('opacity', 0);
    if (windowWidth >= 768)
        chat_body.style.setProperty('transform', 'translateY(20px)');
    setTimeout(() => {
        chat_body.style.visibility = "hidden";
    }, 200);
});

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

    tmp.style.width = '4rem';
    tmp.style.height = '4rem';
    result.appendChild(tmp);

    result.style.display = 'flex';
    result.style.justifyContent = 'space-between';
    result.style.height = "4rem";
    return result;
}
function brand_box(_brand) {
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

    tmp.style.width = '4rem';
    tmp.style.height = '4rem';
    result.appendChild(tmp);

    result.style.display = 'flex';
    result.style.justifyContent = 'space-between';
    result.style.height = "4rem";
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
    if (flag) {
        if (chat_content.firstChild) {
            chat_content.removeChild(chat_content.lastChild);
        }
        chat_content.appendChild(make_box(tree[idx].button_text, 0));
    }
    make_bot(idx);
    make_buttons(tree[idx].after_buttons);
    addEvent(idx);
}
function make_bot(idx) {
    var chat_content = document.querySelector('#chat-content');
    var result = document.createElement('div');

    var bot_img = document.createElement('img');
    bot_img.src = "img/성심당프로필.png";
    bot_img.classList.add('bot-img');
    result.appendChild(bot_img);

    var chat_bot_content = document.createElement('div');
    var bot_name = document.createElement('div');
    bot_name.classList.add('bot-name');
    bot_name.innerText = '성심당';
    chat_bot_content.appendChild(bot_name);

    var chat_bot_content_box = document.createElement('div');
    chat_bot_content_box.classList.add('bot-messege');

    tree[idx].func(chat_bot_content_box);

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
    document.querySelector("#chat-content").innerHTML += '<div id="chat-buttons"></div>';
    var chat_buttons = document.querySelector("#chat-buttons");
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
    var chat_content = document.querySelector("#chat-content");
    chat_content.scrollTop = chat_content.scrollHeight;
}
function addEvent(idx) {
    if (idx) {

    }
}