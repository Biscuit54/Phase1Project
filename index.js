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

//callbckFn
function activityTypes() {
    fetch('http://www.boredapi.com/api/activity?type=')
    .then(response => response.json())
    .then(type => {
        document.getElementById(
            'enterhere'
        ).innerHTML = `<span class="activityGlam">&nbsp;${type.activity}&nbsp;</span>`
    })
}