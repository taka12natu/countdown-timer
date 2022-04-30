
let countDown = function(due){
  let nowDate = new Date(); //現在日時の取得

  let remainTime = due.getTime() - nowDate.getTime(); //ミリ秒を取得

  let secondTime = Math.floor(remainTime / 1000) % 60; //秒数に変換後、分に変換して余り（＝秒数）を表示
  let minutesTime = Math.floor(remainTime / 1000 / 60) % 60; //分に変換
  let hourTime = Math.floor(remainTime / 1000 / 60 / 60) % 24; //時間に変換
  let dayTime = Math.floor(remainTime/1000/60/60/24); 

  let countTime = [dayTime,hourTime,minutesTime,secondTime];

  return countTime
}

// 1秒ずつカウントされる
let recalc = function(){
  let count_txt = countDown(end_time);

  // 表示形式を”01”のよう2桁にする
  if(count_txt[0]<=9){
    count_txt[0] = "0" + count_txt[0];
  }
  if(count_txt[1]<=9){
    count_txt[1] = "0" + count_txt[1];
  }
  if(count_txt[2]<=9){
    count_txt[2] = "0" + count_txt[2];
  }
  if(count_txt[3]<=9){
    count_txt[3] = "0" + count_txt[3];
  }

  count_txt.forEach(function(value, index, array){
    let first_digit = Math.floor(value / 1) % 10;
    let second_digit = Math.floor(value / 10) % 10;
    let img_url_first = '<img src="./img/number' + first_digit + '.png">';
    let img_url_second = '<img src="./img/number' + second_digit + '.png">';
    array[index] = img_url_second + img_url_first;
  });


  document.getElementById("time_d").innerHTML = count_txt[0];
  document.getElementById("time_h").innerHTML = count_txt[1];
  document.getElementById("time_m").innerHTML = count_txt[2];
  document.getElementById("time_s").innerHTML = count_txt[3];

  setTimeout(recalc, 1000);
}

let now_date = new Date();
let start_time = new Date("2022/04/23 00:00:00");
let end_time = new Date("2022/04/30 23:59:59");
let today = new Date("2022/04/30 00:00:00");
let element = document.getElementById("center_box");
if(now_date >= start_time && now_date <= end_time){
  recalc();
  element.style.display="block";
}
if(now_date > today){
  document.getElementById('js_text_change').innerText = "WILL START TODAY!";
}