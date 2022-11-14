import React, {useState} from 'react'
import adminsdata from '../data/adminsdata';

const Login = props => {

    const [username, setUser] = useState();
    const [password, setPass] = useState();
    const [alert, setAlert] = useState();
    const [style, setStyle] = useState();
    const authenticationLogin =(e)=>{
            e.preventDefault();
        if (!username || !password) {
            setAlert("Fill out field");
            setStyle('alert alert-danger');

        }else{
            if (username === adminsdata[0].username && password === adminsdata[0].password) {
                props.history.push('/dashboard');
            }else{
                setAlert('passord or username is wrong!');
                setStyle('alert alert-danger');
            }
        }
    }
  return (
    <form className=' col-12 login-page' onSubmit={authenticationLogin}>
        {/* <h1 className='text-center'>Login </h1>
        <h6 className={`text-center ${style}`}>{alert}</h6>
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">Username </label>
    <input onChange={(e)=>{
        setUser(e.target.value);
    }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your username with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={(e)=>{
        setPass(e.target.value);
    }}className="form-control" id="exampleInputPassword1"/>
  </div> */}
  {/* {username}|
  {password} */}
   <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2" />
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true" />
            </div>
            <div className="col-lg-12 login-title">
            <h1 className='text-center'>Login </h1>
        <h6 className={`text-center ${style}`}>{alert}</h6>
            </div>
            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                  <div className="form-group">
                  <label for="exampleInputEmail1" className="form-control-label">Username </label>
    <input onChange={(e)=>{
        setUser(e.target.value);
    }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="form-group">
                  <label for="exampleInputPassword1" className="form-control-label">Password</label>
    <input type="password" onChange={(e)=>{
        setPass(e.target.value);
    }}className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                      {/* Error Message */}
                    </div>
                    
                  </div>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">LOGIN</button>
            <div className="col-lg-3 col-md-2" />
          </div>
        </div>
      </div>
</form>
  )
}

export default Login;