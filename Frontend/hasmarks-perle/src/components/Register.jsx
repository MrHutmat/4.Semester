import React, { useState, useRef, useEffect } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/i;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [succes, setSucces] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // To prevent JS "hacking"
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Fejl");
      return;
    }
    console.log(user, pwd);
    setSucces(true);
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
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
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  type="text"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  placeholder="eksempel@hasmarks-perle.dk"
                  className="input input-bordered"
                />
              </div>
              <div
                className={
                  userFocus && user && !validName
                    ? "badge badge-info flex gap-2"
                    : "hidden"
                }
              >
                <p> 4-24 chars.</p>
                <p>Must begin with a letter</p>
                <p>letter blab bla bla allowed.</p>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
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
                  pwdFocus && pwd && !validPwd
                    ? "badge badge-info flex gap-2"
                    : "hidden"
                }
              >
                <p> 4-24 chars.</p>
                <p>Must begin with a letter</p>
                <p>letter blab bla bla allowed.</p>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="confirm_password">
                  <span className="label-text">Bekræft password</span>
                </label>
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
                    ? "badge badge-info flex gap-2"
                    : "hidden"
                }
              >
                <p> 4-24 chars.</p>
                <p>Must begin with a letter</p>
                <p>letter blab bla bla allowed.</p>
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
