function validation(values) {
    let error = {};
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/;

    if (!values.firstname) {
        error.firstname = "Please fill out this field";
    } else {
        delete error.firstname;
    }

    if (!values.lastname) {
        error.lastname = "Please fill out this field";
    } else {
        delete error.lastname;
    }

    if (!values.email) {
        error.email = "Please enter your email";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid Email!";
    } else {
        delete error.email;
    }

    if (!values.password) {
        error.password = "Please fill out this field";
    } else {
        delete error.password;
    }

    // if (!values.password) {
    //     error.password = "Please enter your password";
    // } else if (!password_pattern.test(values.password)) {
    //     error.password = "Password must include lowercase letters, uppercase letters, numbers, and special characters";
    // } else {
    //     delete error.password;
    // }

    
    return error;
}
export default validation;