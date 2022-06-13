  function getAllNV() {
    const url = "http://26.91.201.28:3000/api/nhanvien";
    return fetch(url).then((res) => res.json());
  }

  function createNewNV(nhanvien) {
    const url = "http://26.91.201.28:3000/api/nhanvien";
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(nhanvien),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }
  
  function updateNVById(id, nhanvien) {
    const url = "http://26.91.201.28:3000/api/nhanvien/" + id;
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(nhanvien),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function getNVByID(id) {
    const url = "http://26.91.201.28:3000/api/nhanvien/" + id;
    return fetch(url).then((res) => res.json());
  }

  function deleteNV(id) {
    const url = "http://26.91.201.28:3000/api/nhanvien/" + id;
    return fetch(url, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  //Khách hàng
  function getAllKH() {
    const url = "http://26.91.201.28:3000/api/khachhang";
    return fetch(url).then((res) => res.json());
  }
  
  function createNewKH(khachhang) {
    const url = "http://26.91.201.28:3000/api/khachhang";
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(khachhang),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function updateKHById(id, khachhang) {
    const url = "http://26.91.201.28:3000/api/khachhang/" + id;
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(khachhang),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function getKHByID(id) {
    const url = "http://26.91.201.28:3000/api/khachhang/" + id;
    return fetch(url).then((res) => res.json());
  }

  function deleteKH(id) {
    const url = "http://26.91.201.28:3000/api/khachhang/" + id;
    return fetch(url, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  function searchKHById(keyword){
    const filter = {
      where: {
        makh: {
          regexp: "^" + keyword
        }
      }
    }
    const url = "http://26.91.201.28:3000/api/khachhang?filter=" + JSON.stringify(filter);
    return fetch(url).then((res) => res.json());
  }

  //Tien nghi
  function getAllTN() {
    const url = "http://26.91.201.28:3000/api/tiennghi";
    return fetch(url).then((res) => res.json());
  }

  function createNewTN(tiennghi) {
    const url = "http://26.91.201.28:3000/api/tiennghi";
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(tiennghi),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function updateTNById(id, tiennghi) {
    const url = "http://26.91.201.28:3000/api/tiennghi/" + id;
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(tiennghi),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function getTNByID(id) {
    const url = "http://26.91.201.28:3000/api/tiennghi/" + id;
    return fetch(url).then((res) => res.json());
  }

  function deleteTN(id) {
    const url = "http://26.91.201.28:3000/api/tiennghi/" + id;
    return fetch(url, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  function searchTNById(keyword){
    const filter = {
      where: {
        matiennghi: {
          regexp: "^" + keyword
        }
      }
    }
    const url = "http://26.91.201.28:3000/api/tiennghi?filter=" + JSON.stringify(filter);
    return fetch(url).then((res) => res.json());
  }
  
  //Dich vu
  function getAllDV() {
    const url = "http://26.91.201.28:4000/dichvu";
    return fetch(url).then((res) => res.json());
  }

  function createNewDV(dichvu) {
    const url = "http://26.91.201.28:4000/dichvu";
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(dichvu),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function updateDVById(id, dichvu) {
    const url = "http://26.91.201.28:3000/api/dichvu/" + id;
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(dichvu),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function deleteDV(id) {
    const url = "http://26.91.201.28:3000/api/dichvu/" + id;
    return fetch(url, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  function getDVByID(id) {
    const url = "http://26.91.201.28:4000/dichvu/" + id;
    return fetch(url).then((res) => res.json());
  }
  
  function searchDVById(keyword){
    const filter = {
      where: {
        madv: {
          regexp: "^" + keyword
        }
      }
    }
    const url = "http://26.91.201.28:4000/dichvu?filter=" + JSON.stringify(filter);
    return fetch(url).then((res) => res.json());
  }

  //Phong
  function getAllPh() {
    const url = "http://26.91.201.28:3000/api/phong";
    return fetch(url).then((res) => res.json());
  }

  function createNewPh(phong) {
    const url = "http://26.91.201.28:3000/api/phong";
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(phong),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function updatePhById(id, phong) {
    const url = "http://26.91.201.28:3000/api/phong/" + id;
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(phong),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function getPhByID(id) {
    const url = "http://26.91.201.28:3000/api/phong/" + id;
    return fetch(url).then((res) => res.json());
  }

  function deletePh(id) {
    const url = "http://26.91.201.28:3000/api/phong/" + id;
    return fetch(url, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  function searchPhById(keyword){
    const filter = {
      where: {
        maphong: {
          regexp: "^" + keyword
        }
      }
    }
    const url = "http://26.91.201.28:3000/api/phong?filter=" + JSON.stringify(filter);
    return fetch(url).then((res) => res.json());
  }

  //Tai khoan
  function getAllTK() {
    const url = "http://26.91.201.28:3000/api/taikhoan";
    return fetch(url).then((res) => res.json());
  }

  //dich vu su dung
  function getAllDVSD() {
    const url = "http://26.91.201.28:3000/api/dichvusd";
    return fetch(url).then((res) => res.json());
  }

  function createNewDVSD(dichvusd) {
    const url = "http://26.91.201.28:3000/api/dichvusd";
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(dichvusd),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function getDVSDByID(id) {
    const url = "http://26.91.201.28:3000/api/dichvusd/" + id;
    return fetch(url).then((res) => res.json());
  }

  //hoa don dich vu
  function createNewHDDV(hddichvu) {
    const url = "http://26.91.201.28:3000/api/hddichvu";
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(hddichvu),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function getAllHDDV() {
    const url = "http://26.91.201.28:3000/api/hddichvu";
    return fetch(url).then((res) => res.json());
  }

  function deletePT(id) {
    const url = "http://26.91.201.28:3000/api/hddichvu/" + id;
    return fetch(url, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  //phieu thue
  function getAllPT() {
    const url = "http://26.91.201.28:3000/api/phieuthue";
    return fetch(url).then((res) => res.json());
  }

  function createNewPT(phieuthue) {
    const url = "http://26.91.201.28:3000/api/phieuthue";
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(phieuthue),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  function deletePT(id) {
    const url = "http://26.91.201.28:3000/api/phieuthue/" + id;
    return fetch(url, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  function searchPTById(keyword){
    const filter = {
      where: {
        mapt: {
          regexp: "^" + keyword
        }
      }
    }
    const url = "http://26.91.201.28:3000/api/phieuthue?filter=" + JSON.stringify(filter);
    return fetch(url).then((res) => res.json());
  }

  // tai khoan
  
  function login(taikhoan) {
    const url = "http://26.91.201.28:3000/api/taikhoan/login";
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(taikhoan),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }