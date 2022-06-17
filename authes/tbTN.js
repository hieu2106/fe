function createRow(rowData) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.matiennghi}</td>
          <td>${rowData.tentiennghi}</td>
          <td>${rowData.tinhtrang}</td>
          <td>${rowData.soluong}</td>
          <td><a href="form-edittn.html?id=${rowData.id}"><button class="btn btn-danger btn-anim" onclick="updateDVById(${rowData.id});"><i class="fa fa-pencil-square-o"></i><span class="btn-text">edit</span></button></a></td>
          <td><button class="btn btn-danger btn-anim" onclick="delTN(${rowData.id})"><i class="fa fa-trash-o"></i><span class="btn-text">delete</span></button></td>
      </tr>
    `;
    return row;
  }
  
  (async function () {
    const foodTable = document.querySelector("#foods_table tbody");
    // const URL = "http://localhost:3000/food";
    const foods = await getAllTN();
    if (foods.length) {
      for (const food of foods) {
        foodTable.appendChild(createRow(food));
      }
    }
  })();
  
  function delTN(id){
    deleteTN(id);
    window.location.reload();
  }