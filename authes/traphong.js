function addToTable(table, ...rowDatas) {
  let tableBody = table.tBodies[0];
  let row = tableBody.insertRow();
  for (let data of rowDatas) {
    let cell = row.insertCell();
    cell.innerHTML = data;
  }
}

(async function () {
  const phongDangThues = await getPhongDangThue();

  const table = document.querySelector("#foods_table table");
  for (const phong of phongDangThues) {
    const input = `<input type="checkbox" name="phongs[]" value="${phong.phongId}">`;
    addToTable(
      table,
      input,
      phong.phieuthue?.id,
      phong.phieuthue?.khachhang?.makh,
      phong.phieuthue?.khachhang?.tenkh,
      phong.phong?.maphong,
      getDate(phong.ngayden),
      getDate(phong.ngaydenhan)
    );
  }
})();
