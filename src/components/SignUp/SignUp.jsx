
const SignUp = () => {

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
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
                                <input type="text" name="name" className="input w-full" placeholder="name" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input w-full" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input w-full" placeholder="Password" />
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