function randomString(curr) {
    var length = curr.length;
    var pos_curr = (Math.floor(Math.random() * curr.length));
    var old_char = curr.charAt(pos_curr);
    var new_char = old_char;
    //НИКИТА ОРЛОВ
    switch (old_char) {
        case 'N':
            new_char = 'Н';
            break;
        case 'I':
            new_char = 'И';
            break;
        case 'K':
            new_char = 'К';
            break;
        case 'T':
            new_char = 'Т';
            break;
        case 'A':
            new_char = 'А';
            break;

        case 'O':
            new_char = 'О';
            break;
        case 'R':
            new_char = 'Р';
            break;
        case 'L':
            new_char = 'Л';
            break;
        case 'О':
            new_char = 'O';
            break;
        case 'V':
            new_char = 'В';
            break;
        default:
            new_char = old_char;
    }

    var random_boolean = Math.random() >= 0.3;
    if (random_boolean == false) {

        switch (old_char) {
            case 'Н':
                new_char = 'N';
                break;
            case 'И':
                new_char = 'I';
                break;
            case 'K':
                new_char = 'К';
                break;
            case 'T':
                new_char = 'Т';
                break;
            case 'A':
                new_char = 'А';
                break;

            case 'O':
                new_char = 'О';
                break;
            case 'Р':
                new_char = 'R';
                break;
            case 'Л':
                new_char = 'L';
                break;
            case 'О':
                new_char = 'O';
                break;
            case 'В':
                new_char = 'V';
                break;

            default:
                new_char = old_char;
        }
    }


    curr = setCharAt(curr, pos_curr, new_char);
    return curr;
}

function ChangingRandomString() {

    function doSomething() {

        var curr = document.getElementById("random").innerHTML;
        var c = randomString(curr);
        document.getElementById("random").innerHTML = c;

    }

    (function loop() {
        var minMS = 100; //seems to be slow enough
        var maxMS = 500; //seems to be fast enough
        var rand = Math.round(Math.random() * (maxMS - minMS) +
        minMS); //need to restrict the bounds of this to not have it become very fast or slow
        setTimeout(function () {
            doSomething();
            loop();
        }, rand);
    }());


}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}
document.getElementById("random").innerHTML = "NIKITA ORLOV"
setTimeout(ChangingRandomString, 3998); //4k ms seems to be ideal


var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);
    anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 6000),
        delay: anime.random(400, 2000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
    });
}

PDFObject.embed("assets/pdf/orlovcs.pdf", "#pdf_cv")