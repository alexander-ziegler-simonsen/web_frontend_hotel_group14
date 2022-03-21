import React from "react";

function RoomOverview() {
    return (
        <div>
            <div className="overView_description">
                <p>Here you can see an overview of all the rooms of "this room type"</p>
                <p>For now the page is not showing real data, so we don't know if the room is booked or not</p>
            </div>
            <div className="overView_content">
                <div className="room">
                    <p>A001 - 2 beds - 200$ pr night</p>
                </div>
                <div className="room">
                    <p>A002 - 2 beds - 200$ pr night</p>
                </div>
                <div className="room">
                    <p>A003 - 2 beds - 200$ pr night</p>
                </div>
                <div className="room">
                    <p>B021 - 2 beds - 200$ pr night</p>
                </div>
                <div className="room">
                    <p>B031 - 2 beds - 200$ pr night</p>
                </div>
                <div className="room">
                    <p>C026 - 2 beds - 200$ pr night</p>
                </div>
            </div>
        </div>
    )
}

export default RoomOverview;