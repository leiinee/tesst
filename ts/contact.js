// refer to question 4 before development starts for scope document

/*from vali*/
function checkforblank() {

    var errormessage="";

if (document.getElementById('firstName').value == "") {
    document.getElementById('firstNameError').style.display = "inline";
    hasError = true;

    } else {
        document.getElementById('firstNameError').style.display = "none";
    }

  if (document.getElementById('lastName').value == "") {
        document.getElementById('lastNameError').style.display = "inline";
        hasError = true;
    } else {
        document.getElementById('lastNameError').style.display = "none";
    }

if (document.getElementById('email').value.search(/^[a-zA-Z]+([_\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,4})+$/) == -1) {
        document.getElementById('emailError').style.display = "inline";
        hasError = true;
    } else {
        document.getElementById('emailError').style.display = "none";
    }


if (document.getElementById('phone').value == "") {
        document.getElementById('phoneError').style.display = "inline";
        hasError = true;

        } else {
            document.getElementById('phoneError').style.display = "none";
        }

    return !hasError;
}
