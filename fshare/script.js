// Build button
const _button = document.createElement("button");
_button.id = 'get-code-fshare';
_button.style = "color: white;cursor: pointer;height: 36px;font-size: 16px;padding-left: 38px;padding-right: 10px;border-radius: 18px;background-repeat: no-repeat;background-color: #cd1417;background-image:url('data:image/png;base64,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')";
_button.textContent = "Lấy mã";
_button.onclick = "getCodeFshare()";
const _div = document.createElement("div");
_div.style = "display: flex";
_div.append(_button);
// Insert button
document.currentScript = document.currentScript || document.getElementById('getlinkfshare_net_script');
const me = document.currentScript;
me.parentNode.insertBefore(_div, me);
// Get code
let isVisible = !0, isFocus = !0, fCode = "", wait = 120,
    targetUrlIncludes = document.currentScript.getAttribute('targetUrlIncludes').trim();
    console.log('targetUrlIncludes', targetUrlIncludes);
let targets = (targetUrlIncludes == "") ? [] : JSON.parse(targetUrlIncludes).map(t => t.replace('|', '\\|'));
let targetsRegex = new RegExp(`/${targets.join("|")}/`);
console.log(targetsRegex.source);
document.addEventListener("visibilitychange", () => (isVisible = !document.hidden));
window.addEventListener("focus", () => (isFocus = true));
window.addEventListener("blur", () => (isFocus = false));
function getCodeFshare() {
    if (document.referrer &&
        document.referrer.includes("google.com") &&
        (targetUrlIncludes == [''] ||
            location.pathname.match(targetsRegex))) {
        jQuery("#openFshareBtn").css({ color: "#cd1417", cursor: "pointer" }),
            jQuery("#openFshareBtn").click(() => {
                jQuery.get("https://fshare.ga/get-code-3", (a) => (fCode = a)), jQuery("#openFshareBtn").hide(), jQuery("#fGetCode").show();
                let a = setInterval(() => {
                    if (isVisible && isFocus) {
                        let b = Number(jQuery("#fTick")[0].textContent);
                        b ? (b--, (jQuery("#fTick")[0].textContent = b)) : (Cookies.set("fCode", fCode), jQuery("#fTime").hide(), jQuery("#fText")[0].setHTML(`Đang hiển thị...`), location.reload(), clearInterval(a));
                    }
                }, 1e3);
            })
    } else {
        (location.pathname.includes("voi-dolomite")) ? (
            jQuery("#openFshareBtn").click(() => alert(`Bạn đang truy cập trực tiếp, mã tài trợ fshare sẽ không xuất hiện. Xem lại hướng dẫn.`))
        ) : (
            jQuery("#openFshareBtn").click(() => alert(`Bạn đang truy cập sai trang hoặc tìm kiếm sai từ khóa. Xem lại hướng dẫn`))
        )
    }

}