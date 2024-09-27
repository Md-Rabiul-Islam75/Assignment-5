//function 

// from input field
function moneyFromInputField(id){

    const money = document.getElementById(id).value;

    const realMoney = parseFloat(money);

    return realMoney;
}

// from text field

function moneyFromTextField(id){
    const money = document.getElementById(id).innerText;

    const realMoney = parseFloat(money);

    return realMoney;
}

