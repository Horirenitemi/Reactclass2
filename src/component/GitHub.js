import React, { useState,useEffect } from "react";
import axios from "axios"

const GitHub = () => {
    const [user, setUser] = useState([]);
    const url = "https://api.github.com/users/horirenitemi"

    const getData =async () =>{
        const res = await axios.get(url);
        setUser(res.data);
        console.log(user);
    };

    useEffect(() => {
        getData();
    }, [])
    return <div> 
    <div>This is coming from GitHub</div>
    <div>{user && user.login}</div>
    <img 
    scr ={user && user.avatar_url}
    alt="avatar"
    
    />
     </div>
    // </div>;
};

export default GitHub
