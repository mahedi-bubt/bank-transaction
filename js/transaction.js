//get user deposite and set deposite total value
document.getElementById('btn-deposite').addEventListener('click', function () {
    //get deposite field value
    const depositeField = document.getElementById('deposite-amount-field');
    const depositeAmountField = Number(depositeField.value);
    //get deposite amount show
    const showDeposite = document.getElementById('show-deposite-balance');
    const depositeBalanceShow = Number(showDeposite.innerText);
    //console.log(depositeBalance);
    //total amount show
    const totalAmount = document.getElementById('show-current-balance');
    const totalAmountShow = Number(totalAmount.innerText);
    //check it is number or not
    if (isNaN(depositeAmountField)) {
        alert('Please Enter Only Number...');
    } else {
        if (depositeAmountField >= 0) {
            const depositeBalance = depositeAmountField + depositeBalanceShow;
            showDeposite.innerText = depositeBalance;
            //Total Amount
            totalAmount.innerText = depositeBalance;
            depositeField.value = '';
        } else {
            depositeField.value = '';
            alert('Please Enter Positive Number.');
        }
    }
});
//get user withdraw and set withdraw total value
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //get withdraw field value
    const withdrawField = document.getElementById('withdraw-amount-field');
    const withdrawAmountField = Number(withdrawField.value);
    //get deposite amount show
    const showWithdraw = document.getElementById('show-withdraw-balance');
    const withdrawBalanceShow = Number(showWithdraw.innerText);
    //Total Amount
    //let totalAmountShow = 0;
    const totalAmount = document.getElementById('show-current-balance');
    const totalAmountShow = Number(totalAmount.innerText);

    //check it is number or not
    if (isNaN(withdrawBalanceShow)) {
        alert('Please Enter Only Number');
    } else {
        if (withdrawAmountField >= 0) {
            if (totalAmountShow >= withdrawAmountField) {
                const withdrawBalance = withdrawAmountField + withdrawBalanceShow;
                showWithdraw.innerText = withdrawBalance;
                //Total Amount Show
                totalAmount.innerText = totalAmountShow - withdrawAmountField;
                withdrawField.value = '';
            } else {
                alert('You Do not Have Sufficient Balance. Pleasee Deposite Your Balance...');
            }
        } else {
            withdrawField.value = '';
            alert('Please Enter Positive Numbers Only.');
        }
    }
});