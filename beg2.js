var x = 0;
var timerInterval;
var time = 0;
var score = 0;

function startTimer() {
    timerInterval = setInterval(function() {
        time++;
        document.getElementById("timer").innerText = "Time: " + time;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function question() {
    $('#current_no').text('1-9');
    $('.hid').hide();
    startTimer();
    method1();
}

function setNumber() {
    x += 1;
    a = Math.floor(Math.random() * 10 + 1);
    b = Math.floor(Math.random() * 10 + 2);
    c = Math.floor(Math.random() * 10 + 3);
    d = Math.floor(Math.random() * 10 + 4);
    e = Math.floor(Math.random() * 10 + 1);
    f = Math.floor(Math.random() * 10 + 2);
    g = Math.floor(Math.random() * 10 + 3);
    h = Math.floor(Math.random() * 10 + 4);
    i = Math.floor(Math.random() * 10 + 5);
}

function sol() {
    $('.answers').hide();
    $('.hid').hide();
    $('.hint1').hide();
    $('.solution').off().click(function() {
        $('.hint1').show();
    });
    $('.ok').off().click(function() {
        $('.answers').show();
        x -= 1;
    });
}

function updateScore() {
    document.getElementById("score").innerText = "Score: " + score;
}

function method1() {
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(c);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text(f);
    $("#option7").text(a * d);
    $("#option8").text(b * e);
    $("#option9").text("?");
    $('.answers').text(c * f);
    $("#submit").off().click(function() {
        var answer = $(".input-ans").val();
        if ((c * f) == answer) {
            score++;
            updateScore();
            $('.hid').hide();
            document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
            setTimeout(method2, 1000);
        } else {
            $('.hid').show();
        }
    });
}

function method2() {
    $('input').val('');
    $('#current_no').text('2-9');
    document.getElementById("pop_up").innerHTML = '<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(a * b);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text(d * e);
    $("#option7").text(a * d);
    $("#option8").text(i);
    $("#option9").text("?");
    $('.answers').text(a * d * i);
    $("#submit").off().click(function() {
        var answer = $(".input-ans").val();
        if ((a * d * i) == answer) {
            score++;
            updateScore();
            $('input').val('');
            $('.hid').hide();
            document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
            setTimeout(method3, 1000);
        } else {
            $('.hid').show();
        }
    });
}

function method3() {
    $('#current_no').text('3-9');
    document.getElementById("pop_up").innerHTML = '<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(a * b);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text(f);
    $("#option7").text(a * d);
    $("#option8").text("?");
    $("#option9").text(a * b * f);
    $('.answers').text(b * e);
    $("#submit").off().click(function() {
        var answer = $(".input-ans").val();
        if ((b * e) == answer) {
            score++;
            updateScore();
            $('input').val('');
            $('.hid').hide();
            document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
            setTimeout(method4, 1000);
        } else {
            $('.hid').show();
        }
    });
}

function method4() {
    $('#current_no').text('4-9');
    document.getElementById("pop_up").innerHTML = '<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(a * b);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text("?");
    $("#option7").text(a * d);
    $("#option8").text(i);
    $("#option9").text(a * d * h);
    $('.answers').text(d * e);
    $("#submit").off().click(function() {
        var answer = $(".input-ans").val();
        if ((d * e) == answer) {
            score++;
            updateScore();
            $('input').val('');
            $('.hid').hide();
            document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
            setTimeout(method5, 1000);
        } else {
            $('.hid').show();
        }
    });
}

function method5() {
    $('#current_no').text('5-9');
    document.getElementById("pop_up").innerHTML = '<div class="ques">Find the missing number.</div><table class="center"><tr><td id="option1"></td><td id="option2"></td><td id="option3"></td></tr><tr><td id="option4"></td><td id="option5"></td><td id="option6"></td></tr><tr><td id="option7"></td><td id="option8"></td><td id="option9"></td></tr></table>';
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(c);
    $("#option4").text("?");
    $("#option5").text(e);
    $("#option6").text(f);
    $("#option7").text(a * d);
    $("#option8").text(b * e);
    $("#option9").text(c * f);
    $('.answers').text(d);
    $("#submit").off().click(function() {
        var answer = $(".input-ans").val();
        if ((d) == answer) {
            score++;
            updateScore();
            $('input').val('');
            $('.hid').hide();
            document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
            setTimeout(method6, 1000);
        } else {
            $('.hid').show();
        }
    });
}

function method6() {
    $('#current_no').text('6-9');
    document.getElementById("pop_up").innerHTML = `
        <div class="ques">Find the missing number.</div>
        <table class="center">
            <tr>
                <td id="option1"></td>
                <td id="option2"></td>
                <td id="option3"></td>
            </tr>
            <tr>
                <td id="option4"></td>
                <td id="option5"></td>
                <td id="option6"></td>
            </tr>
            <tr>
                <td id="option7"></td>
                <td id="option8"></td>
                <td id="option9"></td>
            </tr>
        </table>`;
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text("?");
    $("#option3").text(a * b);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text(d * e);
    $("#option7").text(a * d);
    $("#option8").text(h);
    $("#option9").text(a * d * h);
    $('.answers').text(b);
    $("#submit").off().click(function() {
        var answer = $(".input-ans").val();
        if (b == answer) {
            score++;
            updateScore();
            $('input').val('');
            $('.hid').hide();
            document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
            setTimeout(method7, 1000);
        } else {
            $('.hid').show();
        }
    });
}

function method7() {
    $('#current_no').text('7-9');
    document.getElementById("pop_up").innerHTML = `
        <div class="ques">Find the missing number.</div>
        <table class="center">
            <tr>
                <td id="option1"></td>
                <td id="option2"></td>
                <td id="option3"></td>
            </tr>
            <tr>
                <td id="option4"></td>
                <td id="option5"></td>
                <td id="option6"></td>
            </tr>
            <tr>
                <td id="option7"></td>
                <td id="option8"></td>
                <td id="option9"></td>
            </tr>
        </table>`;
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(c);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text("?");
    $("#option7").text(a * d);
    $("#option8").text(b * e);
    $("#option9").text(c * f);
    $('.answers').text(f);
    $("#submit").off().click(function() {
        var answer = $(".input-ans").val();
        if (f == answer) {
            score++;
            updateScore();
            $('input').val('');
            $('.hid').hide();
            document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
            setTimeout(method8, 1000);
        } else {
            $('.hid').show();
        }
    });
}


function method8() {
    $('#current_no').text('8-9');
    document.getElementById("pop_up").innerHTML = `
        <div class="ques">Find the missing number.</div>
        <table class="center">
            <tr>
                <td id="option1"></td>
                <td id="option2"></td>
                <td id="option3"></td>
            </tr>
            <tr>
                <td id="option4"></td>
                <td id="option5"></td>
                <td id="option6"></td>
            </tr>
            <tr>
                <td id="option7"></td>
                <td id="option8"></td>
                <td id="option9"></td>
            </tr>
        </table>`;
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(a * b);
    $("#option4").text(d);
    $("#option5").text(e);
    $("#option6").text(d * e);
    $("#option7").text("?");
    $("#option8").text(h);
    $("#option9").text(a * d * h);
    $('.answers').text(a * d);
    $("#submit").off().click(function() {
        var answer = $(".input-ans").val();
        if ((a * d) == answer) {
            score++;
            updateScore();
            $('input').val('');
            $('.hid').hide();
            document.getElementById("pop_up").innerHTML = "<img src='../../you_did_it.jpg'>";
            setTimeout(method9, 1000);
        } else {
            $('.hid').show();
        }
    });
}

function method9() {
    $('#current_no').text('9-9');
    document.getElementById("pop_up").innerHTML = `
        <div class="ques">Find the missing number.</div>
        <table class="center">
            <tr>
                <td id="option1"></td>
                <td id="option2"></td>
                <td id="option3"></td>
            </tr>
            <tr>
                <td id="option4"></td>
                <td id="option5"></td>
                <td id="option6"></td>
            </tr>
            <tr>
                <td id="option7"></td>
                <td id="option8"></td>
                <td id="option9"></td>
            </tr>
        </table>`;
    setNumber();
    sol();
    $("#option1").text(a);
    $("#option2").text(b);
    $("#option3").text(c);
    $("#option4").text(d);
    $("#option5").text("?");
    $("#option6").text(f);
    $("#option7").text(a * d);
    $("#option8").text(b * e);
    $("#option9").text(c * f);
    $('.answers').text(e);
    $("#submit").off().click(function() {
        var answer = $(".input-ans").val();
        if ((e) == answer) {
            score++;
            updateScore();
            $('input').val('');
            $('.hid').hide();
            document.getElementById("pop_up").innerHTML = ("<div class='game-over'><h1>Game Over</h1><p>Your Score: " + score + "</p></div>");
        } else {
            $('.hid').show();
        }
    });
}

function question() {
    $('#current_no').text('1-9');
    $('.hid').hide();
    startTimer();
    method1();
}



