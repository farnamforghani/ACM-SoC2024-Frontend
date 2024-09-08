import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

const user = {
    id: 1,
    username: 'Farnamz',
    email: 'farnam1104@gmail.com',
};

function Customer() {
    const navigate = useNavigate();

    return (
        <div>
            <PageLayout>
                <div style={{height: "515px", marginLeft: "140px"}}> 
                    <div style={{display:"flex", marginTop:"80px", justifyContent:"center", backgroundColor: "#eeeeee", width: "1200px"}}>
                        <p>Your reservations are also emailed to <span style={{color:"red"}}>{user.email}</span></p>
                        <p style={{marginLeft:"430px"}}>Address: Tehran, Fatemi</p>
                        <button style={{ backgroundColor: "red", border: "2px solid transparent", borderRadius: "8ch", marginLeft: "25px", height: "40px", marginTop: "8px", color: "white", width: "90px" }}>Logout</button>
                    </div>
                    <h4 style={{marginTop:"30px", marginLeft:"560px"}}>Work in Progress...</h4>
                </div>
            </PageLayout>
        </div>
    );
}

export default Customer;