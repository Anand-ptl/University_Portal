document.addEventListener("DOMContentLoaded", function () {
    const pageMap = {
      "loginbut": "instilogin.html"
    };
  
    for (let id in pageMap) {
      const button = document.getElementById(id);
  
      if (button) {
        button.addEventListener("click", function () {
          if (id === "loginbut") {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
  
            if (username === "" || password === "") {
              alert("Please enter both Institute Id  and password.");
              return;
            }
          }
  
          window.location.href = pageMap[id];
        });
      }
    }
  });
  