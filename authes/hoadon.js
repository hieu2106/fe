(async function () {
  // get id from query string
  const id = window.location.search.split("=")[1];
  console.log(id);
  getHoaDonById(id).then(function (res) {
    $("#manv").text(res.phieuthue.nhanvien.id);
    $("#name").text(res.phieuthue.nhanvien.name);
    $("#tenkh").text(res.phieuthue.khachhang.tenkh);
    $("#sdt").text(res.phieuthue.khachhang.sdt);
    $("#makh").text(res.phieuthue.khachhang.makh);

    $("#ngaytra").text(getDate(res.createdAt));
    $("#mapt").text(res.id);

    let tongtienphong = 0;
    res.phongthues.forEach(function (item) {
      const row = `
        <tr> 
            <td class="text-center">${item.phongId}</td>
            <td class="text-center">${getDate(item.ngayden)}</td>
            <td class="text-center">${getDate(item.ngaydenhan)}</td>
            <td class="text-center">${item.giathue}</td> 
        </tr>
        `;
      $("#tb_phong").append(row);
      tongtienphong += item.giathue;
      //   $("#maphong").text(item.phongId);
      //   $("#ngayden").text(getDate(item.ngayden));
      //   $("#ngaydenhan").text(getDate(item.ngaydenhan));
      //   $("#giathue").text(item.giathue);
    });
    $("#tongtien").text(tongtienphong);
  });
})();
