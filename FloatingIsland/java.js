
    function switchMode() {
    let moon = document.getElementById ("moon");
    let lighthouseLight = document.getElementById("lh_light");
    let snow2 = document.getElementById("snow1");
    let snow1 = document.getElementById("snow2");

        if(moon.className=="moon"){
        moon.className="sun";
        document.body.style.backgroundColor = "#141D26";
        document.body.style.color = "#fff";
        lighthouseLight.style.display = "block";
        snow1.style.display = "block";
        snow2.style.display = "block";
        }
    else {
        moon.className ="moon";
        document.body.style.backgroundColor = "#63b4cf";
        document.body.style.color = "#000";
        lighthouseLight.style.display = "none";
        snow1.style.display = "none";
        snow2.style.display = "none";
    }}