import { Link, useNavigate } from 'react-router-dom';
import foodicon from '../../assets/icons/foodicon.png';
import '../../assets/stylesheets/Header.css';

const user = {
    id: 1,
    username: 'Farnamz',
    email: 'farnam1104@gmail.com',
};

function Header() {
    // const navigate = useNavigate();
    // const id = useParams().id;
    return (
        <div style={{ display: "flex", position: "sticky", boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)" }}>
            <Link to='/'><img src={foodicon} style={{ marginTop: "10px", marginLeft: "50px", width: "70px" }} /></Link>
            <h2 style={{ color: "red", marginLeft: "30px", marginTop: "25px" }}>Reserve table!</h2>
            <h3 style={{ color: "black", marginLeft: "860px", marginTop: "29px" }}>Welcome, {user.username}!</h3>
            <Link to='/customer'><button style={{ backgroundColor: "red", border: "2px solid transparent", borderRadius: "8ch", marginLeft: "25px", height: "50px", marginTop: "19px", color: "white", width: "140px" }}>My Reservations</button></Link>
        </div>
    );
}

export default Header;