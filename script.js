console.log("test");

//
let exampleTodoList = [
    {
        name: "task1",
        description: "descriptionTask1"
    },
    {
        name: "task2",
        description: "descriptionTask2"
    }
];

updateHtmlTable(exampleTodoList);

function updateHtmlTable(todoList) {

    let generateHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        let tableRow = `<tr><td>${todo.name}</td><td>${todo.description}</td></tr>`;

        generateHtml = generateHTML + tableRow
        
    }

    let tableElement = document.getElementsByClassName("table")[0];

    let bodyElement = tableElement.getElementsByTagName('tbody')[0];

    bodyElement.innerHTML = generateHTML;
    
    // foreach todoList
        //generate <tr><td> task1 </td> <td> description2 </td> </tr>
        // merge generate table html
    // get table html element
    //get tbody of that table
    //modify tbody.innerHtml into our newly generated one
    
}