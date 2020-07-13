$("#btnFB").on("click", function () {
    let fizzNum = parseInt($("#fbInput1").val());
    let buzzNum = parseInt($("#fbInput2").val());
    let output = ""

    for (let x = 1; x <= parseInt($("#boundIn").val()); x++) {
        if (x % fizzNum == 0 && x % buzzNum == 0) {
            output += "<span class = 'fizzbuzz'>FizzBuzz</span>, ";
        }
        else if (x % fizzNum == 0) {
            output += "<span class = 'fizz'>Fizz</span>, "
        }
        else if (x % buzzNum == 0) {
            output += "<span class = 'buzz'>Buzz</span>, "
        }
        else {
            output += x + ", ";
        }
    }

    output = output.substr(0, output.length - 2)

    $("#fbOut").html(output);
});

$("#btnClear").on("click", function () {
    $("#fbInput1").val("");
    $("#fbInput2").val("");
    $("#boundIn").val("");
    $("#fbOut").text("");
});