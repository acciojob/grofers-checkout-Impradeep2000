const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table=document.getElementsByTagName('table')[0];
	const tdArr=document.querySelectorAll('.price')
	let sum=0;
    tdArr.forEach((ele)=>{
        console.log(ele.innerText);
        sum+=Number.parseInt(ele.innerText);
    })
   
	const tr=document.createElement('tr');
	const td=document.createElement('td');
    td.innerText=sum;
	tr.appendChild(td);
	table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

