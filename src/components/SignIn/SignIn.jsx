import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../assets/firebase/firebase.init";
import { useState } from "react";

const SignIn = () => {

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess('User Signed In successfully !')
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <p className="py-6">
                            Please Sign in...
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignIn} className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input w-full" placeholder="Email" required />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input w-full" placeholder="Password" required />
                                {
                                    error ?
                                        <p className="font-bold text-red-500">{error}</p>
                                        :
                                        <p className="font-bold text-green-500">{success}</p>
                                }
                                <button className="btn btn-neutral mt-4">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>ƒ
        </div>
    );
};

export default SignIn;