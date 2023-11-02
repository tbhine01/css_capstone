function submitOrder(){
    // Selectors
    const fullName = document.getElementById("name").value

    const breadChoice = document.getElementsByClassName("bread")
    let bread

    const meatChoice = document.getElementsByName("meats")
    let meat

    const toppingsChoice = document.getElementsByClassName("toppings")
    let toppings = ""

    const halfOrFull = document.getElementsByClassName("size")
    let size = ""

    const toastSandwich = document.getElementById("toast")
    let toast
    const sliceSandwich = document.getElementById("slice")
    let slice
    let sandwich = ""

    const email = document.getElementById("email").value

    // Condtionals
    // Bread
    for(let i = 0; i < breadChoice.length; i++){
        if(breadChoice[i].checked === true){
            bread = breadChoice[i].value
        }
    }

    // Meat
    for(let i = 0; i < meatChoice.length; i++){
        if(meatChoice[i].checked === true){
            meat = meatChoice[i].value
        }
    }

    // Toppings
    for(let i= 0; i < toppingsChoice.length; i++){
        if(toppingsChoice[i].checked === true){
            console.log(toppingsChoice[i].value)
            toppings += `\n` + toppingsChoice[i].value 
        }
    }

    // Half or Whole
    for(let i = 0; i < halfOrFull.length; i++){
        if(halfOrFull[i].checked === true){
            size = halfOrFull[i].value
        }
    }

    // Toasted and Sliced
    if(toastSandwich.checked === true && sliceSandwich.checked == true){
         sandwich = "We'll make sure it's " + sandwich + toastSandwich.value + " and " + sliceSandwich.value + ", just the way you like!"
    }else if(toastSandwich.checked === true){
        sandwich = "We'll make sure it's " + sandwich + toastSandwich.value +  ", just the way you like!"
    }else if(sliceSandwich.checked === true){
        sandwich = "We'll make sure it's " + sandwich + sliceSandwich.value + ", just the way you like!"
    }else{
         sandwich = "Sounds delicious!"
    }

    alert (`Thank you for your order ${fullName}! Your ${size} ${meat} Sandwich on ${bread} with:  ${toppings} \n${sandwich} \nA confirmation email will be sent to ${email}. Thank you for choosing us!` )
}

