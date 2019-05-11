 
console.log('fetch api')

fetch('http://puzzle.mead.io/puzzle').then((resp)=>resp.json()).
then((data)=>{
    console.log(data)

})



//item1=document.getElementById("search")
final=document.getElementById('forecast')

item1=document.querySelector('form')
item1.addEventListener('submit',(event)=>{

    final.innerHTML="loading......."
    event.preventDefault()
    place=document.getElementById('place').value
     
    fetch('/weather?address='+place).then((resp)=>resp.json()).
    then((data)=>{
    final.innerHTML=data.msg;
    console.log(data)
    
})

     console.log('working fine')
})

