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
const activityTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]