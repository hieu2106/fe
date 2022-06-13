  function createRow(rowData) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <tr>
          <td>${rowData.id}</td>
          <td>${rowData.madv}</td>
          <td>${rowData.tendv}</td>
          <td>${rowData.dongia}</td>
          <td>${rowData.mota}</td>  
          <td><a href="form-editdv.html?id=${rowData.id}"><button class="btn btn-danger btn-anim" onclick="updateDVById(${rowData.id});"><i class="fa fa-pencil-square-o"></i><span class="btn-text">edit</span></button></a></td>
          <td><button class="btn btn-danger btn-anim" onclick="delDV(${rowData.id})"><i class="fa fa-trash-o"></i><span class="btn-text">delete</span></button></td>
      </tr>
    `;
    return row;
  }
  
  (async function () {
    const foodTable = document.querySelector("#foods_table tbody");
    const URL = "http://localhost:4000/dichvu";
    const foods = await getAllDV();
    if (foods.length) {
      for (const food of foods) {
        foodTable.appendChild(createRow(food));
      }
    }
  })();
  
  function delDV(id){
    deleteDV(id);
    window.location.reload();
  }
// function deleteDV(name){
//     return confirm("Bạn có chắc chắn muốn xóa dịch vụ: " + name + " ?");
// }