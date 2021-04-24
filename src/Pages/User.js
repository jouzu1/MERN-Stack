import React, {useState,useEffect}from 'react';
import {API_URL} from '../Config/Config';
import axios from 'axios';



function User(){
    const [data,setData] = useState({}); 

    const addUser = () => {
        axios.post(`${API_URL}/url`,data).then(response => {
            console.log(response.data)
        }).catch(err => console.log(err))
    }
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-5">
                <form onSubmit={(e)=> addUser(e)}>
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group">
                                <label>Fullname</label>
                                <input type='text' name='fullname' className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type='text' name='email' className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type='text' name='phone' className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Alamat</label>
                                <textarea type='text' name='address' className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="card-footer text-right">
                            <button className="btn btn-md btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default User;