let rightList = document.getElementById('list2');

let leftListItems = document.querySelectorAll('#list1 li');

leftListItems.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})

rightList.addEventListener('dragover',function(e){
    e.preventDefault();
})

rightList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    e.target.appendChild(li)
})