import { Link } from 'react-router-dom';
import '../style/NavBar.css';

export default function NavBar() {
    return (
        <nav className='navbar'>
            <ul>
                <li><Link className='/' to="/">Home</Link></li>
                <li><Link to="/animacoes">Animação</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    );
}