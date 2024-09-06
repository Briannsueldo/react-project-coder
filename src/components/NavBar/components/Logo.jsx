import { Link } from 'react-router-dom';
import './Logo.scss';

export const Logo = () => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='logo-svg'>
            <path fill="currentColor" fillRule="evenodd" d="M3.613 10.2V2l4.064 4.194zm11.381-3.04H9.02l3.044 12.747zm-6.827.04L11.773 22L4.241 11.044zm7.666 0L12.226 22l7.533-10.956zm4.554 3V2l-4.064 4.194z" clipRule="evenodd"/>
        </svg>
        <h3 className='titleName'><Link>FoxyTech</Link></h3>
    </>
}