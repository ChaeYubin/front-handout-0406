//생년월일 받는 함수
let nyear;
function cal(nyear, nmonth, nday){
    console.log(`생년월일\n ${nyear}-0${nmonth}-0${nday}`);
    let date=new Date();
    let year=date.getFullYear()-nyear-1;
    console.log(`만 나이\n귀하의 만 나이는 ${year} 입니다.`);
}

cal(1995, 3, 4);