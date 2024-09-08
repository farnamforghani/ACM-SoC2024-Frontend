import Button from 'react-bootstrap/Button';
import Cart from 'react-bootstrap/Card';
import chaman from "../../assets/icons/chaman.jpg";
import khoroos from "../../assets/icons/khoroos.jpg";
import shila from "../../assets/icons/shila.jpg";
import loc from "../../assets/icons/free-location-icon.png";
import Stars from './Stars';
import { Link, useNavigate } from 'react-router-dom';


const restaurants = [
    {
        id: 1,
        name: 'Shila',
        type: 'Fast Food',
        startTime: '08:00',
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
        endTime: '23:00',
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


function Card({ id }) {
    let picture = "";
    if (id == "1") {
        picture = shila;
    }
    else if (id == "2") {
        picture = khoroos;
    }
    else {
        picture = chaman;
    }

    let title = restaurants[parseInt(id) - 1].name;
    let reviews = restaurants[parseInt(id) - 1].totalReviews + " reviews";
    let kind = restaurants[parseInt(id) - 1].type;
    let location = restaurants[parseInt(id) - 1].address.city;
    let star = restaurants[parseInt(id) - 1].starCount;
    let linkres = '/restaurant/' + id

    let starttime = restaurants[parseInt(id) - 1].startTime;
    let endtime = restaurants[parseInt(id) - 1].endTime;

    let es = starttime.split(":");
    let starthour = parseInt(es[0]);
    let es2 = endtime.split(":");
    let endhour = parseInt(es2[0]);

    let isOpen = true;
    var currentdate = new Date();

    if (parseInt(currentdate.getHours()) < starthour || parseInt(currentdate.getHours()) >= endhour) {
        isOpen = false;
    }

    // isOpen = true


    return (
        <div>

            <Cart style={{ width: '280px', marginLeft: "170px", backgroundColor: "#eeeeee" }}>
                <Cart.ImgOverlay style={{ marginTop: "10px", position: "absolute" }}>
                    <Stars count={star} />
                </Cart.ImgOverlay>
                <Link to={linkres}><Cart.Img variant="top" src={picture} width={"280px"} height={"220px"} /></Link>

                <Cart.Body style={{ marginLeft: "10px" }}>
                    <Cart.Title as={"h2"}>{title}</Cart.Title>
                    <Cart.Text>
                        <p style={{ color: "gray" }}>{reviews}</p>
                        <p> {kind}</p>
                        <p><img src={loc} style={{ width: "15px" }} /> {location} </p>
                        {isOpen ? (
                            <p style={{ paddingBottom: "10px" }}><span style={{ color: "green" }}>Open</span> &middot; Closes at {endtime}</p>
                        ) : (
                            <p style={{ paddingBottom: "10px" }}><span style={{ color: "red" }}>Closed</span> &middot; Open at {starttime}</p>
                        )}
                    </Cart.Text>
                </Cart.Body>
            </Cart>

        </div>
    );
}

export default Card;