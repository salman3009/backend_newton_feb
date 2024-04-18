
import axios from 'axios';
import { useEffect, useState } from 'react';

function Register() {

    const [getData, setData] = useState({
        username:"",
        email:"",
        password:""
    });

    const onChangeHandler=(event)=>{
        setData({...getData,[event.target.name]:event.target.value})
    }

    const onSubmitHandler=(event)=>{
      event.preventDefault();
      console.log(getData);
    }



    return (<div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <form>
            <div className="form-group">
                    <label for="exampleInputEmail1">UserName</label>
                    <input type="text" name="username"  onChange={onChangeHandler} className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" onChange={onChangeHandler} name="email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" onChange={onChangeHandler} name="password"/>
                </div>
               
                <button type="submit" onClick={onSubmitHandler} className="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className="col-md-4"></div>
    </div>)
}
export default Register;