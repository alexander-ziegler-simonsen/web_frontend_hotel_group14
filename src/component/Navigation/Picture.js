/**
 * Author: Sammy Chauhan (S191181)
 **/

// Bruges ikke
function Picture(props) {
    return (
        <img
            src={props.roomUrl}
            width={props.width}
            height={props.height}
            alt={props.name}
        />
    );
}

export default Picture;