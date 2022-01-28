/* 
* Object.preventExtension impede a adição de novos elementos no obj, 
* mas modificar e excliur ainda é possivel 
*/

const produto = Object.preventExtensions({
    nome:'qualquer',preco: 1.99,  tag: 'promoção' 
})


// Object.seal: não se pode adicionar e nem excluir elementos, porém pode haver modificação

const pessoa = {nome: 'julia',idade: 35}
Object.seal (pessoa)
console.log ('selado? ',Object.isSealed(pessoa))

//Object.freeze: não é possivel modificar,adicional e excluir elementos