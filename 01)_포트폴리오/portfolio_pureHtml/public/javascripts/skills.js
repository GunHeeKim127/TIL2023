// $(document).ready(function(){
//     document.getElementById("skills").innerHTML
//     ='<object type="text/html" data="./view/skills.html" style="height:542px; width:100%;"></object>';
//     document.getElementById("skills").style.height="742px"
// })

// public/javascripts/skills.js
(function () {
  // 내부 문서 높이를 읽어 object 높이에 반영
  function syncObjectHeight(obj) {
    try {
      const doc = obj.contentDocument || obj.contentWindow.document;
      if (!doc) return;

      const html = doc.documentElement;
      const body = doc.body;

      // 가장 큰 높이 계산
      const h = Math.max(
        body.scrollHeight, body.offsetHeight, body.clientHeight,
        html.scrollHeight, html.offsetHeight, html.clientHeight
      );

      obj.style.height = h + "px";
    } catch (e) {
      // cross-origin이면 접근 불가. 같은 도메인이어야 합니다.
      console.warn("skills object resize failed:", e);
    }
  }

  // DOM 변경/이미지 로드/폰트 로드 시에도 다시 맞춤
  function installObservers(obj) {
    const doc = obj.contentDocument || obj.contentWindow.document;
    if (!doc) return;

    // 이미지가 나중에 로드될 때
    Array.from(doc.images || []).forEach((img) => {
      if (!img.complete) img.addEventListener("load", () => syncObjectHeight(obj), { once: true });
    });

    // 웹폰트 적용 후 레이아웃 변동
    if (doc.fonts && doc.fonts.ready) {
      doc.fonts.ready.then(() => syncObjectHeight(obj));
    }

    // DOM 변경 감지
    const mo = new MutationObserver(() => syncObjectHeight(obj));
    mo.observe(doc.documentElement, { childList: true, subtree: true, attributes: true, characterData: true });
  }

  $(function () {
    const wrap = document.getElementById("skills");
    wrap.innerHTML = ""; // 기존 <object> 제거

    const obj = document.createElement("object");
    obj.type = "text/html";
    obj.data = "./view/skills.html";  // 같은 도메인 경로여야 함
    obj.style.width = "100%";
    obj.style.border = "0";           // 테두리 제거
    wrap.appendChild(obj);

    // 로드 완료 시 높이 동기화 + 옵저버 설치
    obj.addEventListener("load", function () {
      syncObjectHeight(obj);
      installObservers(obj);
    });

    // 창 크기 변경 시에도 다시 맞춤
    window.addEventListener("resize", function () {
      syncObjectHeight(obj);
    });
  });
})();
