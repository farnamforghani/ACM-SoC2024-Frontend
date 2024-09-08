import star1 from "../../assets/icons/star1.png";
import star0 from "../../assets/icons/star0.jpg";


function Stars({ count }) {
    return (
        <div style={{ display: "flex", backgroundColor: "white" }}>
            {(parseInt(count) > 0) ? (
                <img src={star1} width={"20px"} />
            ) : (
                <img src={star0} width={"20px"} />
            )}
            {(parseInt(count) > 1) ? (
                <img src={star1} width={"20px"} />
            ) : (
                <img src={star0} width={"20px"} />
            )}
            {(parseInt(count) > 2) ? (
                <img src={star1} width={"20px"} />
            ) : (
                <img src={star0} width={"20px"} />
            )}
            {(parseInt(count) > 3) ? (
                <img src={star1} width={"20px"} />
            ) : (
                <img src={star0} width={"20px"} />
            )}
            {(parseInt(count) > 4) ? (
                <img src={star1} width={"20px"} />
            ) : (
                <img src={star0} width={"20px"} />
            )}
        </div>
    );
}

export default Stars;