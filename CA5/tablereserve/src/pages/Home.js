import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Card from '../components/home/Card'
import backgr from "../assets/icons/food-4k.jpg"

const user = {
    id: 1,
    username: 'Farnamz',
    email: 'farnam1104@gmail.com',
};

const restaurants = [
    {
        id: 1,
        name: 'Shila',
        type: 'Fast Food',
        startTime: '09:00',
        endTime: '21:00',
        description: 'Yo yo description',
        address: {
            country: 'Iran',
            city: 'Tehran',
            street: 'Harja!',
        },
        averageRating: {
            food: 4,
            service: 4,
            ambiance: 3,
            overall: 4,
        },
        maxSeatsNumber: 15,
        starCount: 4,
        managerUsername: 'Misagh',
        image: 'shilaimage',
        totalReviews: 1,
    },
    {
        id: 2,
        name: 'Khoroos',
        type: 'Fast Food',
        startTime: '12:00',
        endTime: '24:00',
        description: 'Morgh sokhari e khoshmaze',
        address: {
            country: 'Iran',
            city: 'Tehran',
            street: 'Andarzgoo',
        },
        averageRating: {
            food: 5,
            service: 5,
            ambiance: 5,
            overall: 5,
        },
        maxSeatsNumber: 2,
        starCount: 5,
        managerUsername: 'Morgh',
        image: 'khoroosimage',
        totalReviews: 2,
    },
    {
        id: 3,
        name: 'Chaman',
        type: 'Fast Food',
        startTime: '11:00',
        endTime: '23:30',
        description: 'Zhambon tanoori vaaaay',
        address: {
            country: 'Iran',
            city: 'Tehran',
            street: 'Niavaran',
        },
        averageRating: {
            food: 5,
            service: 3,
            ambiance: 4,
            overall: 4,
        },
        maxSeatsNumber: 10,
        starCount: 4,
        managerUsername: 'Park',
        image: 'chamanimage',
        totalReviews: 3,
    }
]

function Home() {

    // const navigate = useNavigate();

    // function handleClick() {
    //     // logic
    //     navigate('/customer');
    // }
    const myStyle = {
        backgroundImage:
            `url(${backgr})`,
        height: "100vh",
        backgroundPosition: "left top",
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "100",
    };

    return (
        <div>
            <PageLayout>

                {/* Hero section */}
                <div style={myStyle}>
                    <div style={{ color: "white", fontSize: "110px", marginLeft: "530px", paddingTop: "280px" }}>Welcome</div>
                </div>

                <p style={{ fontSize: "20px", marginLeft: "170px", marginTop: "40px" }}>Top Restaurants</p>
                <div style={{ display: "flex" }}>
                    <Card id="1" />   
                    <Card id="2" />
                    <Card id="3" />
                </div>
                <p style={{fontSize:"20px", marginLeft: "620px", marginBottom:"50px", marginTop:"50px"}}>Thank you for using our services.</p>
            </PageLayout>
        </div>
    );
}

export default Home;