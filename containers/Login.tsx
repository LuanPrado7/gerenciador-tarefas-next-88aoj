import type {NextPage} from 'next';

export const Login : NextPage = () => {
    return (
        <div className='container-login'>
            <img className='logo' src="logo.svg" alt="Logo Fiap" />
            <div className="form">
                <div>
                    <img src="mail.svg" alt="Login" />
                    <input type="text" placeholder='Login'/>
                </div>
                <div>
                    <img src="lock.svg" alt="Senha" />
                    <input type="password" placeholder='Senha'/>
                </div>
                <button type='button'>Login</button>
            </div>
        </div>
    );
}