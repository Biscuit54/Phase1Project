//SECTION 1    For Button
const button = document.getElementById('button')
button.addEventListener('click', Generate)

function Generate(){
    fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => 
        document.getElementById(
            'msg'
        ).innerHTML = <span class="msg">&nbsp;${data.activity}&nbsp;</span>)
        
        
        }