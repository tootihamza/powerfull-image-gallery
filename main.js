    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');

    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');



    /* Image Browsing by mouse click*/
    for(i = 1; i < 6; i++) {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', "images/pic" + i + ".jpg");
        thumbBar.appendChild(newImage);
    }

    thumbBar.addEventListener("click", function(e){
        if(!(e.target.classList.contains("displayed-img"))) {
            displayedImage.setAttribute("src", e.target.getAttribute("src"));
        }
    })

    /* Wiring up the Darken/Lighten button by mouse click */

    btn.addEventListener("click", function(){
        if(btn.classList.contains("dark")){
            btn.textContent = "Lighten";
            btn.classList.remove("dark");
            btn.classList.add("light");
            overlay.style.backgroundColor = "rgba(0,0,0,0.5)";            
        }
        else {
            btn.textContent = "Darken";
            btn.classList.remove("light");
            btn.classList.add("dark");
            overlay.style.backgroundColor = "rgba(0,0,0,0.0)";  
        }
    })

    document.addEventListener("keydown", function(e){
        let srcNOW = displayedImage.getAttribute("src");
        let newJpgNumberUp = Number(displayedImage.getAttribute("src").slice(-5, -4))+1;
        let newJpgNumberDown = Number(displayedImage.getAttribute("src").slice(-5, -4))-1;
        
        /* Image Browsing by Arrow Keys Left & Right */
        if(e.code === "ArrowRight") {
            if(srcNOW !== "images/pic5.jpg"){
                displayedImage.setAttribute('src', "images/pic" + newJpgNumberUp + ".jpg");
            }
            else {
                displayedImage.setAttribute("src", "images/pic1.jpg")
            }
        }
        if(e.code === "ArrowLeft") {
            if(srcNOW !== "images/pic1.jpg"){
                displayedImage.setAttribute('src', "images/pic" + newJpgNumberDown + ".jpg");
            }
            else {
                displayedImage.setAttribute("src", "images/pic5.jpg")
            }
        }

        /* Wiring up the Darken/Lighten button with SHIFT */
        if(e.code === "ShiftLeft" || e.code === "ShiftRight")
        {
            if(btn.classList.contains("dark")){
                btn.textContent = "Lighten";
                btn.classList.remove("dark");
                btn.classList.add("light");
                overlay.style.backgroundColor = "rgba(0,0,0,0.5)";            
            }
            else {
                btn.textContent = "Darken";
                btn.classList.remove("light");
                btn.classList.add("dark");
                overlay.style.backgroundColor = "rgba(0,0,0,0.0)";  
            }
        }
    })