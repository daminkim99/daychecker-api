//adds event to the button so that function is run upon clicking 
document.querySelector('.check').addEventListener('click', makeReq)

async function makeReq(){
   const day = document.querySelector('input').value
   // console.log(day)
   try{
    const res = await fetch(`https://muddy-cod-handbag.cyclic.app/api/${day}`)
    const data = await res.json()
    document.querySelector('#answer').innerText = `Mood: ${data}`
    
   } catch(error){
    console.log(error)
   }
}

