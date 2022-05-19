let box = document.querySelector('.box');
let mainBox = document.querySelector('.mainBox');
let boxes = document.querySelectorAll('.box');

// let draggingItem;

boxes.forEach(el=>{
    el.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('boxId',el.getAttribute('data-id'));
        // draggingItem = this;
    })
})


mainBox.addEventListener('dragend',function(e){
    if(e.target==this){
        this.style.left = e.pageX-250+'px';
        this.style.top = e.pageY-175+'px';
    }
})

box.ondragstart = function(){
    console.log('start')
}

// box.ondragend = function(){
//     console.log('end')
// }

// box.ondrag = function(e){
//     console.log('dragging')
//     // this.style.left = e.offsetX-25+'px';
//     // this.style.top = e.offsetY-25+'px';
// }


mainBox.ondragenter = function(){
    console.log('enter')
}

mainBox.ondragleave = function(){
    console.log('leave')
}

mainBox.ondragover = function(e){
    e.preventDefault();
    console.log('over')
}

mainBox.ondrop = function(e){
    console.log(e)
    let boxId = e.dataTransfer.getData('boxId');
    let box = document.querySelector('[data-id='+boxId+']');


    this.appendChild(box);
    // this.appendChild(draggingItem);
}
