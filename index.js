const upThumb = '♥'
const downThumb = '♡'
const lVote = '👎'
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
let btn1 = document.querySelector('#green');
let btn2 = document.querySelector('#red');

btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});

