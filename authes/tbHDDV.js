function createRow(rowData) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.mahddv}</td>
          <td>${rowData.makh}</td>
          <td>${new Date(rowData.ngaylap).toString()}</td>
          <td>${rowData.manv}</td>
          <td>${rowData.tongtien} VNĐ</td>
          <td><a href="form-editkh.html?id=${rowData.id}"><button class="btn btn-danger btn-anim" onclick="updateKHById(${rowData.id});"><i class="fa fa-pencil-square-o"></i><span class="btn-text">Print</span></button></a></td>       
          <td><button class="btn btn-danger btn-anim" onclick="delKH(${rowData.id})"><i class="fa fa-trash-o"></i><span class="btn-text">delete</span></button></td>
      </tr>
    `;
    return row;
  }
  
  (async function () {
    const foodTable = document.querySelector("#foods_table tbody");
    // const URL = "http://localhost:3000/food";
    const foods = await getAllHDDV();
    if (foods.length) {
      for (const food of foods) {
        foodTable.appendChild(createRow(food));
      }
    }
  })();
  
  // function delKH(id){
  //   deleteKH(id);
  //   window.location.reload();
  // }