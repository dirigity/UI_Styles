let themes = ["structure", "et", "e", "pd", "md", "fd", "n", "g"];

function hide_all() {
    themes.forEach(th => {
        document.getElementById(th).classList = "" // setted
        document.getElementById("tb_" + th).style.display = "none";
    });
}

themes.forEach(th => {
    document.getElementById(th).addEventListener("click", () => {
        hide_all();
        document.getElementById(th).classList = "setted"
        document.getElementById("tb_" + th).style.display = "block";
        window.localStorage.setItem("active", th)
    })
});



if (window.localStorage.getItem("active")) {

    hide_all();
    let th = window.localStorage.getItem("active")
    document.getElementById(th).classList = "setted"
    document.getElementById("tb_" + th).style.display = "block";

} else {

    hide_all();
    document.getElementById(themes[0]).classList = "setted"
    document.getElementById("tb_" + themes[0]).style.display = "block";

}

let display_text = "";

document.querySelectorAll(".angry-grid").forEach((c) => {
    c.childNodes.forEach((e) => {
        e.addEventListener("click", () => {

            let key = e.innerHTML;
            if (key == "DEL") {
                display_text = display_text.slice(0, -1);
                update_display()
            } else if (key == "AC") {
                display_text = ""
                update_display()
            } else if (key == "=") {
                if (display_text == "") {
                    display_text = "ERR"
                    update_display()
                    display_text = ""
                } else {
                    try {
                        display_text = ("" + eval(display_text.replace("x", "*").replaceAll(",", "."))).replace(".", ",")
                        update_display()
                    } catch (error) {
                        display_text = "ERR"
                        update_display()
                        display_text = ""
                    }
                }

            } else {
                display_text += key;
                update_display()
            }
        })
    })
})

function update_display() {
    document.querySelectorAll("display").forEach((c) => {
        c.innerHTML = display_text
    })
}