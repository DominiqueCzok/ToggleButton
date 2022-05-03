const toggleButton = document.querySelector("#toggle-button");

toggleButton.addEventListener("click", function() {
    const body = document.body;

    if(body.classList.contains("light")) {
        document.title = "Gute Nacht"
        body.classList.remove("light");
        body.classList.add("dark");

        toggleButton.classList.remove("button-light");
        toggleButton.classList.add("button-dark");

    } else {
      document.title = "Guten Tag"  
      body.classList.add("light");
      body.classList.remove("dark");  

      toggleButton.classList.add("button-light");
      toggleButton.classList.remove("button-dark");
    }
   
});