(function () {
  const tokens = JSON.parse(localStorage.getItem("tokens") || "{}");

  if (!tokens.accessToken || new Date(tokens.refreshExpiresIn) < new Date()) {
    window.location.href = "/login.html";
  }

  if (new Date(tokens.expiresIn) < new Date()) {
    fetch("http://26.91.201.28:3000/api/taikhoan/refresh-token", {
      method: "POST",
      body: JSON.stringify({
        refreshToken: tokens.refreshToken,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.accessToken) {
          tokens.accessToken = data.accessToken;
          tokens.expiresIn = data.expiresIn;
          localStorage.setItem("tokens", JSON.stringify(tokens));
        }
      });
  }
})();
