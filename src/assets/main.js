let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' && attempt.value == '') {
        setHiddenFields();
    }

    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt.value++;
        console.log(attempt.value);
    }

    if (getResults(input.value)) {
        setMessage('You Win! :)');
    }
}

//implement new functions here

function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000).toString();
    attempt.value = 0;
    while (answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if (input.length == 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function getResults(input) {
    let correct = 0;
    let result = "<div class = 'row'><span class='col-md-6'>" + input.value + "</span><div class='col-md-6'>";
    for (let i=0; i<input.toString().length;++i) {
        if (input.toString().charAt(i) == answer.value.charAt(i)) {
            result += "<span class='glyphicon glyphicon-ok'></span>";
            correct++;
        }
        else if (answer.value.includes(input.toString().charAt(i))) {
            result += "<span class='glyphicon glyphicon-transfer'></span>";
        } else {
            result += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    result += "</div></div>";
    document.getElementById('results').innerHTML = result;

    return correct == 4;
}
