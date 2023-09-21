const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.getElementsByTagName('table')[0];
let price = document.querySelectorAll('.price');
let totalPrice = document.createElement('tr');
const getSum = () => {
    //Add your code here
    totalPrice.remove();
    
        let sum = 0;
    
     //let price = document.querySelectorAll('.price');
     for(let i = 0 ; i < price.length; i++){
        //console.log(typeof(price[i].innerHTML));
         sum = sum + parseInt(price[i].innerText); 
     }
   
     totalPrice.innerHTML = ` <td>Total Price</td>
           <td>${sum}</td>`
      table.append(totalPrice);
      sum = 0;
     
    }

getSumBtn.addEventListener("click", getSum);