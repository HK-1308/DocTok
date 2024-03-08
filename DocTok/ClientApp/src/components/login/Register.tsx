import React, { useEffect, useState} from 'react';

class RegisterForm {
    username: string = "";
    email: string = "";
    pass: string = "";
}

export default function Login(){
    const [user, setUser] = useState<RegisterForm>();

    useEffect(() => {
        setUser(new RegisterForm())
    },[])

    return(
        <div>
            <input value={user?.username} />
            <input value={user?.email} />
            <input value={user?.pass} />
        </div>
    )
}