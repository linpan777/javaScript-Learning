/* 🚀🔥
黃綠紅 你要哪一個？

此專案涵蓋的概念
- DOM 操作
- 事件監聽器
- 迴圈 forEach 
- 變數
- 條件語句 (if else if)
- 樣板字面值
*/

// 將 title 文字改成 '報告阿柴，標題已經切換！' 並將字體顏色改成藍色
function changeTitle()
{   
    let titleDiv = document.getElementById('title');
    let buttonDiv = document.getElementById('changeButton');
    changeButton.onclick = () => {
        let message = "標題已切換！";
        console.log("按鈕已被按");
        titleDiv.innerText = message;
        titleDiv.style.color = 'blue';
    };
}

changeTitle();

const squares = document.querySelectorAll('.colorSquare')
let outputDiv = document.getElementById('output');

// 將每個元素綁定
squares.forEach(square => {
  square.onclick = () => {
    let Id = square.getAttribute('id');
    outputDiv.innerHTML = `<div class = 'colorSquare' id = "${Id}"></div>`
  }
})