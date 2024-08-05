let data =[


]
function Addall(){
  localStorage.setItem('object' , JSON.stringify(data))
  tabledata = document.querySelector(".table_data")

  var object = localStorage.getItem('object')
  var objectdata = JSON.parse(object)
  if (objectdata === "") {
    alert("please enter your task")
  } else {
    
 
  var element = ""
  objectdata.map(record =>(
  
    element += `
    <tr >

      <td>${record.Tasks}</td>
      <td>
      <button onclick = "edits(${record.id})" class = "edits" >Edit</button>
      <button onclick = "Del(${record.id})" class = "delete"  >Delete</button>
      </td>
    </tr>
    `
  ))
  
  tabledata.innerHTML = element;
}

}
function create(){
  document.querySelector(".Create_form").style.display = "inline-flex"
  document.querySelector(".update_form").style.display = "none"
  document.querySelector(".add_div").style.display = "none"
}

function add() {
  
  task = document.querySelector(".tasks").value
  let newobj = {id: 3 , Tasks : task}
  data.push(newobj)
   document.querySelector(".Create_form").style.display = "none"
  document.querySelector(".add_div").style.display = "block"
  
  Addall()
}
function edits(id){

  document.querySelector(".update_form").style.display = "inline-flex"
  document.querySelector(".Create_form").style.display = "none"
  document.querySelector(".id").style.display = "none"

  let obj = data.find(record => record.id === id)
  document.querySelector(".Utasks").value = obj.Tasks
  document.querySelector(".id").value = obj.id

}


function Del(id) {
  data = data.filter(rec => rec.id !== id)
  Addall()
}


function update() {
  let id = parseInt(document.querySelector(".id").value);
  let utask = document.querySelector(".Utasks").value;

  let index = data.findIndex(rec => rec.id === id);

  data[index] = {id , utask};
  document.querySelector(".update_form").style.display = "none"

  Addall()
}
