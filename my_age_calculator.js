function ageage(){

const date=new Date();
const mon=(date.getMonth()+1);
const day=date.toLocaleDateString();
const year=date.getFullYear();


while(true){
let resultY=Number(prompt("출생년도를 입력하세요.", 2001));

let resultM=Number(prompt("출생달을 입력하세요.",11));

let resultD=Number(prompt("출생일을 입력하세요",05));


let Mdm=resultM-mon;
let dm=resultD-day;
let age1=year-resultY;
let age2=year-resultY-1;

if(Mdm==0){
    if(dm<=0){
      alert("만나이는"+ age1+"입니다.");}
    else{
       alert("만나이는"+age2+"입니다.");}}
    else if(Mdm<0){ alert("만나이는"+ age1+"입니다.");
    }
else{ alert("만나이는"+ age2+"입니다.");
}
break;    
}}
console.log(ageage());

