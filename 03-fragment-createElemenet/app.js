const list = document.getElementById('list');

const listOfElements = ['1 item', '2 item', '3 item']

const fragment = document.createDocumentFragment()

listOfElements.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item

    const childNode = fragment.firstChild
    console.log(item,'-',childNode)
    // fragment.insertBefore(item,childNode)

    fragment.appendChild(li)
})

list.appendChild(fragment)