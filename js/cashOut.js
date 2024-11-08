document.getElementById('btn-cash-out-money')
.addEventListener('click', function(event){
event.preventDefault();

const cashOutAmount = getInputFieldValueById('input-cash-out-money');
const cashOutPin = getInputFieldValueById('add-cash-out-pin');

if(cashOutPin === 1234){
    const balance = getTextFieldValueById('account-balance');
    const newBalance = balance - cashOutAmount;
    console.log(newBalance);
    document.getElementById('account-balance').innerText=newBalance;

    // add cash out transaction history
    const div = document.createElement('div');
div.classList.add('bg-yellow-300');
div.innerHTML = `
    <h4 class="text-2xl font-bold">Cash Out</h4>
    <p>${cashOutAmount} withdrawn. New balance: ${newBalance}</p>
`;
document.getElementById('transaction-container').appendChild(div);
}
else{
    alert('no money for you')
}


})
