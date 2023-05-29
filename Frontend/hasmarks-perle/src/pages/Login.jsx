import React, { useState, useRef, useEffect } from "react";
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [succes, setSucces] = useState(false);
  const [errMsg, setErrMsg] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredentials) => {
        console.log(userCredentials)
      }).catch((errMsg) => {
        console.log(errMsg)
      })
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-4xl">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login her!</h1>
          <p className="py-6">
            For at gøre ting nemmere er det bedre og logge ind, og det her er
            mere eller mindre til en test
          </p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
          <div className="card-body">
            <div className="form-control">
              <label className="label" htmlFor="">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                type="text"
                placeholder="eksempel@hasmarks-perle.dk"
                className="input input-bordered"

              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label" htmlFor="">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  id="password"
                  required
                  onChange={(e) => setPwd(e.target.value)}
                />
                <label className="label" htmlFor="">
                  <span className="label-text-alt">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-primary mr-2 align-text-bottom"
                    />
                    Vil du huskes?{" "}
                  </span>

                  <a href="#" className="label-text-alt link link-hover">
                    Glemt kode?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-6">
                <p className="label-text">Har du ikke oprettet en bruger?</p>
                <button className="btn btn-secondary">Opret bruger</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
