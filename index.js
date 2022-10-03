let themes = ["structure", "et", "e", "pd", "md", "fd", "n", "g"];

function hide_all() {
    themes.forEach(th => {
        document.getElementById("tb_" + th).style.display = "none";
    });
}

themes.forEach(th => {
    document.getElementById(th).addEventListener("click", () => {
        hide_all();
        document.getElementById("tb_" + th).style.display = "block";
        window.localStorage.setItem("active", th)
    })
});

if (window.localStorage.getItem("active")) {

    hide_all();
    document.getElementById("tb_" + window.localStorage.getItem("active")).style.display = "block";

} else {

    hide_all();
    document.getElementById("tb_" + themes[0]).style.display = "block";

}
