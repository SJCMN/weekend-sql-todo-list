console.log('HELLO From JS');


$(document).ready(onReady);

function onReady() {
    console.log('JQ Ready Now');
    $('#addTask').on('click', addTask)
    $('#listArea').on('click', '.deleteBtn', deleteTask)
    $('#listArea').on('click', '.completeBtn', completeTask)
    getTasks();
}


function addTask(){
    let newTask = {task: $('#taskIn').val()};
    console.log('In addTask:', newTask);
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: newTask 
    })
    .then(function( response ) {
        console.log( 'Got response', response );
        getTasks();
        $('#taskIn').val('')
      })
      .catch( function(error) {
       console.log('Error sending new tasks', error);
      })
    
}

function completeTask() {
    
    let taskToUpdate = {
        completedStatus : $( this ).data('id'),
        completedId : $( this ).closest('div').data('id')
    }
   
    taskToUpdate.completedStatus = !taskToUpdate.completedStatus;
 
    $.ajax({
        method: 'PUT',
        url: '/tasks',
        data: taskToUpdate
    })
    .then(function( response ) {
        console.log( 'Got response', response );
        getTasks();
      })
      .catch( function(error) {
        console.log('Error updating tasks', error);
      })
}

function deleteTask(){
    
        let id = $( this ).data('id');
        console.log('In deleteTask', this, id);
        $.ajax({
            method: 'DELETE',
            url: `/tasks/${id}`
        })
        .then(function( response ) {
            console.log( 'Got response', response );
            getTasks();
          })
          .catch( function(error) {
            console.log('Error deleting tasks', error);
          })
  
}

function getTasks() {
    console.log('In getTasks');
    // call to server to request all tasks
        $.ajax({
          method: 'GET',
          url: '/tasks',
        })
          .then( function( response ) {
            console.log( 'Got response', response )
            renderTasks( response );
          })
          .catch( function(error) {
            console.log('Error getting tasks', error);
          })
      }
  

function renderTasks( tasks ) {
    console.log('In renderTasks');
    // add toggle render
    let eachTask
    // clear DOM of any tasks
        $('#listArea').empty();
    // loop over each task
        for ( let task of tasks ) {
            if (task.isComplete === true){

                eachTask = $(`
            <div class="input-group" data-id="${task.id}">
                <li class="form-control taskOut taskComplete" >${task.task}</li>
                <button class="btn btn-outline-secondary completeBtn taskComplete" data-id="${task.isComplete}">Complete Task</button>
                <button class="btn btn-outline-secondary deleteBtn" data-id="${task.id}">Delete Task</button>
            </div>
            `);

            } else {
            eachTask = $(`
            <div class="input-group" data-id="${task.id}">
                <li class="form-control taskOut" >${task.task}</li>
                <button class="btn btn-outline-secondary completeBtn" data-id="${task.isComplete}">Complete Task</button>
                <button class="btn btn-outline-secondary deleteBtn" data-id="${task.id}">Delete Task</button>
            </div>
            `);

            // if (eachTask.task.isComplete === true) {
            //     eachTask.addClass('completed')
            // }
            
            }
    // render to DOM each task

    $('#listArea').append(eachTask)

}
}

  