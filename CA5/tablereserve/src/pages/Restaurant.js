import { Link, useNavigate, useParams } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import chaman from "../assets/icons/chaman.jpg";
import khoroos from "../assets/icons/khoroos.jpg";
import shila from "../assets/icons/shila.jpg";
import loc from "../assets/icons/free-location-icon.png";
import fastfood from "../assets/icons/fastfood.png";
import clock from "../assets/icons/clock.png";
import review from "../assets/icons/review.png";
import Stars from "../components/home/Stars";
import Comment from "../components/restaurant/Comment";
import React, { useEffect, useState } from 'react';
import Modal from "../components/restaurant/Modal";
import star1 from "../assets/icons/star1.png";
import star0 from "../assets/icons/star0.jpg";



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

const comments = [
    {
        rating: {
            food: 5,
            service: 4,
            ambiance: 4,
            overall: 5,
        },
        starCount: 5,
        comment: 'Perfection.',
        datetime: '2024-08-25 19:45:32',
        user: {
            id: 1,
            username: 'Farnam1',
            email: 'farnam1@gmail.com',
        },
    },
    {
        rating: {
            food: 4,
            service: 3,
            ambiance: 4,
            overall: 5,
        },
        starCount: 4,
        comment: 'That was gooooood!',
        datetime: '2024-08-24 19:45:32',
        user: {
            id: 2,
            username: 'Farnam2',
            email: 'farnam2@gmail.com',
        },
    },
    {
        rating: {
            food: 3,
            service: 2,
            ambiance: 4,
            overall: 3,
        },
        starCount: 3,
        comment: 'Ok!',
        datetime: '2024-08-15 19:45:32',
        user: {
            id: 3,
            username: 'Farnam3',
            email: 'farnam3@gmail.com',
        },
    },
    {
        rating: {
            food: 4,
            service: 4,
            ambiance: 4,
            overall: 4,
        },
        starCount: 4,
        comment: 'Ummmmm!',
        datetime: '2024-07-25 19:45:32',
        user: {
            id: 4,
            username: 'Farnam4',
            email: 'farnam4@gmail.com',
        },
    },
    {
        rating: {
            food: 5,
            service: 5,
            ambiance: 5,
            overall: 5,
        },
        starCount: 5,
        comment: 'YUuuumummdlgngnaineakfaf;oqmeqmflknfqekgnlqgkngnwg!!!!!!!!!',
        datetime: '2024-08-24 02:45:32',
        user: {
            id: 5,
            username: 'Fatnam5',
            email: 'farnam5@gmail.com',
        },
    },
    {
        rating: {
            food: 1,
            service: 1,
            ambiance: 1,
            overall: 1,
        },
        starCount: 1,
        comment: 'In che ashghali boof!',
        datetime: '2024-08-20 19:45:32',
        user: {
            id: 6,
            username: 'Nafarnam6',
            email: 'farnam6@gmail.com',
        },
    }
]

