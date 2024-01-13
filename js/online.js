// 營業狀態
var currentTime = new Date();
var currentHourUTC = currentTime.getUTCHours(); // 使用 UTC 時間
var currentDay = currentTime.getUTCDay(); // 0 表示星期日，1 表示星期一，以此類推

console.log("Current time (UTC):", currentHourUTC);
console.log("Current day (UTC):", currentDay);

// 獲取所有具有 "billboard" 類的元素
var billboardElements = document.querySelectorAll('.billboard');

// 遍歷每個元素，更新文本和樣式
billboardElements.forEach(function (statusElement) {
    if (currentDay === 0 || currentDay === 6) {
        // 今日休業（星期六和星期日）
        statusElement.textContent = "今日休業";
        statusElement.style.backgroundColor = "#DA9647";
        statusElement.style.color = "#111111";
    } else if ((currentHourUTC >= 17 && currentHourUTC <= 23) || (currentHourUTC >= 0 && currentHourUTC < 9)) {
        // 休息中
        statusElement.textContent = "休息中";
        statusElement.style.backgroundColor = "#807F7F";
        statusElement.style.color = "#111111";
    } else if (currentHourUTC >= 9 && currentHourUTC < 11) {
        // 準備中
        statusElement.textContent = "準備中";
        statusElement.style.backgroundColor = "#97071A";
        statusElement.style.color = "#ffffff";
    } else if (currentHourUTC >= 11 && currentHourUTC < 12) {
        // 營業中
        statusElement.textContent = "營業中";
        statusElement.style.backgroundColor = "#97071A";
        statusElement.style.color = "#ffffff";
    } else {
        // 其他時間默認營業中
        statusElement.textContent = "營業中";
        statusElement.style.backgroundColor = "#97071A";
        statusElement.style.color = "#ffffff";
    }
});
