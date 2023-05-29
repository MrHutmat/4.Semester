import React, { useState, useRef, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/i;

const Register = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validName, setValidName] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidName(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);


  const navigatge = useNavigate()

  const { createUser } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("Der skete en fejl")
    // To prevent JS "hacking"
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Fejl");
      return;
    }
    try {
      await createUser(email, pwd)
      navigatge("/accountpage")
    } catch (e) {
      setErrMsg(e.message);
      console.log(e.message);

    }

  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-4xl">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registrer her!</h1>
          <p className="py-6">
            For at gøre ting nemmere er det bedre og logge ind, og det her er
            mere eller mindre til en test
          </p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
          <div className="card-body">
            <div
              ref={errRef}
              className={errMsg ? "alert alert-warning shadow-lg" : "hidden"}
            >
              {errMsg}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <div className="flex">
                  <label className="label" htmlFor="email">
                    <span className="label-text">Email</span>
                    <span className={validName ? "text-green-500 ml-2 " : "hidden"}>
                      <FaCheck size={12} />
                    </span>
                    <span className={validName || !email ? "hidden" : "text-red-500 ml-2"}>
                      <FaTimes />
                    </span>
                  </label>
                </div>
                <input
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="text"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  placeholder="eksempel@hasmarks-perle.dk"
                  className="input input-bordered"
                />

              </div>
              <div
                className={
                  emailFocus && email && !validName
                    ? "alert alert-warning flex-col items-start text-xs font-bold mt-3 mb-5"
                    : "hidden"
                }
              >
                <p>4-24 chars.</p>
                <p>Must begin with a letter</p>
                <p>letter blab bla bla allowed.</p>
              </div>
              <div className="form-control">
                <div className="flex">
                  <label className="label" htmlFor="password">
                    <span className="label-text">Password</span>
                    <span className={validPwd ? "text-green-500 ml-2 " : "hidden"}>
                      <FaCheck size={12} />
                    </span>
                    <span className={validPwd || !pwd ? "hidden" : "text-red-500 ml-2"}>
                      <FaTimes />
                    </span>
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  required
                  onChange={(e) => setPwd(e.target.value)}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div
                className={
                  pwdFocus && !validPwd
                    ? "alert alert-warning flex-col items-start text-xs font-bold mt-3 mb-5"
                    : "hidden"
                }
              >
                <p>4-24 chars.</p>
                <p>Must begin with a letter</p>
                <p>letter blab bla bla allowed.</p>
              </div>
              <div className="form-control">
                <div className="flex">
                  <label className="label" htmlFor="confirm_password">
                    <span className="label-text">Bekræft password</span>
                    <span className={validMatch && matchPwd ? "text-green-500 ml-2 " : "hidden"}>
                      <FaCheck size={12} />
                    </span>
                    <span className={validMatch || !matchPwd ? "hidden" : "text-red-500 ml-2"}>
                      <FaTimes />
                    </span>
                  </label>
                </div>
                <input
                  type="password"
                  id="confirm_password"
                  required
                  onChange={(e) => setMatchPwd(e.target.value)}
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div
                className={
                  matchFocus && !validMatch
                    ? "alert alert-warning flex-col items-start text-xs font-bold mt-3 mb-5"
                    : "hidden"
                }
              >
                <p>Koden skal være det samme begge steder</p>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  disabled={
                    !validName || !validPwd || !validMatch ? true : false
                  }
                >
                  Opret bruger
                </button>
              </div>
            </form>
            <p className="label-text">Har du allerede oprettet en bruger?</p>
            <button className="btn btn-secondary">Login her</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
