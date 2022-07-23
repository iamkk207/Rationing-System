
var selectedRow = null;

function onFormSubmit(){
   var formData = readForm(); 
   if(selectedRow === null){
    insertNewRecord(formData);
   }else{
        updateRecord(formData);
   }

   reset();
}

function readForm(){
    var data = {};
    data["packet"] = document.getElementById("packet").value;
    data["type"] = document.getElementById("type").value;
    data["content"] = document.getElementById("content").value;
    data["calories"] = document.getElementById("calories").value;
    data["date"] = document.getElementById("date").value;
    data["quantity"] = document.getElementById("quantity").value;
    return data;

}

function insertNewRecord(data){
    var table = document.getElementById("rationList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.packet;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.type;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.content;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.calories;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.date;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.quantity;
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button class = "btn1" onclick ='onEdit(this)'>edit</button>
                        <button class = "btn1 "onclick ='onDelete(this)'>delete</button>`;

}

function reset()
{
    document.getElementById("packet").value ="";
    document.getElementById("type").value ="";
    document.getElementById("content").value ="";
    document.getElementById("calories").value="";
    document.getElementById("date").value="";
    document.getElementById("quantity").value="";
}

//Edit the data

function onEdit(td){
    selectedRow = td.parentElement.parentElement; 
    document.getElementById("packet").value = selectedRow.cells[0].innerHTML;
    document.getElementById("type").value =  selectedRow.cells[1].innerHTML;
    document.getElementById("content").value = selectedRow.cells[2].innerHTML;
    document.getElementById("calories").value = selectedRow.cells[3].innerHTML;
    document.getElementById("date").value = selectedRow.cells[4].innerHTML;
    document.getElementById("quantity").value= selectedRow.cells[5].innerHTML;

}

function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.packet;
    selectedRow.cells[1].innerHTML = formData.type;
    selectedRow.cells[2].innerHTML = formData.content;
    selectedRow.cells[3].innerHTML = formData.calories;
    selectedRow.cells[4].innerHTML = formData.date;
    selectedRow.cells[5].innerHTML = formData.quantity;
}

//Delete the data

function onDelete(td){
    if(confirm("Do you want to delete this record ?")){
        row = td.parentElement.parentElement;
        document.getElementById("rationList").deleteRow(row.rowIndex);
    }

   reset();  
}
