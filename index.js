const todos = [];
// Ocupamos el render para que al eliminar una TransformStream,
// se actualicen los indices
const render = () => {
  const todoList = document.querySelector('#todo-list')
  todoList.innerHTML = '';
  const todosTemplate = todos.map(t => {
    return '<li>' + t + '</li>'
  })
  todoList.innerHTML = todosTemplate.join('');
  const elementos = document.querySelectorAll('#todo-list li')
  elementos.forEach((elemento,i)=>{
    elemento.addEventListener('click', () => {
      elemento.parentNode.removeChild(elemento)
      todos.splice(i,1)
      render()
      console.log(todos,i);
    })
  })
}
window.onload = () =>{
const form = document.querySelector("#todo-form");
form.onsubmit = (e) =>{
  e.preventDefault();
  const todo = document.querySelector("#todo");
  const todoText = todo.value;
  todo.value = '';
  console.log(todoText);
  todos.push(todoText);
  render();
 }
 
}