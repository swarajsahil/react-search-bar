import "./App.css";

const Card=({imageUrl,fullName,family})=>{
    
    return (
        <div className="box">
            <img className="image" src={imageUrl} alt="" />
            <p className="name">{fullName}</p>
            <p className="house">{family}</p>
        </div>
    )
}

export default Card;