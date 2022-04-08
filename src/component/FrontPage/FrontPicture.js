/**
 * Author: Sammy Chauhan (S191181)
 **/

function FrontPicture(props){
    return (
        <img className="FrontPicture"
        src={props.user.roomUrl}
        width={props.user.width}
        height={props.user.height}
        />
    );
}

export default FrontPicture;