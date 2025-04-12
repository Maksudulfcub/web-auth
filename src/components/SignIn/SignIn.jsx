import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import auth from "../../assets/firebase/firebase.init";
import { useRef, useState } from "react";

const SignIn = () => {

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const emailRef = useRef(null);

    const provider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

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
                console.log(error.message);
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                setSuccess('Google signed in')
                setError('')
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    const handleGoogleLogOut = () => {
        signOut(auth)
            .then(console.log('Logged out'))
            .catch()
    }

    const handleForgotPass = () => {
        const email = emailRef.current.value;
        if (!email) {
            setError('Please provide correct email');
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Email sent to your inbox. Please check !')
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const handleTwitterLogin = () => {
        signInWithPopup(auth, twitterProvider)
            .then((result) => {
                console.log(result.user);
                setSuccess('Twitter logged in successfully !')
            })
            .catch((error) => {
                setError(error);
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
                                <input type="email" ref={emailRef} name="email" className="input w-full" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input w-full" placeholder="Password" />
                                <div><a onClick={handleForgotPass} className="link link-hover">Forgot password?</a></div>
                                {
                                    error &&
                                    <p className="font-bold text-red-500">{error}</p>
                                }
                                {
                                    success &&
                                    <p className="font-bold text-green-500">{success}</p>
                                }
                                <button className="btn btn-neutral mt-4">Sign In</button>
                                <hr className="mt-5 text-gray-400" />
                                <button onClick={handleGoogleSignIn} className="btn btn-primary text-white mt-5 w-1/2 mx-auto">Sign in with Google</button>
                                <button onClick={handleTwitterLogin} className="btn btn-info text-white mt-5 w-1/2 mx-auto">Sign in with Twitter</button>
                                <button onClick={handleGoogleLogOut} className="btn btn-primary text-white mt-5 w-1/2 mx-auto">Log Out</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>ƒ
        </div>
    );
};

export default SignIn;