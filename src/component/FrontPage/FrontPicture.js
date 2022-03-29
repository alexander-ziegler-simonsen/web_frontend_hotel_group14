function FrontPicture(props){
    return (
        <img className="RoomPicture"
        src={props.user.roomUrl}
        width={props.user.width}
        height={props.user.height}
        alt={props.user.name}
        />
    );
}

export default FrontPicture;