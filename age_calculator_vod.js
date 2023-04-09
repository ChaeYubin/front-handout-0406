//클릭이 발생하면 귀하의 만 나이는 00입니다 출력
//나이 계산을 먼저 하고
//if 생일이 지났으면 -> 나이-1
//if 생일이 안지났으면 -> 나이-2

let birthday = document.getElementById("birthday");


let result = document.getElementById("result");


let btn = document.getElementById("summit");


//나이계산
//2023년 -> 2001년생은 만나이 22
//2023-2001 하면 만나이가 나옴 / 생일 안지나면-1
result = birthday.getFullYear - today.getFullYear;
if (today.getDay > birthday.getDay) {
    result -= 1
};

//출력
btn.addEventListener('click',`귀하의 만 나이는 ${result} 입니다.`)

