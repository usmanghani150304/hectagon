let todos = [
    { title: "Title 1", date: new Date(), id: "uniqueId1", isCompleted: false },
    { title: "Title 2", date: new Date(), id: "uniqueId2", isCompleted: false },
    { title: "Title 3", date: new Date(), id: "uniqueId3", isCompleted: false },
];
    console.log(todos[1].title);
function createTodo() {
    const newTodo = { title: "Title 4", date: new Date(), id: "uniqueId4", isCompleted: false };
    todos.push(newTodo);
    console.log("Todo Created:", newTodo);
}

function readTodos() {
    console.log("Todos:", todos);
}

function updateTodo () {
    todos=todos.map(element=>{
        if(element.title==="Title 2"){
        return{...element,isCompleted:true}
    }
    return element
})
}


function deleteTodo  (){
    todos=todos.filter(todo => todo.title !=="Title3")
   
}

function showTable() {
    document.getElementById('tbody').innerHTML = ""
    todos.forEach(todo => {
        document.getElementById('tbody').innerHTML += `<tr><td>${todo.title}</td><td>${todo.date}</td><td>${todo.id}</td><td>${todo.isCompleted}</td></tr>`
    })
}