function createRow(rowData) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.maphong}</td>
          <td>${rowData.dientich}</td>
          <td>${rowData.dongia}</td>
          <td>${rowData.loaiphong}</td>
          <td><a href="form-editphong.html?id=${rowData.id}"><button class="btn btn-danger btn-anim" onclick="updateDVById(${rowData.id});"><i class="fa fa-pencil-square-o"></i><span class="btn-text">edit</span></button></a></td>
          <td><button class="btn btn-danger btn-anim" onclick="delPh(${rowData.id})"><i class="fa fa-trash-o"></i><span class="btn-text">delete</span></button></td>
      </tr>
    `;
    return row;
  }
  
  (async function () {
    const foodTable = document.querySelector("#foods_table tbody");
    // const URL = "http://localhost:3000/food";
    const foods = await getAllPh();
    if (foods.length) {
      for (const food of foods) {
        foodTable.appendChild(createRow(food));
      }
    }
  })();

  function delPh(id){
    deletePh(id);
    window.location.reload();
  }
  