const input=document.getElementsByTagName('input')[0]
const buttons=document.querySelectorAll('.buttons')
let arr=Array.from(buttons)
let string=''
arr.forEach((btn)=>{
   
    btn.addEventListener('click',(e)=>{
        console.log(e.target);
        e.preventDefault()
       if (e.target.innerHTML=="=") {
        string=eval(string)
        input.value=string
        
        
       }
       else if(e.target.innerHTML=="AC"){
        string=""
        input.value=string
       

       }else if(e.target.innerHTML=="DEL"){
        string=string.substring(0,string.length-1)
        input.value=string

       }
       else{
        string+=e.target.innerHTML
        input.value=string
       }
       
       
    })

})