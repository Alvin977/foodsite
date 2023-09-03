export default function Regestration() {
    let error = 0
    $("#foodList").addClass("d-none")
    $("#search").addClass("d-none")
    $("#selectedFoodData").addClass("d-none")
    $("#form").removeClass("d-none")
    $("#form input").blur(function () {
        let id =$(this).attr("id")
        console.log(id);
        if (id == "inputName") {
           error = nameValidation()
           console.log(error);
        }
        else if (id == "inputEmail"){
            error = emailValidation()
        }
        else if (id == "inputPhone"){
            error = phoneValidation()
        }
        else if (id == "inputAge"){
            error = ageValidation()
        }
        else if (id == "inputPass"){
            error = passValidation()
        }
        else if (id == "inputRepass"){
            error = rePassValidation()
        }
        if(error ==0 && $("#inputName").val() != "" &&$("#inputEmail").val()!=""&&$("#inputPhone").val()!=""
        &&$("#inputAge").val()!=""&&$("#inputPass").val()!=""&&$("#inputRepass").val()!=""){
            console.log(error);
            $("#submitBtn").removeClass("disabled")
        }
     
    })


}
function nameValidation() {
    let error = 0
    let nameRegex = /^[a-z|A-Z]{3,}/
    let nameValue =$("#inputName").val()
    console.log(nameValue);
    if (nameRegex.test(nameValue)==true) {
        $("#nameErr").addClass("d-none")
        error = 0
    }
    else {
        $("#nameErr").removeClass("d-none")
        error++
    }
    return error
}
function emailValidation() {
    let error = 0
    let emailRegex = /^[A-Za-z]{1}[A-Za-z0-9_]{2,}@[a-z]{3,8}\.[a-z]{3,8}$/
    if (emailRegex.test($("#inputEmail").val()) == true) {
        $("#emailErr").addClass("d-none")
        error = 0
    }
    else {
        $("#emailErr").removeClass("d-none")
        error++
    }
    return error
}
function phoneValidation() {
    let error = 0
    let phoneRegex = /^(002)?01[0125][0-9{8}]/
    if (phoneRegex.test($("#inputPhone").val())) {
        $("#phoneErr").addClass("d-none")
        error = 0
    }
    else {
        $("#phoneErr").removeClass("d-none")
        error++
    }
    return error
}
function ageValidation() {
    let error = 0
    let ageRegex = /[0-9][0-9]/
    if (ageRegex.test($("#inputAge").val())) {
        $("#ageErr").addClass("d-none")
        error = 0
    }
    else {
        $("#ageErr").removeClass("d-none")
        error++
    }
    return error
}
function passValidation() {
    let error = 0
    let passRegex = /^[A-Z]{1}[a-z]*[0-9]+[$&+,:;=?@#|'<>.-^*()%!]*/
    if (passRegex.test($("#inputPass").val())) {
        $("#passErr").addClass("d-none")
        error = 0
    }
    else {
        $("#passErr").removeClass("d-none")
        error++
    }
    return error
}
function rePassValidation() {
    let error = 0

    if ($("#inputPass").val() == $("#inputRepass").val()) {
        $("#rePassErr").addClass("d-none")
        error = 0
    }
    else {
        $("#rePassErr").removeClass("d-none")
        error++
    }
    return error
}
