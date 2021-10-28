import { signIn, signOut,  useSession } from 'next-auth/client'

import styled from './styles.module.scss';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton(){

    const [session] = useSession();

    return session ? (
        <button className={styled.signInButton}
         type="button"
         onClick={() => signOut()}
         >
            <FaGithub color='#04d361' />
            {session.user.name}
            <FiX color='#737380' className={styled.closeIcon}/>
        </button>
    ) : (
        <button className={styled.signInButton}
         type="button"
            onClick={() => signIn('github')}
         >
            <FaGithub color='#eba417' />
            SignIn with button
        </button>
    )
}