// const field = document.querySelector('#field');
// const selectedField= field.options[field.selectedIndex].value;

function whatRm(rmPer,self){
    var result= document.querySelectorAll('span');

    var weight = document.querySelector('#weight');
    var selectedWeight=  Number(weight.value);
    for(var i=0;i<10;i++){  
        result[i].innerText=(selectedWeight*rmPer[i]/self).toFixed(2); 
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
    var rmPer =[100,95,93,90,87,85,82,80,77,75];
    
if(selectedWeight===0|| selectedCount==="반복횟수(10회이하)"){
    alert("모두 입력하세요!");
} 
else{
    showed();
    switch(selectedCount){
        case "1":
            whatRm(rmPer,rmPer[0]);
            break;
        case "2":
            whatRm(rmPer,rmPer[1]);
            break;
        case "3":
            whatRm(rmPer,rmPer[2]);
            break;
       case "4":
            whatRm(rmPer,rmPer[3]);
            break;
        case "5":
            whatRm(rmPer,rmPer[4]);
            break;    
        case "6":
            whatRm(rmPer,rmPer[5]);
             break;
        case "7":
            whatRm(rmPer,rmPer[6]);
            break;
        case "8":
            whatRm(rmPer,rmPer[7]);
            break;
        case "9":
            whatRm(rmPer,rmPer[8]);
            break;  
        default:
            whatRm(rmPer,rmPer[9]);
            break;
    }


}


}



