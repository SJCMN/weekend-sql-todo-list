console.log('HELLO From JS');

$(document).ready(function () {
    console.log('JQ Ready Now');
    
    //click listener for add button
    handleClickListeners();

    // GET lists and list items from db
    getTasks();
}); // end doc ready

function handleClickListeners() {

    // listener for new list
    $('#newList').keyup(newList)

    // listener for new task items
    // adds empty string
    // $('#listArea').keyup('.taskList', collectTasks)
    // $('.taskList').keyup( collectTasks )
}

function getTasks() {
    console.log('In getTasks');
    
    // get route for tasks
}

// add new singleList
function newList(e) {
    console.log('In newList');
    if (e.key === "Enter"){
        let list = $("input:text").focus().select()[0].value
        // console.log('You pressed the Enter Key after adding a new list: ', list);
        $('#listArea').append(`

        <div class="singleList p-2"> 
            <div class="input-group input-group-lg shadow-sm">
                <input type="text" class="form-control inputActive" placeholder="${list}" aria-label="Example text with button addon" aria-describedby="button-addon1">
                <span class="input-group-text " >${Date().slice(0,10)}</span>
            </div>

        <ul class="list-group shadow-sm taskList">
            <li class="list-group-item list-group-item-action ">
                <input class="form-control inputActive" type="text" value="" placeholder="New Item">

        </ul>
        <div class="input-group shadow-sm">
            <select class="form-select" name="affectSelected">
                <option value="Update Selected">Update</option>
                <option value="Archive Selected">Archive</option>
                <option value="Delete Selected">Delete</option>
            </select>
            <button class="btn btn-outline-secondary deleteBtn " type="button">Selected</button>
        </div>
    </div>
        `)
        $("input:text").focus().select()[0].value = ''
    }
    $('.taskList').keyup( collectTasks )
}


// add new <li> with text within input upon enter
function collectTasks(e) {
    // console.log('In collectTasks');
    
    if (e.key === "Enter") {
       let task = $(document.activeElement).val()
        // $("input:text").focus().select()[2].value
        // let findTask = $(this).focus().select()
        console.log('collectTasks - You pressed the Enter Key after typing: ', task);
     
        // set variable for new text    
        newTask = (`
            <li class="list-group-item list-group-item-action ">
                 <input class="form-check-input me-1 radioActive" type="checkbox" value="">
                 ${task}
            </li>
          `);

        taskList = $(document.activeElement).closest('ul')
        console.log('this is the taskList target:', taskList);

        // append the list with the task text
        taskList.append( newTask );  
        $(document.activeElement).val('')
    }
}
