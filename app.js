const btn = document.querySelector('.select-btn')
function selectSpawn(spawnid) {
    // choose border
    document.getElementById('spawn-choose').style.border = 'none'
    document.getElementById('home-choose').style.border = 'none'
    document.getElementById('fraction-choose').style.border = 'none'
    document.getElementById('exitpoint-choose').style.border = 'none'
    const choice = document.getElementById(spawnid)
    choice.style.border = "2px solid red"
    btn.addEventListener('click', () => {
        //cef.emit("pwd:choice", spawnid)
        return DisplayError(spawnid)
    })
}

function DisplayError(errormsg) {
    Swal.fire({
        title: "შეცდომა",
        text: errormsg,
        icon: "error"
    });
}