function Restaurant() {
    // const navigate = useNavigate();
    const id = useParams().id;
    let imag = "";
    if (id == "1") {
        imag = shila;
    }
    else if (id == "2") {
        imag = khoroos;
    }
    else {
        imag = chaman;
    }

    let marg = "";
    if (id == "1") {
        marg = "336px";
    }
    else if (id == "2") {
        marg = "284px";
    }
    else {
        marg = "287px";
    }

    let title = restaurants[parseInt(id) - 1].name;
    let reviews = restaurants[parseInt(id) - 1].totalReviews + " reviews";
    let kind = restaurants[parseInt(id) - 1].type;
    let location = restaurants[parseInt(id) - 1].address.country + "," + restaurants[parseInt(id) - 1].address.city + "," + restaurants[parseInt(id) - 1].address.street;
    let star = restaurants[parseInt(id) - 1].starCount;
    let linkres = '/restaurant/' + id;
    let clocktime = "From " + restaurants[parseInt(id) - 1].startTime + " to " + restaurants[parseInt(id) - 1].endTime;
    let description = restaurants[parseInt(id) - 1].description;
    let base = 0;
    if (parseInt(id) == 2) {
        base = 1;
    }
    else if (parseInt(id) == 3) {
        base = 3;
    }
    let h = 0;

    // let dateok = false;

    //TODO

    // let datenow = new Date();
    // const [value, setValue] = useState('');
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    //     if (datenow > value){
    //         console.log("retere");
    //         dateok = true;
    //     }
    // };


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
    // isOpen = false;

    let canReserve = false;


    const [hourbut, sethourbut] = React.useState(false);
    const [hour1but, sethour1but] = React.useState(false);
    const [hour2but, sethour2but] = React.useState(false);
    const [hour3but, sethour3but] = React.useState(false);
    const [hour4but, sethour4but] = React.useState(false);
    const [hour5but, sethour5but] = React.useState(false);
    const [hour6but, sethour6but] = React.useState(false);
    const [hour7but, sethour7but] = React.useState(false);
    const [hour8but, sethour8but] = React.useState(false);
    const [hour9but, sethour9but] = React.useState(false);
    const [hour10but, sethour10but] = React.useState(false);
    const [hour11but, sethour11but] = React.useState(false);
    const [hour12but, sethour12but] = React.useState(false);

    const hour1 = () => {
        sethour1but(true);
        sethourbut(true);
        sethour2but(false);
        sethour3but(false);
        sethour4but(false);
        sethour5but(false);
        sethour6but(false);
        sethour7but(false);
        sethour8but(false);
        sethour9but(false);
        sethour10but(false);
        sethour11but(false);
        sethour12but(false);
    }
    const hour2 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(true);
        sethour3but(false);
        sethour4but(false);
        sethour5but(false);
        sethour6but(false);
        sethour7but(false);
        sethour8but(false);
        sethour9but(false);
        sethour10but(false);
        sethour11but(false);
        sethour12but(false);
    }
    const hour3 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(false);
        sethour3but(true);
        sethour4but(false);
        sethour5but(false);
        sethour6but(false);
        sethour7but(false);
        sethour8but(false);
        sethour9but(false);
        sethour10but(false);
        sethour11but(false);
        sethour12but(false);
    }
    const hour4 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(false);
        sethour3but(false);
        sethour4but(true);
        sethour5but(false);
        sethour6but(false);
        sethour7but(false);
        sethour8but(false);
        sethour9but(false);
        sethour10but(false);
        sethour11but(false);
        sethour12but(false);
    }
    const hour5 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(false);
        sethour3but(false);
        sethour4but(false);
        sethour5but(true);
        sethour6but(false);
        sethour7but(false);
        sethour8but(false);
        sethour9but(false);
        sethour10but(false);
        sethour11but(false);
        sethour12but(false);
    }
    const hour6 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(false);
        sethour3but(false);
        sethour4but(false);
        sethour5but(false);
        sethour6but(true);
        sethour7but(false);
        sethour8but(false);
        sethour9but(false);
        sethour10but(false);
        sethour11but(false);
        sethour12but(false);
    }
    const hour7 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(false);
        sethour3but(false);
        sethour4but(false);
        sethour5but(false);
        sethour6but(false);
        sethour7but(true);
        sethour8but(false);
        sethour9but(false);
        sethour10but(false);
        sethour11but(false);
        sethour12but(false);
    }
    const hour8 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(false);
        sethour3but(false);
        sethour4but(false);
        sethour5but(false);
        sethour6but(false);
        sethour7but(false);
        sethour8but(true);
        sethour9but(false);
        sethour10but(false);
        sethour11but(false);
        sethour12but(false);
    }
    const hour9 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(false);
        sethour3but(false);
        sethour4but(false);
        sethour5but(false);
        sethour6but(false);
        sethour7but(false);
        sethour8but(false);
        sethour9but(true);
        sethour10but(false);
        sethour11but(false);
        sethour12but(false);
    }
    const hour10 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(false);
        sethour3but(false);
        sethour4but(false);
        sethour5but(false);
        sethour6but(false);
        sethour7but(false);
        sethour8but(false);
        sethour9but(false);
        sethour10but(true);
        sethour11but(false);
        sethour12but(false);
    }
    const hour11 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(false);
        sethour3but(false);
        sethour4but(false);
        sethour5but(false);
        sethour6but(false);
        sethour7but(false);
        sethour8but(false);
        sethour9but(false);
        sethour10but(false);
        sethour11but(true);
        sethour12but(false);
    }
    const hour12 = () => {
        sethour1but(false);
        sethourbut(true);
        sethour2but(false);
        sethour3but(false);
        sethour4but(false);
        sethour5but(false);
        sethour6but(false);
        sethour7but(false);
        sethour8but(false);
        sethour9but(false);
        sethour10but(false);
        sethour11but(false);
        sethour12but(true);
    }


    const [mod, setMod] = React.useState(false);

    const handleClose = () => {
        setMod(false);
        setserviceSumbit(false);
        setoverallSumbit(false);
        setambianceSumbit(false);
        setfoodSumbit(false);
        setfoodstar1(false);
        setfoodstar2(false);
        setfoodstar3(false);
        setfoodstar4(false);
        setfoodstar5(false);
        setservicestar1(false);
        setservicestar2(false);
        setservicestar3(false);
        setservicestar4(false);
        setservicestar5(false);
        setambiancestar1(false);
        setambiancestar2(false);
        setambiancestar3(false);
        setambiancestar4(false);
        setambiancestar5(false);
        setoverallstar1(false);
        setoverallstar2(false);
        setoverallstar3(false);
        setoverallstar4(false);
        setoverallstar5(false);
    };

    const handleOpen = () => {
        setMod(true);
    };

    const [foodstar1, setfoodstar1] = React.useState(false);
    const [foodstar2, setfoodstar2] = React.useState(false);
    const [foodstar3, setfoodstar3] = React.useState(false);
    const [foodstar4, setfoodstar4] = React.useState(false);
    const [foodstar5, setfoodstar5] = React.useState(false);
    const [servicestar1, setservicestar1] = React.useState(false);
    const [servicestar2, setservicestar2] = React.useState(false);
    const [servicestar3, setservicestar3] = React.useState(false);
    const [servicestar4, setservicestar4] = React.useState(false);
    const [servicestar5, setservicestar5] = React.useState(false);
    const [ambiancestar1, setambiancestar1] = React.useState(false);
    const [ambiancestar2, setambiancestar2] = React.useState(false);
    const [ambiancestar3, setambiancestar3] = React.useState(false);
    const [ambiancestar4, setambiancestar4] = React.useState(false);
    const [ambiancestar5, setambiancestar5] = React.useState(false);
    const [overallstar1, setoverallstar1] = React.useState(false);
    const [overallstar2, setoverallstar2] = React.useState(false);
    const [overallstar3, setoverallstar3] = React.useState(false);
    const [overallstar4, setoverallstar4] = React.useState(false);
    const [overallstar5, setoverallstar5] = React.useState(false);
    const [foodSubmit, setfoodSumbit] = React.useState(false);
    const [serviceSubmit, setserviceSumbit] = React.useState(false);
    const [ambianceSubmit, setambianceSumbit] = React.useState(false);
    const [overallSubmit, setoverallSumbit] = React.useState(false);

    const foodstar1click = () => {
        setfoodstar1(true);
        setfoodstar2(false);
        setfoodstar3(false);
        setfoodstar4(false);
        setfoodstar5(false);
        setfoodSumbit(true);
    };
    const foodstar2click = () => {
        setfoodstar2(true);
        setfoodstar1(true);
        setfoodstar3(false);
        setfoodstar4(false);
        setfoodstar5(false);
        setfoodSumbit(true);
    };
    const foodstar3click = () => {
        setfoodstar3(true);
        setfoodstar2(true);
        setfoodstar1(true);
        setfoodstar4(false);
        setfoodstar5(false);
        setfoodSumbit(true);
    };
    const foodstar4click = () => {
        setfoodstar4(true);
        setfoodstar3(true);
        setfoodstar2(true);
        setfoodstar1(true);
        setfoodstar5(false);
        setfoodSumbit(true);
    };
    const foodstar5click = () => {
        setfoodstar5(true);
        setfoodstar4(true);
        setfoodstar3(true);
        setfoodstar2(true);
        setfoodstar1(true);
        setfoodSumbit(true);
    };
    const servicestar1click = () => {
        setservicestar1(true);
        setservicestar2(false);
        setservicestar3(false);
        setservicestar4(false);
        setservicestar5(false);
        setserviceSumbit(true);
    };
    const servicestar2click = () => {
        setservicestar2(true);
        setservicestar3(false);
        setservicestar4(false);
        setservicestar5(false);
        setservicestar1(true);
        setserviceSumbit(true);
    };
    const servicestar3click = () => {
        setservicestar3(true);
        setservicestar2(true);
        setservicestar1(true);
        setservicestar5(false);
        setservicestar4(false);
        setserviceSumbit(true);
    };
    const servicestar4click = () => {
        setservicestar1(true);
        setservicestar3(true);
        setservicestar2(true);
        setservicestar4(true);
        setservicestar5(false);
        setserviceSumbit(true);
    };
    const servicestar5click = () => {
        setservicestar5(true);
        setservicestar4(true);
        setservicestar3(true);
        setservicestar2(true);
        setservicestar1(true);
        setserviceSumbit(true);
    };
    const ambiancestar1click = () => {
        setambiancestar1(true);
        setambiancestar2(false);
        setambiancestar3(false);
        setambiancestar4(false);
        setambiancestar5(false);
        setambianceSumbit(true);
    };
    const ambiancestar2click = () => {
        setambiancestar1(true);
        setambiancestar2(true);
        setambiancestar3(false);
        setambiancestar4(false);
        setambiancestar5(false);
        setambianceSumbit(true);
    };
    const ambiancestar3click = () => {
        setambiancestar1(true);
        setambiancestar2(true);
        setambiancestar3(true);
        setambiancestar4(false);
        setambiancestar5(false);
        setambianceSumbit(true);
    };
    const ambiancestar4click = () => {
        setambiancestar1(true);
        setambiancestar2(true);
        setambiancestar3(true);
        setambiancestar4(true);
        setambiancestar5(false);
        setambianceSumbit(true);
    };
    const ambiancestar5click = () => {
        setambiancestar5(true);
        setambiancestar4(true);
        setambiancestar3(true);
        setambiancestar2(true);
        setambiancestar1(true);
        setambianceSumbit(true);
    };
    const overallstar1click = () => {
        setoverallstar1(true);
        setoverallstar2(false);
        setoverallstar3(false);
        setoverallstar4(false);
        setoverallstar5(false);
        setoverallSumbit(true);
    };
    const overallstar2click = () => {
        setoverallstar1(true);
        setoverallstar2(true);
        setoverallstar3(false);
        setoverallstar4(false);
        setoverallstar5(false);
        setoverallSumbit(true);
    };
    const overallstar3click = () => {
        setoverallstar1(true);
        setoverallstar2(true);
        setoverallstar3(true);
        setoverallstar4(false);
        setoverallstar5(false);
        setoverallSumbit(true);
    };
    const overallstar4click = () => {
        setoverallstar1(true);
        setoverallstar2(true);
        setoverallstar3(true);
        setoverallstar4(true);
        setoverallstar5(false);
        setoverallSumbit(true);
    };
    const overallstar5click = () => {
        setoverallstar1(true);
        setoverallstar2(true);
        setoverallstar3(true);
        setoverallstar4(true);
        setoverallstar5(true);
        setoverallSumbit(true);
    };

    const [dateok, setdateok] = React.useState(false);
    const [datefix, setdatefix] = React.useState(false);
    const [dateinput, setdateinput] = React.useState('');

    // Note: This section (useEffect) has a bug and i can't find it!

    useEffect(() => {
        // console.log(dateinput);
        // changedate();
    }, [dateinput, dateok, datefix]);

    const changedate = (e) => {
        setdateinput(e.target.value);
        let datee = dateinput.split("-");
        let ye = parseInt(datee[0]);
        let mo = parseInt(datee[1]);
        let da = parseInt(datee[2]);
        let dat = new Date();

        if ((parseInt(dat.getFullYear()) > ye) || ((parseInt(dat.getFullYear()) == ye) && (parseInt(dat.getMonth()) + 1 > mo)) || ((parseInt(dat.getFullYear()) == ye) && (parseInt(dat.getMonth()) + 1 == mo) && (parseInt(dat.getDate()) > da))) {
            setdateok(true);
            setdatefix(false);
        }

        else {
            setdateok(false);
            setdatefix(true);
        }
    };

    return (
        <PageLayout>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <div style={{ display: "flex", position: "absolute", backgroundColor: "#ffffff88", marginTop: "315px", marginLeft: "150px" }}>
                        <h1 style={{ paddingLeft: "20px" }}>{title}</h1>
                        <p style={{ paddingTop: "14px", marginLeft: marg, paddingRight: "20px" }}>
                            {isOpen ? (
                                <button style={{ color: "white", backgroundColor: "green", border: "2px solid transparent", height: "30px", borderRadius: "3ch" }}>Open!</button>
                            ) : (
                                <button style={{ color: "white", backgroundColor: "red", border: "2px solid transparent", height: "30px", borderRadius: "3ch" }}>Closed!</button>
                            )}
                        </p>
                    </div>
                    <img src={imag} width={"500px"} style={{ height: "300px", marginLeft: "150px", marginTop: "100px" }} />
                    <div style={{ display: "flex", marginLeft: "150px", justifyContent: "space-between" }}>
                        <p><img src={clock} style={{ width: "15px" }} /> {clocktime} </p>
                        <p><img src={review} style={{ width: "15px" }} /> {reviews} </p>
                        <p><img src={fastfood} style={{ width: "15px" }} /> {kind} </p>
                    </div>
                    <p style={{ color: "gray" }}><img src={loc} style={{ width: "15px", marginLeft: "150px" }} /> {location} </p>
                    <p style={{ marginLeft: "150px" }}>{description}</p>
                </div>
                <div style={{ marginLeft: "40px" }}>
                    <h1 style={{ marginTop: "90px", marginRight: "600px" }}>Reserve Table</h1>
                    <p>For &nbsp;
                        <select name='numberreserve' id='numberreserve'>
                            {[...Array(parseInt(restaurants[parseInt(id) - 1].maxSeatsNumber))].map((_, i) => (
                                <option>{parseInt(i) + 1}</option>
                            ))}
                        </select>
                        &nbsp; people, on date &nbsp;
                        <input type="date" onChange={changedate} value={dateinput} /><br></br>
                    </p>
                    <p>Available Times:<br></br>
                        {/* {[...Array(endhour - starthour)].map((_, i) => (
                            <input type="button" value={String(starthour + i) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ))} */}
                        {/* A little Hardcode! */}
                        {hour1but ? (
                            <input type="button" onClick={hour1} value={String(starthour + 0) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour1} value={String(starthour + 0) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour2but ? (
                            <input type="button" onClick={hour2} value={String(starthour + 1) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour2} value={String(starthour + 1) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour3but ? (
                            <input type="button" onClick={hour3} value={String(starthour + 2) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour3} value={String(starthour + 2) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour4but ? (
                            <input type="button" onClick={hour4} value={String(starthour + 3) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour4} value={String(starthour + 3) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour5but ? (
                            <input type="button" onClick={hour5} value={String(starthour + 4) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour5} value={String(starthour + 4) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour6but ? (
                            <input type="button" onClick={hour6} value={String(starthour + 5) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour6} value={String(starthour + 5) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour7but ? (
                            <input type="button" onClick={hour7} value={String(starthour + 6) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour7} value={String(starthour + 6) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour8but ? (
                            <input type="button" onClick={hour8} value={String(starthour + 7) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour8} value={String(starthour + 7) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour9but ? (
                            <input type="button" onClick={hour9} value={String(starthour + 8) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour9} value={String(starthour + 8) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour10but ? (
                            <input type="button" onClick={hour10} value={String(starthour + 9) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour10} value={String(starthour + 9) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour11but ? (
                            <input type="button" onClick={hour11} value={String(starthour + 10) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour11} value={String(starthour + 10) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                        {hour12but ? (
                            <input type="button" onClick={hour12} value={String(starthour + 11) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "red", border: "1px solid red", color: "white", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        ) : (
                            <input type="button" onClick={hour12} value={String(starthour + 11) + ":00"} style={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "white", border: "1px solid red", color: "red", height: "25px", width: "180px", borderRadius: "1ch", cursor: "pointer" }} />
                        )}
                    </p>
                    <h5 style={{ color: "red" }}>You will reserve this table only for <u>one</u> hour, for more time please contact the restaurant.</h5>
                    {(hourbut && datefix) ? (
                        <button style={{ width: "600px", border: "0px", cursor: "pointer", height: "40px", borderRadius: "3ch", color: "white", fontSize: "17px", backgroundColor: "black" }}>Complete the Reservation</button>
                    ) : (
                        <button style={{ width: "600px", border: "0px", height: "40px", borderRadius: "3ch", color: "white", fontSize: "17px" }}>Complete the Reservation</button>
                    )}
                    {dateok && <h5 style={{ color: "red" }}>Please enter a date from future!</h5>}
                </div>
            </div>
            <div style={{ display: "flex", marginLeft: "150px", backgroundColor: "pink", marginRight: "200px", justifyContent: "space-between" }}>
                <div>
                    <h4 style={{ paddingLeft: "10px" }}>What {reviews} people are saying:</h4>
                    <div style={{ width: "290px", display: "flex", paddingBottom: "10px", paddingLeft: "10px" }}>
                        <Stars count={star} />
                        &nbsp; {star} based on recent ratings
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "30px" }}>
                        <p>Food</p>
                        <p style={{ marginLeft: "12px" }}>{restaurants[parseInt(id) - 1].averageRating.food}</p>
                    </div>
                    <div style={{ marginRight: "30px" }}>
                        <p>Service</p>
                        <p style={{ marginLeft: "20px" }}>{restaurants[parseInt(id) - 1].averageRating.service}</p>
                    </div>
                    <div style={{ marginRight: "30px" }}>
                        <p>Ambiance</p>
                        <p style={{ marginLeft: "30px" }}>{restaurants[parseInt(id) - 1].averageRating.ambiance}</p>
                    </div>
                    <div style={{ marginRight: "30px" }}>
                        <p>Overall</p>
                        <p style={{ marginLeft: "20px" }}>{restaurants[parseInt(id) - 1].averageRating.overall}</p>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", marginLeft: "150px", marginRight: "200px" }}>
                <h4>{reviews}</h4>
                <button type="button" onClick={handleOpen} style={{ marginTop: "10px", width: "150px", border: "0px", cursor: "pointer", height: "40px", borderRadius: "1ch", color: "white", fontSize: "17px", backgroundColor: "red" }}>Add Review</button>
                <Modal isOpen={mod}>
                    <>
                        <h2 style={{ marginLeft: "15px" }}>Add Review for <span style={{ color: "red" }}>{restaurants[parseInt(id) - 1].name}</span></h2>
                        <p style={{ color: "gray" }}>Note: Reviews can only be made by diners who have seaten on this restaurant.</p>
                        <div style={{ display: "flex" }}>
                            <p>Food Quality</p>
                            {foodstar1 ? (
                                <img src={star1} onClick={foodstar1click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "80px" }} />
                            ) : (
                                <img src={star0} onClick={foodstar1click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "80px" }} />
                            )}
                            {foodstar2 ? (
                                <img src={star1} onClick={foodstar2click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={foodstar2click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {foodstar3 ? (
                                <img src={star1} onClick={foodstar3click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={foodstar3click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {foodstar4 ? (
                                <img src={star1} onClick={foodstar4click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={foodstar4click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {foodstar5 ? (
                                <img src={star1} onClick={foodstar5click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={foodstar5click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>Service</p>
                            {servicestar1 ? (
                                <img src={star1} onClick={servicestar1click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "120px" }} />
                            ) : (
                                <img src={star0} onClick={servicestar1click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "120px" }} />
                            )}
                            {servicestar2 ? (
                                <img src={star1} onClick={servicestar2click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={servicestar2click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {servicestar3 ? (
                                <img src={star1} onClick={servicestar3click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={servicestar3click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {servicestar4 ? (
                                <img src={star1} onClick={servicestar4click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={servicestar4click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {servicestar5 ? (
                                <img src={star1} onClick={servicestar5click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={servicestar5click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>Ambiance</p>
                            {ambiancestar1 ? (
                                <img src={star1} onClick={ambiancestar1click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "99px" }} />
                            ) : (
                                <img src={star0} onClick={ambiancestar1click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "99px" }} />
                            )}
                            {ambiancestar2 ? (
                                <img src={star1} onClick={ambiancestar2click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={ambiancestar2click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {ambiancestar3 ? (
                                <img src={star1} onClick={ambiancestar3click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={ambiancestar3click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {ambiancestar4 ? (
                                <img src={star1} onClick={ambiancestar4click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={ambiancestar4click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {ambiancestar5 ? (
                                <img src={star1} onClick={ambiancestar5click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={ambiancestar5click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}

                        </div>
                        <div style={{ display: "flex" }}>
                            <p>Overall</p>
                            {overallstar1 ? (
                                <img src={star1} onClick={overallstar1click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "120px" }} />
                            ) : (
                                <img src={star0} onClick={overallstar1click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "120px" }} />
                            )}
                            {overallstar2 ? (
                                <img src={star1} onClick={overallstar2click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={overallstar2click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {overallstar3 ? (
                                <img src={star1} onClick={overallstar3click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={overallstar3click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {overallstar4 ? (
                                <img src={star1} onClick={overallstar4click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={overallstar4click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}
                            {overallstar5 ? (
                                <img src={star1} onClick={overallstar5click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            ) : (
                                <img src={star0} onClick={overallstar5click} style={{ marginTop: "14px", width: "25px", height: "25px", marginLeft: "00px" }} />
                            )}

                        </div>
                        <p>Comment</p>
                        <textarea style={{ width: "280px", height: "70px", backgroundColor: "#00000022" }}></textarea>
                        {(foodSubmit && serviceSubmit && ambianceSubmit && overallSubmit) ? (
                            <button style={{ width: "285px", border: "0px", cursor: "pointer", height: "35px", borderRadius: "3ch", color: "white", fontSize: "17px", backgroundColor: "red", marginTop: "3px" }}>Submit Review</button>
                        ) : (
                            <button style={{ width: "285px", border: "0px", height: "35px", borderRadius: "3ch", color: "white", fontSize: "17px", backgroundColor: "gray", marginTop: "3px" }}>Submit Review</button>
                        )}
                        <button onClick={handleClose} style={{ width: "285px", border: "1px solid red", cursor: "pointer", height: "35px", borderRadius: "3ch", color: "red", fontSize: "17px", backgroundColor: "transparent", marginTop: "3px" }}>Cancel</button>

                    </>
                </Modal>
            </div>
            <div style={{ marginTop: "20px", marginLeft: "150px", marginRight: "200px" }}>
                {[...Array(parseInt(restaurants[parseInt(id) - 1].totalReviews))].map((_, i) => (
                    <Comment id={(i) + base} />
                ))}
            </div>
        </PageLayout>
    );

}

export default Restaurant;