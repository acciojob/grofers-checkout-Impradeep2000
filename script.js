const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table= document.getElementById("table");

const getSum = (event) => {
//Add your code here
	event.preventDefault();
	  var table = document.getElementById("table"), sumVal = 0;
            
            for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
            }
	let newRow= document.createElement("tr");
	let newCell= document.createElement("td");
	let newCell2= document.createElement("td");
	newCell2.textContent= "Sum";
	newCell.textContent= sumVal;
	newRow.append(newCell2,newCell);
	table.appendChild(newRow)
	
	 // document.getElementById("val").innerHTML = "Sum Value = " + sumVal;
            console.log(sumVal); 
            
  
};



getSumBtn.addEventListener("click", getSum);