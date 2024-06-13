// Build button
const _button = document.createElement("button");
_button.id = 'get-code-fshare';
_button.style = "display: flex;align-items: center;border: 2px solid black;color: white;cursor: pointer;height: 36px;font-size: 16px;padding-left: 38px;padding-right: 10px;border-radius: 18px;background-repeat: no-repeat;background-color: #cd1417;background-image:url('https://caochitam.github.io/fshare/flogo.png')";
_button.textContent = "Lấy mã";
_button.setAttribute('data-clipboard-target', '#f-code');
const _div = document.createElement("div");
_div.id = "f-cover";
_div.style = "display: flex; justify-content: center;";
_div.append(_button);

// Insert button
document.currentScript = document.currentScript || document.getElementById('getlinkfshare_net_script');
const me = document.currentScript;
me.parentNode.insertBefore(_div, me);
const fCover = document.getElementById('f-cover');

// Build and insert message
const _message = document.createElement("div");
_message.id = "f-message";
_message.hidden = true;
_message.style = "position: fixed;margin-top: -30px;background-color: #cd1417;z-index: 100000;top: 50%;color: white;padding: 2px 10px;border: 2px solid black;}";
_message.textContent = "Hello";
fCover.append(_message);

// Cai dat bien va tham so
let isVisible = !0, isFocus = !0, fCode = "", wait = 120, targetUrlIncludes = "", isMatchTargetUrl = true;

// Kiem tra url dich hop le chua
targetUrlIncludes = document.currentScript.getAttribute('targetUrlIncludes')?.trim().replace('|', '\\|');
console.log('targetUrlIncludes', targetUrlIncludes);
if(targetUrlIncludes){ // Neu co cai dat url dich thi kiem tra khop chua
    let targets = (targetUrlIncludes) ? [] : JSON.parse(targetUrlIncludes);
    let targetsRegex = new RegExp(targets.join("|"));
    console.log(targetsRegex.source);
    isMatchTargetUrl = targets == [] || location.href.match(targetsRegex) != null;
}
console.log('isMatchTargetUrl',isMatchTargetUrl);

// Cap nhat trang thai dang xem cua nguoi dung
document.addEventListener("visibilitychange", () => (isVisible = !document.hidden));
window.addEventListener("focus", () => (isFocus = true));
window.addEventListener("blur", () => (isFocus = false));


const mainButton = document.getElementById('get-code-fshare');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let code = getCookie('fCode')
if (code) {
    setCookie('fCode','');

    const _code = document.createElement("input");
    _code.id = "f-code";
    _code.style = "border: 0; text-align: center;background: none;color: white;";
    _code.value = code;
    _code.readOnly = true;
    _button.innerHTML = '';
    _button.append(_code);

    const _copy = document.createElement("img");
    _copy.id = "copy-icon";
    _copy.style = "height: 21px;";
    _copy.src = "https://caochitam.github.io/fshare/fcopy.png"
    _button.append(_copy);
    new ClipboardJS('#get-code-fshare');
    _button.addEventListener('click', ()=>{showMessage('Đã copy mã vào bộ nhớ!');});
} else {
    mainButton.textContent = "Lấy mã khuyến mãi";
    mainButton.onclick = getCodeFshare;
}
async function getCodeFshare() {
    mainButton.onclick = undefined;
    // console.log('Click!');
    if (!document.referrer.includes("google.com")) alert('Bạn đang truy cập trực tiếp, mã tài trợ sẽ không xuất hiện. Xem lại hướng dẫn.')
    else if (!isMatchTargetUrl) alert('Bạn đang truy cập sai trang hoặc tìm kiếm sai từ khóa. Xem lại hướng dẫn')
    else {
        jQuery.get("https://getlinkfshare.net/?getcode=1", (a) => { code = a });
        let count = 75;
        do {
            if(isVisible && isFocus){
                mainButton.textContent = "Vui lòng đợi " + count + " giây";
                count--;
            }
            await sleep(1000);
        } while (count > 0);
        setCookie('fCode', code);
        mainButton.textContent = "Click vào một link bất kỳ trong menu ۩";
    }
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
async function showMessage(message) {
    const f_message = document.getElementById('f-message');
    f_message.textContent = message;
    f_message.removeAttribute('hidden');
    await sleep(2000);
    f_message.setAttribute('hidden', "true");
}

