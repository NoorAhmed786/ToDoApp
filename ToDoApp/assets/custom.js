


document.addEventListener('DOMContentLoaded', function() {
    const inboxBox = document.getElementById("input_box");
    const listContainer = document.getElementsByClassName("list_container")[0];

    function addTask() {
        if (inboxBox.value === "") {
            Swal.fire({
                title: 'Error!',
                text: 'You must write something',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        } else {
            let listItem = document.createElement('li');
            listItem.textContent = inboxBox.value;
            listContainer.appendChild(listItem);
            let span = document.createElement('span');
            span.innerHTML = "\u00d7";
            listItem.appendChild(span);

            // Clear the input field after adding the task
            inboxBox.value = "";
            saveData();
        }
    }

    const addButton = document.getElementById("add_button");
    addButton.addEventListener("click", addTask);


    listContainer.addEventListener('click', function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");

            saveData();
        }else if(e.target.tagName == "SPAN") {
            e.target.parentElement.remove();
            saveData();
    
        }
        
    }, false)
   function saveData(){
    localStorage.setItem ('data', listContainer.innerHTML);
   }
    function showData(){
        listContainer.innerHTML =localStorage.getItem('data');
    }
    showData();
   
});








