import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register now!</h2>
            <form>
                <input type="text" placeholder='Your Name' /> <br /> <br />
                <input type="email" placeholder='Your Email' /> <br /> <br />
                <input type="password" placeholder='Your Password' ></input> <br /> <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;