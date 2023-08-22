document.addEventListener("DOMContentLoaded", () => {



    // Load and display data from localStorage when the page loads
     const dataSpan = document.getElementById("data");
    
     const savedData = localStorage.getItem("data");
    
     if (savedData) {
        
         dataSpan.textContent = savedData;
     }
    });