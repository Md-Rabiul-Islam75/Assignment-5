// Add money at Noakhali


document.getElementById('noakhali-btn').addEventListener('click', function(){

    //console.log('clicked');
    const money = moneyFromTextField('noakhali-balance');

    const money_want_to_give = moneyFromInputField('noakhali-input');

    if(isNaN(money_want_to_give))
    {
        alert('Please input only the number. Thank You.');
        return;
    }


    const main_balance = moneyFromTextField('my-balance');

    console.log(money, money_want_to_give, main_balance);

    if(money_want_to_give > main_balance || main_balance < 0)
    {
        alert('Sorry! Be patience, check your main balance carefully. Thank You.');
        return;
    }
    else
    {
         
         
        
        const new_main_balance = main_balance - money_want_to_give;
         document.getElementById('my-balance').innerText = new_main_balance;
         
         const new_noakhali_balance = money + money_want_to_give;
         document.getElementById('noakhali-balance').innerText = new_noakhali_balance;

         alert('Congrats! You Have Donated for Humankind Successfully');


        //  Transactional history

        const now = new Date();
            // const hours = now.getHours().toString().padStart(2, '0');
            // const minutes = now.getMinutes().toString().padStart(2, '0');
            // const seconds = now.getSeconds().toString().padStart(2, '0');

        const div = document.createElement('div');
        div.innerHTML = `
        <h3 class="font-bold"> ${money_want_to_give} Taka is Donated for Flood at Noakhali, Bangladesh</h3> 
       <p>Date: ${now.toLocaleDateString()} ${now.toLocaleTimeString()} </p>

        `

        document.getElementById('transaction-container').appendChild(div);


        
    }
});


// Add money at Feni

document.getElementById('feni-btn').addEventListener('click', function(){

    console.log('clicked');
    const money = moneyFromTextField('feni-balance');

    const money_want_to_give = moneyFromInputField('feni-input');

    if(isNaN(money_want_to_give))
        {
            alert('Please input only the number. Thank You.');
            return;
        }


    const main_balance = moneyFromTextField('my-balance');

    console.log(money, money_want_to_give, main_balance);

    if(money_want_to_give > main_balance || main_balance < 0)
    {
        alert('Sorry! Be patience, check your main balance carefully. Thank You.');
        return;
    }
    else
    {

        

         const new_main_balance = main_balance - money_want_to_give;
         document.getElementById('my-balance').innerText = new_main_balance;
         
         const new_noakhali_balance = money + money_want_to_give;
         document.getElementById('feni-balance').innerText = new_noakhali_balance;

         alert('Congrats! You Have Donated for Humankind Successfully');


        //${now.toLocaleDateString()} ${now.toLocaleTimeString()}

        //  Transactional history

        const now = new Date();
            // const hours = now.getHours().toString().padStart(2, '0');
            // const minutes = now.getMinutes().toString().padStart(2, '0');
            // const seconds = now.getSeconds().toString().padStart(2, '0');

        const div = document.createElement('div');
        div.innerHTML = `
        <h3 class="font-bold"> ${money_want_to_give} Taka is Donated for Flood Relief in Feni,Bangladesh</h3> 
       
        <p>Date: ${now.toLocaleDateString()} ${now.toLocaleTimeString()} </p>

        `

        document.getElementById('transaction-container').appendChild(div);


    }
});


// Add Money at Quota Movement

document.getElementById('movement-btn').addEventListener('click', function(){

    console.log('clicked');
    const money = moneyFromTextField('movement-balance');

    const money_want_to_give = moneyFromInputField('movement-input');

    if(isNaN(money_want_to_give))
        {
            alert('Please input only the number. Thank You.');
            return;
        }


    const main_balance = moneyFromTextField('my-balance');

    console.log(money, money_want_to_give, main_balance);

    if(money_want_to_give > main_balance || main_balance < 0)
    {
        alert('Sorry! Be patience, check your main balance carefully. Thank You.');
        return;
    }
    else
    {
       

         const new_main_balance = main_balance - money_want_to_give;
         document.getElementById('my-balance').innerText = new_main_balance;
         
         const new_movement_balance = money + money_want_to_give;
         document.getElementById('movement-balance').innerText = new_movement_balance;

         alert('Congrats! You Have Donated for Humankind Successfully');


          //  Transactional history

        const now = new Date();
        // const hours = now.getHours().toString().padStart(2, '0');
        // const minutes = now.getMinutes().toString().padStart(2, '0');
        // const seconds = now.getSeconds().toString().padStart(2, '0');

    const div = document.createElement('div');
    div.innerHTML = `
    <h3 class="font-bold"> ${money_want_to_give} Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh</h3> 
    
    <p>Date: ${now.toLocaleDateString()} ${now.toLocaleTimeString()} </p>

    `

    document.getElementById('transaction-container').appendChild(div);
    }
});


document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('transaction-form').classList.add('hidden');
    document.getElementById('donation-form').classList.add('hidden');

    //remove

    document.getElementById('donation-form').classList.remove('hidden');

});

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('transaction-form').classList.add('hidden');
    document.getElementById('donation-form').classList.add('hidden');


    // remove 
    document.getElementById('transaction-form').classList.remove('hidden');
})



// Blog button clicked 

document.getElementById('blog-btn').addEventListener('click', function(){


    window.open('blog.html', '_self');

     
       
});


