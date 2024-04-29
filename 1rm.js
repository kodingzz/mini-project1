// const field = document.querySelector('#field');
// const selectedField= field.options[field.selectedIndex].value;

function whatRm(self){
    var weight = document.querySelector('#weight');
    var result= document.querySelectorAll('span');
    var selectedWeight=  Number(weight.value);
    var Rm=[0,0,0,0,0,0,0,0,0,0];
    var per =[100,95,93,90,87,85,82,80,77,75];
    for(var i=0;i<10;i++){
        Rm[i]=selectedWeight*per[i]/self;  
        result[i].innerText=Rm[i].toFixed(2); 
    }
}

function showed(){
    var ss =document.querySelector('.rmResult');
    ss.classList.remove('hide');
}


function RmCal(){
    var count= document.querySelector('#count');
    var weight = document.querySelector('#weight');
    var selectedCount= count.options[count.selectedIndex].value;
    var selectedWeight=  Number(weight.value);
    var per =[100,95,93,90,87,85,82,80,77,75];
    
if(selectedWeight===0|| selectedCount==="반복횟수(10회이하)"){
    alert("모두 입력하세요!");
} 
else{
    showed();
    switch(selectedCount){
        case "1":
            whatRm(100);
            break;
        case "2":
            whatRm(95);
            break;
        case "3":
            whatRm(per[2]);
            break;
       case "4":
            whatRm(per[3]);
            break;
        case "5":
            whatRm(per[4]);
            break;    
        case "6":
            whatRm(per[5]);
             break;
        case "7":
            whatRm(per[6]);
            break;
        case "8":
            whatRm(per[7]);
            break;
        case "9":
            whatRm(per[8]);
            break;  
        default:
            whatRm(75);
            break;
    }
  
    // result.innerText = Rm[0].toFixed(2);
    // result2.innerText = Rm[1].toFixed(2);
    // result3.innerText = Rm[2].toFixed(2);
    // result4.innerText = Rm[3].toFixed(2);
    // result5.innerText = Rm[4].toFixed(2);
    // result6.innerText = Rm[5].toFixed(2);
    // result7.innerText = Rm[6].toFixed(2);
    // result8.innerText = Rm[7].toFixed(2);
    // result9.innerText = Rm[8].toFixed(2);
    // result10.innerText = Rm[9].toFixed(2);


}


}



