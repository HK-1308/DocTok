import React, { useEffect, useState} from 'react';
import { locale } from '../../resources/locales/locale';
import Button from '@mui/material/Button';

class LoginForm {
    username: string = "";
    pass: string = "";
}

export default function Login(){
    const [user, setUser] = useState<LoginForm>();

    useEffect(() => {
        setUser(new LoginForm())
    },[])

    return(
        <div>
            <h1>ТЕСТОВАЯ</h1>
            <input value={user?.username} />
            <input value={user?.pass} />
            <Button>{locale.authentication.login}</Button>
            <Button>{locale.authentication.register}</Button>
        </div>
    )
}