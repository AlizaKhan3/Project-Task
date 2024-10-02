import React from "react";
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Display map here!</h1>
            <Button  type="primary"><Link to="/login">  Login</Link></Button>
            <Button  type="primary"><Link to="/register">Register</Link></Button>
        </div>
    )
}

export default Home;