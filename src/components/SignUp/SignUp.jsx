import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../assets/firebase/firebase.init";
import { useState } from "react";

const SignUp = () => {

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password < 6) {
            setError('Password should be 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Password at least one Uppercase')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);

                sendEmailVerification(result.user)
                    .then(() => {
                        alert('A verification email sent. Please check inbox to verify.')
                    })
                    .catch((error) => {
                        setError(error);
                    })
                setError('');
                setSuccess("Please verify your account");
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div className="">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Sign up</h1>
                        <p className="py-6">
                            Please Sign Up...
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignUp} className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" name="name" className="input w-full" placeholder="name" required />
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input w-full" placeholder="Email" required />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input w-full" placeholder="Password" required />
                                {
                                    error ? <div>
                                        <p className="text-red-500 font-bold">{error}</p>
                                    </div> :
                                        <div><p className="text-green-500 font-bold">{success}</p></div>
                                }
                                <button className="btn btn-neutral mt-4">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;