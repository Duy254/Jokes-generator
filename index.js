const bt = document.getElementById("btn");
const joker = document.getElementById("joke");
const apiKey = "B1MpB/XKVviwgJScrR5bag==k5akt8VjrNerb8t4";

const option = {
    method: 'GET',
    headers: {
        'X-Api-Key': "B1MpB/XKVviwgJScrR5bag==k5akt8VjrNerb8t4",
    },
}

const URL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function addJoke()
{
    try{
        joker.innerText = "Updating";
        bt.disabled = true;
        bt.innerText = "Loading...";
        const response = await fetch(URL, option);
        const data = await response.json();
        // console.log(data);
        bt.disabled = false;
        bt.innerText = "Tell me a joke";
        joker.innerText = data[0].joke;
    }
    catch(error){
        joker.innerText = "An error happened, please try again later";
        console.log(error);
    }
}
bt.addEventListener("click", addJoke);