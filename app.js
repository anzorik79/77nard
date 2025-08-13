document.addEventListener("DOMContentLoaded", () => {
    function bindButtons() {
        const playOnlineBtn = document.getElementById("playOnline");
        const playBotBtn = document.getElementById("playBot");
        const shopBtn = document.getElementById("shop");

        if (playOnlineBtn && !playOnlineBtn.dataset.bound) {
            playOnlineBtn.addEventListener("click", () => alert("Online Game Start!"));
            playOnlineBtn.dataset.bound = "true";
        }
        if (playBotBtn && !playBotBtn.dataset.bound) {
            playBotBtn.addEventListener("click", () => alert("Bot Game Start!"));
            playBotBtn.dataset.bound = "true";
        }
        if (shopBtn && !shopBtn.dataset.bound) {
            shopBtn.addEventListener("click", () => alert("Opening Shop!"));
            shopBtn.dataset.bound = "true";
        }
    }

    bindButtons();
    setInterval(bindButtons, 200); // повторная привязка каждые 200 мс
});
