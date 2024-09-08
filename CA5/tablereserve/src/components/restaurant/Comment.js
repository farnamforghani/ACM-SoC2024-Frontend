import Star from "../home/Stars";

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
        comment: 'YUuuumummdlgngnainsdwsg!!!!!!!!!',
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

function Comment({ id }) {
    let dic = comments[parseInt(id)];
    let Alias = dic.user.username.split("a");
    let a = Alias[0];
    let nam = dic.user.username;

    return (
        <div style={{ display: "flex" }}>
            <div style={{ backgroundColor: "pink", marginTop: "15px", marginBottom: "70px", paddingLeft: "32px", paddingRight: "32px",paddingTop: "5px", paddingBottom: "5px", borderRadius: "10ch" }}>
                <p style={{fontSize:"20px"}}>{a}</p>
            </div>
            <div style={{ marginLeft: "10px" }}>
                <h3>{nam}</h3>
                <h5> Food <span style={{ color: "orange" }}>{dic.rating.food} </span>
                    &middot; Service <span style={{ color: "orange" }}>{dic.rating.service} </span>
                    &middot; Ambiance <span style={{ color: "orange" }}>{dic.rating.ambiance} </span>
                    &middot; Overall <span style={{ color: "orange" }}>{dic.rating.overall} </span>
                </h5>
                <p>{dic.comment}</p>
            </div>
            <div style={{marginLeft:"490px", marginTop:"20px"}}>
                <Star count={dic.starCount}/>
            </div>
            <div style={{marginLeft:"10px", marginTop:"20px"}}>
                Dined on {dic.datetime}
            </div>
        </div>
    );
}

export default Comment;