var counter = 1;
var direction = 1;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;

    counter += direction;

    if (counter > 3) {
        counter = 2;
        direction = -1;
    } else if (counter < 1) {
        counter = 2;
        direction = 1;
    }
}, 5000);
