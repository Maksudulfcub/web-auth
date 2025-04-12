
const SignIn = () => {
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
                            <form className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input w-full" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input w-full" placeholder="Password" />
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