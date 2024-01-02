const list = document.getElementById('list');
console.log(list)

const li = document.createElement('li');
li.textContent = '1 element';

list.appendChild(li)

const listOfItems = [
    '2 element',
    '3 element',
    '4 element',
]

// listOfItems.forEach(item=>{
//     console.log(item)
//     const li = document.createElement('li')
//     li.textContent = item;
//     list.append(li)
// })

listOfItems.forEach(item=>{
    list.innerHTML += `<li>${item}</li>`
})