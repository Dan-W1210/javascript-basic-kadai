const clickBtn = document.getElementById('btn');

const clickedText = document.getElementById('text');
clickBtn.addEventListener('click', ()=>{
  text.textContent = 'ボタンをクリックしました';
  console.log(clickedText);
})