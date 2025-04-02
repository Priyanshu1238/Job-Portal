const signupValidation=(name:string,value:string)=>{

    switch(name)
    {
        case "name":
            if(value.length===0) return "Name is required";
            return "";
        case "email":
            if(value.length===0) return "Email is required";
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email is invalid"
            return "";
            case "password":
                if(value.length===0) return "Password is required";
                if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value)) return "Password should be 8-15 length with atleast 1 uppercase ,digit and symbol"
                return "";
            default:
                return ""



    }
}
export{ signupValidation};