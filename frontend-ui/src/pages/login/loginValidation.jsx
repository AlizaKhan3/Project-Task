function validation(values){
    alert("")
    let error = {};
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    const password_pattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if(values.email === ""){
        error.email = "Please enter your email"
    }
    else if(!email_pattern.test(values.email)){
         error.email = "Invalid Email!"
    }
    else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Please enter your password"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Invalid Password!"
    }
    else{
        error.password = ""
    }
    return error;
}


export default validation;