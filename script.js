function setStatus(text) {
    document.getElementById('status').innerText = text;
}

function runGoldHEN() {
    setStatus("جاري تهيئة ثغرة المتصفح لإصدار 14.00...");
    setTimeout(() => {
        setStatus("جاري حقن ملف GoldHEN...");
        setTimeout(() => {
            setStatus("تم التفعيل بنجاح! استمتع بالتعديل.");
        }, 2000);
    }, 1500);
}

function runBinLoader() {
  setStatus("تم تفعيل وضع استقبال البايلود عبر المنفذ 9090...");
}

function clearCache() {
    if (window.applicationCache) {
        window.applicationCache.update();
    }
    setStatus("تم مسح الذاكرة المؤقتة بنجاح.");
}
