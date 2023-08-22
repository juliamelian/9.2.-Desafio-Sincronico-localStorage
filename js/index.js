
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("buttonText");
   

    button.addEventListener("click", (e) => {
        const dataGuardada = document.getElementById("inputText").value;
        localStorage.setItem("data", dataGuardada);
      

        
    });

   
});