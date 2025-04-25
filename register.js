document.addEventListener("DOMContentLoaded", function () {
    const payBtn = document.querySelector("button[type='button']");
  
    payBtn.addEventListener("click", function () {
      const requiredInputs = document.querySelectorAll("input[required]");
  
      for (let input of requiredInputs) {
        if (input.value.trim() === "") {
          alert(`Please fill out the field: ${input.placeholder || input.id}`);
          input.focus();
          return;
        }
      }
  
      window.location.href = "payment.html";
    });
  });
  