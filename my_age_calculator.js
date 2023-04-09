
let input = prompt('연도-월-일');
document.write(input);
//생년월일 입력받기
let birthday = new Date(input);
//생일함수에 입력받은 값 넣기
let today = new Date();
//현재 날짜 시간
let years = today.getFullYear() - birthday.getFullYear();
//현재날연도에서 태어난 연도 빼기
 
birthday.setFullYear(today.getFullYear());
 
if (today < birthday) //생일 월이 현재 월을 지나지 않았을 경우 만나이 -1하기
{
    years--;
}
document.write("귀하의 만나이는" + years + "세 입니다.");
//만나이 출력하기