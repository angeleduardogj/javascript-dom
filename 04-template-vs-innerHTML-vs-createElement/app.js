const ul = document.querySelector('#list')

const listOfElements = [
    'item 1',
    'item 2',
    'item 3',
]

//Fragments
// const fragment = document.createDocumentFragment()

// listOfElements.forEach(item => {
//     const li = document.createElement('li');
//     li.classList.add('list')

//     //add <b>
//     const b = document.createElement('b')
//     b.textContent = 'name: '

//     //add <span>
//     const span = document.createElement('span')
//     span.textContent = item
//     span.classList.add('text-danger')

//     //push like child li
//     li.appendChild(b)
//     li.appendChild(span)

//     //push to fragment
//     fragment.appendChild(li)
// })

// ul.appendChild(fragment)

//InnerHtml
// let structure = '';
// listOfElements.forEach(item => {
//     structure += `<li class="list">
//     <b>Name: </b> <span class="text-danger">${item}</span>
//     </li>`;
// })
// ul.innerHTML = structure;

//Template
const template = document.querySelector('#template-li').content
const fragment = document.createDocumentFragment()

listOfElements.forEach(item=>{
    template.querySelector('.list .text-danger').textContent = item;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone)
})

ul.appendChild(fragment)


