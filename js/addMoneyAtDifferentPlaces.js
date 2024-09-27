// Add money at Noakhali


document.getElementById('noakhali-btn').addEventListener('click', function(){

    console.log('clicked');
    const money = moneyFromTextField('noakhali-balance');

    const money_want_to_give = moneyFromInputField('noakhali-input');


    const main_balance = moneyFromTextField('my-balance');

    console.log(money, money_want_to_give, main_balance);

    if(money_want_to_give > main_balance || main_balance < 0)
    {
        alert('Sorry! Be patience, check carefully. Thank You.');
        return;
    }
    else
    {
         const new_main_balance = main_balance - money_want_to_give;
         document.getElementById('my-balance').innerText = new_main_balance;
         
         const new_noakhali_balance = money + money_want_to_give;
         document.getElementById('noakhali-balance').innerText = new_noakhali_balance;
    }
});


// Add money at Feni

document.getElementById('feni-btn').addEventListener('click', function(){

    console.log('clicked');
    const money = moneyFromTextField('feni-balance');

    const money_want_to_give = moneyFromInputField('feni-input');


    const main_balance = moneyFromTextField('my-balance');

    console.log(money, money_want_to_give, main_balance);

    if(money_want_to_give > main_balance || main_balance < 0)
    {
        alert('Sorry! Be patience, check carefully. Thank You.');
        return;
    }
    else
    {
         const new_main_balance = main_balance - money_want_to_give;
         document.getElementById('my-balance').innerText = new_main_balance;
         
         const new_noakhali_balance = money + money_want_to_give;
         document.getElementById('feni-balance').innerText = new_noakhali_balance;
    }
});


// Add Money at Quota Movement

document.getElementById('movement-btn').addEventListener('click', function(){

    console.log('clicked');
    const money = moneyFromTextField('movement-balance');

    const money_want_to_give = moneyFromInputField('movement-input');


    const main_balance = moneyFromTextField('my-balance');

    console.log(money, money_want_to_give, main_balance);

    if(money_want_to_give > main_balance || main_balance < 0)
    {
        alert('Sorry! Be patience, check carefully. Thank You.');
        return;
    }
    else
    {
         const new_main_balance = main_balance - money_want_to_give;
         document.getElementById('my-balance').innerText = new_main_balance;
         
         const new_noakhali_balance = money + money_want_to_give;
         document.getElementById('movement-balance').innerText = new_noakhali_balance;
    }
});

