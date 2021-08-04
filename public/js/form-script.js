function checkValues() {
    let x = document.forms["form"]["firstname"].value;
    if (x == "") {
      alert("Please Enter First Name");
      return false;
    }

    let x = document.forms["form"]["lastname"].value;
    if (x == "") {
      alert("Please Enter Last Name");
      return false;
    }


    let x = document.forms["form"]["email"].value;
    if (x == "") {
      alert("Please Enter Email");
      return false;
    }


  }