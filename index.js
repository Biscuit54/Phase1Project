// const upThumb = '♥'
// const downThumb = '♡'
// const lVote = '👎'
const Button = document.getElementById('button')
button.addEventListener('click', activityTime)

function activityTime() {
    fetch('http://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(data => {
            document.getElementById(
                'Message'
            ).innerHTML = `<span class="activityGlam">&nbsp;${data.activity}&nbsp;</span>`
        })
}
//next section

//acivities for bored API  = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', lighten)

function lighten(){
    
}
