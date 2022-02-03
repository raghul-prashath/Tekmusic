import { Nav, Navbar} from 'react-bootstrap';
import '../index.css';


export default function Navbarc(){
    return(
    <Navbar collapseOnSelect expand="lg" variant="dark" className='nav' fixed='top'> 
        <Nav className='fonttm'>Tek Music</Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className='tognav' />
        <Navbar.Collapse id="basic-navbar-nav" className='fontnav'>
        <Nav className="ms-auto">
        
            <Nav.Link></Nav.Link>
            <Nav>Shows</Nav>
            <Nav.Link></Nav.Link>
            <Nav>Achievements</Nav>
            <Nav.Link></Nav.Link>
            <Nav>Members</Nav>
        </Nav>
        
        </Navbar.Collapse>
    </Navbar>
    )
}

