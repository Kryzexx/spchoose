const btn = document.querySelector('.select-btn')

function selectSpawn(spawnid) {
    // choose border
    document.getElementById('spawn-choose').style.border = 'none'
    document.getElementById('home-choose').style.border = 'none'
    document.getElementById('fraction-choose').style.border = 'none'
    document.getElementById('exitpoint-choose').style.border = 'none'

    const choice = document.getElementById(spawnid)
    choice.style.border = "2px solid red"
    cef.emit('pwd:choice', spawnid) // <<< აქ აგზავნი 4 ტიპის სტრინგს მაგ: home-choose < რომელიც მონიშინულია
}

cef.on('pwd:result', (resultmsg) => {
    DisplayError(resultmsg) /* << აქ მაგალითად home-choose's თუ მიუთითებს 
    და სახლი არ ექნება პავნოდან resultmsg'ს მაგივრად ჩაწერ "Tqven Ar Gaqvt Saxli" ან რაც გინდა და გამოიტანს.
    ეჭვიც არ მეპარება რო ისედაც გაიგებ მარა მაინც :დ*/ 
})

function DisplayError(errormsg) {
    Swal.fire({
        title: "შეცდომა",
        text: errormsg,
        icon: "error"
    });
}
