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
    const response = await fetch(URL, option);
    const data = await response.json();
    // console.log(data);
    joker.innerText = data[0].joke;
}
bt.addEventListener("click", addJoke);