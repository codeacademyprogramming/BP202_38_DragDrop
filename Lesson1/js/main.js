// let box = document.querySelector('.box');

// box.addEventListener('click',function(e){
//     console.log(e)
//     console.log('page:'+e.pageY)
//     console.log('screen:'+e.screenY)
//     console.log('offset:'+e.offsetY)
//     console.log('client:'+e.clientY)

// })

let select  = document.getElementById('brand');

select.addEventListener('change',function(e){
    console.log(this.value)
})

console.log(select)