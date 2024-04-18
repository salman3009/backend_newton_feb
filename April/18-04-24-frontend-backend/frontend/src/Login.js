
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [getData, setData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setData({ ...getData, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(getData);
        axios.post('http://localhost:8080/api/v1/user/login', getData).then((result) => {
            console.log(result.data.token);
            sessionStorage.setItem('token',result.data.token);
            navigate('/dashboard');
        }).catch((err) => {
            console.log(err);
            alert("server error");
        })
    }



    return (<div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <form>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" onChange={onChangeHandler} name="email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" onChange={onChangeHandler} name="password" />
                </div>

                <button type="submit" onClick={onSubmitHandler} className="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className="col-md-4"></div>
    </div>)
}
export default Login;