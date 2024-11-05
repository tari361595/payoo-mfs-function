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

}
else{
    alert('no money for you')
}


})
