document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // console.log('clicked add money');
        
    //  const addMoney = document.getElementById('input-add-money').value;
    //  const addMoneyNumber = parseFloat(addMoney);
    // const addMoney = getInputfieldValueById();
    // console.log('added mmoney',addMoney);
    const addMoney = getInputFieldValueById('input-add-money');
    const addPin = getInputFieldValueById('add-input-pin');
    if(addPin === 1234){
        const balance = getTextFieldValueById('account-balance');
        // console.log(balance,addMoney);
        const newBalance = addMoney + balance;
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;

        // add transaction history
        const p = document.createElement('p');
        p.innerText = `add:${addMoney} tk. balance:${newBalance}`;
        console.log(p);

        // shoud be a common function 
        document.getElementById('transaction-container').appendChild(p);

    }
    else{
        alert('failed add to the money.')
    }
    
    



    });