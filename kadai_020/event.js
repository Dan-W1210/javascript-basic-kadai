const clickBtn = document.getElementById('btn');

const clickedText = document.getElementById('text');
clickBtn.addEventListener('click', ()=>{
  clickedText.textContent = 'ボタンをクリックしました';
  console.log(clickedText);
})