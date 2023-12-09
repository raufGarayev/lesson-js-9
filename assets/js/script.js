const todoInput = document.querySelector('input')
const todoAddBtn = document.querySelector('button')
const todoContainer = document.querySelector('.todo-list')

todoAddBtn.addEventListener('click', function(e) {
    e.preventDefault()

    const todoItem = todoInput.value

    const todos = localStorage.getItem('todos')

    if(todos) {
        const localTodos = JSON.parse(todos)
        localTodos.push(todoItem)

        localStorage.setItem('todos', JSON.stringify(localTodos))
    } else {
        const localTodos = []
        localTodos.push(todoItem)

        localStorage.setItem('todos', JSON.stringify(localTodos))
    }

    const todoListItem = document.createElement('div')
    todoListItem.classList = "todo-list_item"
    const todoListItemIcons = document.createElement('div')
    todoListItemIcons.classList = "todo-list_item-icons"
    const todoText = document.createElement('p')
    todoText.innerText = todoInput.value

    todoListItemIcons.innerHTML = '<i class="fa-solid fa-check"></i><i class="fa-solid fa-trash"></i>'

    todoListItem.appendChild(todoText)
    todoListItem.appendChild(todoListItemIcons)

    todoContainer.appendChild(todoListItem)

    todoInput.value = ""

    const checkBtn = document.querySelectorAll('.fa-check')
    const delBtn = document.querySelectorAll('.fa-trash')

    checkBtn.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.target.parentElement.previousSibling.classList = "finished"
        })
    })

    delBtn.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.target.parentElement.parentElement.remove()
        })
    })
})
