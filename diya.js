 const add = document.getElementById("add");
const tablebody = document.getElementById("tablebody");

add.addEventListener("click", getupdate);

function getupdate() {
  console.log("updating list...");
  const tit = document.getElementById("title").value;
  const des = document.getElementById("description").value;

  let itemjsonArray = JSON.parse(localStorage.getItem("itemjson")) || [];

  itemjsonArray.push([tit, des]);
  localStorage.setItem("itemjson", JSON.stringify(itemjsonArray));

  updateTable();
}

function updateTable() {
  let str = "";
  const itemjsonArray = JSON.parse(localStorage.getItem("itemjson")) || [];

  itemjsonArray.forEach((element, index) => {
    str += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="delete" data-index="${index}">Delete</button></td>
         </tr>`;
  }); 

  tablebody.innerHTML = str;

  // Attach event listeners to delete buttons
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemIndex = parseInt(button.getAttribute("data-index"));
      deleted(itemIndex);
    }); 
  }); 
}

function deleted(itemIndex) {
  console.log("delete", itemIndex);
  let itemjsonArray = JSON.parse(localStorage.getItem("itemjson")) || [];
  itemjsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemjson", JSON.stringify(itemjsonArray));
  updateTable();
}

// Initialize the table when the page loads
updateTable();




  



 
 

 

 
  



