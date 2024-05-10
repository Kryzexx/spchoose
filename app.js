function selectSpawn(spawnid) {
    document.getElementById('spawn-choose').style.border = 'none'
    document.getElementById('home-choose').style.border = 'none'
    document.getElementById('fraction-choose').style.border = 'none'
    document.getElementById('exitpoint-choose').style.border = 'none'
    const choice = document.getElementById(spawnid)
    choice.style.border = "2px solid red"
}