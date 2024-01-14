// 營業狀態
var currentTime = new Date();
var taiwanTime = new Date(currentTime.getTime() + (8 * 60 * 60 * 1000)); // UTC+8

var currentHour = taiwanTime.getUTCHours();
var currentDay = taiwanTime.getUTCDay(); // 0 表示星期日，1 表示星期一，以此類推

console.log("Current time (Taiwan):", taiwanTime);
console.log("Current hour (Taiwan):", currentHour);
console.log("Current day (Taiwan):", currentDay);

// 獲取所有具有 "billboard" 類的元素
var billboardElements = document.querySelectorAll('.billboard');

// 遍歷每個元素，更新文本和樣式
billboardElements.forEach(function (statusElement) {
    if (currentDay === 0 || currentDay === 6) {
        // 今日休業（星期六和星期日）
        statusElement.textContent = "今日休業";
        statusElement.style.backgroundColor = "#DA9647";
        statusElement.style.color = "#111111";
    } else if ((currentHour >= 17 && currentHour <= 23) || (currentHour >= 0 && currentHour < 9)) {
        // 休息中
        statusElement.textContent = "休息中";
        statusElement.style.backgroundColor = "#807F7F";
        statusElement.style.color = "#111111";
    } else if (currentHour >= 9 && currentHour < 11) {
        // 準備中
        statusElement.textContent = "準備中";
        statusElement.style.backgroundColor = "#97071A";
        statusElement.style.color = "#ffffff";
    } else if (currentHour >= 11 && currentHour < 12) {
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
