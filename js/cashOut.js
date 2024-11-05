document.getElementById('btn-cash-out-money')
.addEventListener('click', function(event){
event.preventDefault();

const cashOutAmount = getInputFieldValueById('input-cash-out-money');
const cashOutPin = getInputFieldValueById('add-cash-out-pin');

console.log('clicked cash out button', cashOutAmount, cashOutPin);
})
