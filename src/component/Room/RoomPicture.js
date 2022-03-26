
function RoomPicture(props){
    return (
        <img className="RoomPicture"
        src={props.user.roomUrl}
        alt={props.user.name}
        />
    );
}
export default RoomPicture