import type {NextPage} from 'next';
import { useState } from 'react';
import { executeRequest } from '../services/apis';

type LoginProps = {
    setAccessToken(s: string) : void
}

export const Login : NextPage<LoginProps> = ({setAccessToken}) => {
    const [email, setEmail] = useState('luan@luan.com');
    const [password, setPassword] = useState('Luan@12345');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const doLogin = async () => {
        try {
            if(!email || !password) {
                return setError('Favor preenche os campos.');
            }
            
            setLoading(true);

            const body = {
                login: email,
                password
            }

            const result = await executeRequest('login', 'POST', body);   
            
            if(result && result.data) {
                localStorage.setItem('accessToken', result.data.token);
                localStorage.setItem('name', result.data.name);
                localStorage.setItem('email', result.data.email);
                setAccessToken(result.data.token);
            }
            
        } catch (e : any) {
            if(e?.response?.data?.error) {
                setError(e?.response?.data?.error);
            } else {
                setError("Ocorreu um erro, tente novamente.");
            }
        }

        setLoading(false);
    }

    return (
        <div className='container-login'>
            <img className='logo' src="logo.svg" alt="Logo Fiap" />
            <div className="form">
                <p>{error}</p>
                <div>
                    <img src="mail.svg" alt="Login" />
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Login'/>
                </div>
                <div>
                    <img src="lock.svg" alt="Senha" />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha'/>
                </div>
                <button type='button' onClick={doLogin} disabled={loading}>{loading ? 'Carregando' : 'Login'}</button>
            </div>
        </div>
    );
}