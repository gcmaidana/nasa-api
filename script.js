sendAPIRequest()

async function sendAPIRequest()
{
  let API_KEY = "TgfKXpXNuYqnpPO3E9CMu27I7Gb77fUa5mT3aLJa"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

function useApiData(data)
{
  document.querySelector("#title").innerHTML += data.title
  document.querySelector("#content").innerHTML += data.explanation
   document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}