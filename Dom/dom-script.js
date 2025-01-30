// example 1

document.getElementById('change-text').addEventListener('click',function(){
    document.getElementById('mypara1').textContent="paragraph is changed"
})

//example 2

document.getElementById('highlight').addEventListener('click', function(){
    document.getElementById('cityList').firstElementChild.style.backgroundColor="yellow"
    document.getElementById('cityList').firstElementChild.style.color="black"
})

//Example 3

document.getElementById('addItem').addEventListener('click', function(){
   let newItem= document.createElement('li')
   newItem.textContent="Eggs"
    
    document.getElementById('rashanList').appendChild(newItem)
})

//example 4

document.getElementById('removeTask').addEventListener('click', function(){
   let taskList= document.getElementById('taskList');

   taskList.lastElementChild.remove();
})

//example 5

document.getElementById('teaList').addEventListener('click',function(event){

    if (event.target  ) {
        alert(`you selected: ${event.target.textContent}`)
    }
})