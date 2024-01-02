console.log(document)
console.log(document.querySelector('h1'))
document.querySelector('h1').textContent = 'Text from JS';
console.log(document.querySelector('h1'))

console.log('--------------------------------')

console.log(document.querySelector('.h3-1'))
console.log(document.querySelector('.h3-2'))
console.log(document.querySelector('#p-1'))
console.log(document.getElementById('p-1'))
console.log(document.querySelectorAll('.h3-1'))

console.log('--------------------------------')

const parrafo = document.querySelector('#p-1');
parrafo.textContent = 'Text with textContent' //
parrafo.innerHTML = '<b>Text with innerHTML</b>' //Can include labels
parrafo.classList.add('p-2')