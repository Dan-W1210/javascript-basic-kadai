// 現在の日付と時刻を取得
const now = new Date(); 


const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const formattedMonth = ('00' + month).slice(-2); 
const formattedDay = ('00' + day).slice(-2);  

const result = `${year}年${formattedMonth}月${formattedDay}日`;
console.log(result); 
