let age;
const current = new Date()
const birthYear = new Date('2003-03-11');
//만 나이 계산 => 현재 연도에서 출생 연도를 뺀 후 생일이 지났으면 그대로, 생일이 안 지났으면 1살을 빼줌
 if(birthDay.getMonth() < current.getMonth()  ){
    age = current.getFullYear() - birthYear.getFullYear();
 }else {
    age = current.getFullYear() - birthYear.getFullYear() - 1;
 }
