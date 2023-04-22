const input = document.querySelector('#input')
const creatButton = document.querySelector('#creat_button')
const todoList = document.querySelector('#todo_list')
const creatTodo = () => {
    if (!input.value.trim()) {
        input.value = ''
        return false
    }else {
        const div = document.createElement('div')
        const text = document.createElement('h3')

        div.setAttribute('class','block_text')
        text.innerHTML = input.value

        div.append(text)
        todoList.prepend(div)
        input.value = ''
    }
    return input.value = ''
}

creatButton.onclick = () => creatTodo()
window.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') creatTodo()
})
document.querySelector('#delete_button').forEach(item => {
    item.addEventListener('click', event => {
        item.parentNode.remove()
  })
})
document.getElementById('edit_button').onclick=function(){ prompt("todo_list") }






