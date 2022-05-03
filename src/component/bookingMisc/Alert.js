import React, {useState} from 'react';
import {Toast} from "react-bootstrap";
import './Style.css';

/**
 * Author: Azmi Uslu (s185736)
 * Type: Will get alert when an action has been made.
 * Source: https://react-bootstrap.github.io/components/toasts/
 * @property display - will take the control of if a alert will be displayed.
 * @property announcement - the info announcement of the announcement.
 * @param props
 * @return {JSX.Element}
 **/

export const Alert = props => {
  const [displayAnnouncement, setdisplayAnnouncement] = useState(true);

  return (
	<Toast onClose={() => setdisplayAnnouncement(false)} show={displayAnnouncement} delay={5000} autohide>
	  <Toast.Header>
		  <strong className="mr-auto">Announcement</strong>
	  </Toast.Header>
		<Toast.Body>
			{props.announcement}
		</Toast.Body>
	</Toast>
  )
};