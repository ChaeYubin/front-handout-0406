let elBirth = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

function getInternationalAge(){
    let today = new Date();
    let birth = new Date(elBirth.value);
    let todayMonth = today.getMonth() + 1;
    let birthMonth = birth.getMonth() + 1;

    if(birthMonth > todayMonth || (birthMonth === todayMonth && birth.getDate() >= today.getDate())){
        age = today.getFullYear() - birth.getFullYear() - 1;
    } else{
        age = today.getFullYear() - birth.getFullYear();
    }

    elResult.innerText = "귀하의 만 나이는 " + age + " 입니다.";

    return age;
}

elSubmit.addEventListener('click', getInternationalAge);