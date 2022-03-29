import RoomPicture from './RoomPicture';

function RoomInfo(props) {
    return (
        <div className="RoomInfo">
            <RoomPicture user={props.user}/>
            <div className="RoomName">
                {props.user.name}
            </div>
        </div>
    );
}
export default RoomInfo