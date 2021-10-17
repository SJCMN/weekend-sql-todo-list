console.log('HELLO From JS');

$(document).ready(function () {
    console.log('JQ Ready Now');
    // Establish Click Listeners
    //click listener for add button
    handleClickListeners();
    // load existing koalas on page load
    getTasks();
  }); // end doc ready
  
  function handleClickListeners() {
  
    // $('#viewKoalas').on('click', '.transferBtn', readyForTransfer)
    // $('#viewKoalas').on('click', '.deleteBtn', handleDelete)
  
    // $('#addButton').on('click', function () {
    //   console.log('in addButton on click');
    //   // get user input and put in an object
    //   // NOT WORKING YET :(
    //   // using a test object
    //   let koalaToSend = {
    //     name: $('#nameIn').val(),
    //     age: $('#ageIn').val(),
    //     gender: $('#genderIn').val(),
    //     readyForTransfer: $('#readyForTransferIn').val(),
    //     notes: $('#notesIn').val(),
    //   };
  
    //   // call saveKoala with the new object
    //   saveKoala(koalaToSend);
    // });
  }
  
  function getTasks() {
      console.log('In getTasks');
      
  }
