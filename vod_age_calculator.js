let el = document.getElementById('birthday')
let elResult = document.getElementById('result')
let elSubmit = document.getElementById('sebmit')

const today=new Date();

function calculateAge() {
    let birthDate = newDate(el.value);
    let age;

    if (today.getMonth() > birthday.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
         today.getDate() >= birthDate.getDate()))
        {
            age = today.getFullYear() - birthday.getFullYear();
        } else {
            age = today.getFullYear() - birthDate.getFullYear() - 1;
        }


        elResult.innerText=`귀하의 만 나이는 ${age} 입니다.`;


        return age;

}

elSubmit.addEventListener('click', calculateAge);