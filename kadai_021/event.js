const clickBtn = document.getElementById('btn');

const clickedText = document.getElementById('text');
//setTimeout(() =>{

 clickBtn.addEventListener('click', ()=>{
  setTimeout(()=>{ clickedText.textContent = 'ボタンをクリックしました';
  },2000)})
