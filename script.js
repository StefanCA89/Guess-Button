function diffRating(nrButtons) {
    if (nrButtons < 2) {
        return "Obvious"
    } else if (nrButtons > 1 && nrButtons < 4) {
        return "Easy"
    } else if (nrButtons > 3 && nrButtons < 6) {
        return "Moderate"
    } else if (nrButtons > 5 && nrButtons < 9) {
        return "Hard"
    } else {
        return "Very Hard"
    } 
}

let inputSubmitted = 0
function takeInput() {
    if (!inputSubmitted) {
        if (document.getElementById('nrBtns').value < 1 || 
        document.getElementById('nrBtns').value > 100 ) {
            alert("We need a number between 1-100 please")
            return
        }
        inputSubmitted = 1
        let nrButtons = document.getElementById('nrBtns').value
        winningButtonId = Math.floor(Math.random() * nrButtons)
        document.getElementById('btnContainer').innerHTML = '\
        <div class="card">\
            <div class="card-header"  style="text-align:center" id="title">\
            Choose The Winning Button<br>Difficulty:' + diffRating(nrButtons) +'\
            </div>\
            <div class="card-body" style="text-align:center" id ="btnField"></div>\
        </div>\
        ';
        for (let i = 0; i < nrButtons; i++) {
            document.getElementById('btnField').innerHTML += '\
            <button class="btn btn-primary" id ='+ i +' onclick="showButton(id)">\
            Button '+ (i + 1) +' \
            </button>\
            ';
        }
    }
}

let attempted = 0
function showButton(id) {
    if (!attempted) {
        attempted = 1
        document.getElementById('reloadBtn').innerHTML = '\
        <button class="btn btn-primary" onclick="reloadPage()">\
        Try Again\
        </button>\
        ';
        if (id == winningButtonId) {
            document.getElementById('title').innerHTML = "Winner"
            document.getElementById('message').innerHTML = "CONGRATULATIONS"
            document.getElementById(id).className = "btn btn-success"
        } else {
            document.getElementById('message').innerHTML = "SORRY"
            document.getElementById('title').innerHTML = "Loser"
            document.getElementById(id).className = "btn btn-danger"
        }
    } else {
        document.getElementById('title').innerHTML = "Press Try Again to try again"
    }
}

function reloadPage() {
    window.location.reload(true)
}