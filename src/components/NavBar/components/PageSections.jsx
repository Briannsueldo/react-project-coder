import { Link } from 'react-router-dom'
import './PageSections.scss'

export const PageSections = () => {
    return <>
        <ul className="sections-container">
            <li className="section-item"><Link to="/">Main</Link></li>
            <li className="section-item"><Link to="/products">Products</Link></li>
            <li className="section-item"><Link to="/contact">contact</Link></li>
        </ul>
    </>
}