import React, {useContext, useRef} from 'react';
import moment from "moment";
import {useHistory} from 'react-router-dom';
import {Alert} from "../bookingMisc/Alert";
import {LoaderIndicator} from "../bookingMisc/LoaderIndicator";
import {AppContext} from "../../AppContext/AppContext";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";
import './Style.css';
import roomData from "../../roomData";

/**
 * Author: Azmi Uslu (s185736)
 * Type: This will accept the roomform; Form Validation using Formik and Yup.
 * Source: https://www.geeksforgeeks.org/reactjs-form-validation-using-formik-and-yup/
 **/

const formValidation = yup.object().shape({
  fullName: yup.string().trim().required('This field is required'),
  emailAddress: yup.string().trim().required('This field is required'),
  phoneNumber: yup
      .string()
      .trim()
      .length(8, '8 numbers are required (danish number)')
      .matches(/^[0-9\b]+$/, 'Only numbers are valid')
      .required('This field is required'),
  roomTypeSelection: yup.string().required('This field is required'),
  checkinDate: yup.date().required('This field is required'),
  checkoutDate: yup.date().required('This field is required'),
  adultNumber: yup.number().required('This field is required'),
  childNumber: yup.number(),
});

/**
 * Type: This is where the customers can get the chance to add and edit.
 * @property type - will either add or edit.
 * @property room - if the type is to be edited, then the selected one will be edited.
 * @property handleSubmit - will be sent if all the fields are correctly filled.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

export const RoomForm = props => {
  const {load_indicator, alert} = useContext(AppContext);
  const  history = useHistory();
  const manufacturerInputRef = useRef(null);
  let {room, handleSubmit, type} = props;

  return (
	<Container>
	  {
		alert && alert.display ?
		  (
			<Alert
			  display={alert.display}
			  announcement={alert.announcement}/>
		  ) : ''
	  }
	  <Row>
		<Col>

			{
			  type === 'add' ?
				(
                    <div className="blockBehind">
				  <h2 className="text-center my-5">Book Now</h2>
                    </div>
				)
				:
				(
				  <h2 className="text-center my-5">
					Edit
					room: {room ? `${room.roomTypeSelection} (${room.id})` : ``}
				  </h2>
				)
			}
		</Col>
	  </Row>
	  {
		load_indicator ?
		  (
			<Row className="justify-content-center mt-5">
			  <LoaderIndicator/>
			</Row>
		  )
		  :
		  (
              <div className="blockBehind RoomDetailColumn">
			<Formik
			  validationSchema={formValidation}
			  onSubmit={(values) => handleSubmit(values)}
			  initialValues={{
				fullName: room ? room.fullName : ``,
				emailAddress: room ? room.emailAddress : ``,
				phoneNumber: room ? room.phoneNumber : ``,
                roomTypeSelection : room ? room.roomTypeSelection : ``,
				checkinDate: room ? room.checkinDate : ``,
                checkoutDate: room ? room.checkoutDate : ``,
				adultNumber: room ? room.adultNumber : ``,
				childNumber: room ? room.childNumber : ``
			  }}
			>
			  {({
				  handleSubmit,
				  handleChange,
				  resetForm,
				  values,
				  touched,
				  errors,
				  isSubmitting
				}) => (
				<Form noValidate onSubmit={handleSubmit}>
				  <Form.Row className="mb-lg-3">
					<Form.Group as={Col} controlId="fullName" lg="4" md="12">
					  <Form.Label>Full Name:<span className="text-danger">*</span></Form.Label>
					  <Form.Control
						ref={manufacturerInputRef}
						onChange={handleChange}
						name="fullName"
						value={values.fullName}
						type="text"
						placeholder="Your full name..."
						isInvalid={!!errors.fullName}
						isValid={touched.fullName && !errors.fullName}
					  />
					  <Form.Control.Feedback type="invalid">
						{errors.fullName}
					  </Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} controlId="emailAddress" lg="4" md="12">
					  <Form.Label>Email Address:<span className="text-danger">*</span></Form.Label>
					  <Form.Control
						onChange={handleChange}
						name="emailAddress"
						value={values.emailAddress}
						type="text"
						placeholder="Your email address..."
						isValid={touched.emailAddress && !errors.emailAddress}
						isInvalid={!!errors.emailAddress}
					  />
					  <Form.Control.Feedback type="invalid">
						{errors.emailAddress}
					  </Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} controlId="phoneNumber" lg="4" md="12">
					  <Form.Label>Phone Number:</Form.Label>
					  <Form.Control
						onChange={handleChange}
						name="phoneNumber"
						value={values.phoneNumber}
						type="number"
						min={moment().subtract(60, 'years').get("phoneNumber")}
						max={moment().add(1, 'phoneNumber').get("phoneNumber")}
						step="1"
						placeholder="Your phone number..."
						isValid={touched.phoneNumber && !errors.phoneNumber}
						isInvalid={!!errors.phoneNumber}
					  />
					  <Form.Control.Feedback type="invalid">
						{errors.phoneNumber}
					  </Form.Control.Feedback>
					</Form.Group>

				  </Form.Row>

                    <Form.Row className="mb-lg-3">
                        <Form.Group as={Col} controlId="roomTypeSelection" lg="4" md="12">
                            <Form.Label>Room Type:<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                ref={manufacturerInputRef}
                                onChange={handleChange}
                                name="roomTypeSelection"
                                value={values.roomTypeSelection}
                                type="text"
                                placeholder="'Budget', 'Standard', 'Business', 'Luxury'"
                                isInvalid={!!errors.roomTypeSelection}
                                isValid={touched.roomTypeSelection && !errors.roomTypeSelection}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.roomTypeSelection}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="mb-lg-3">
                        <Form.Group as={Col} controlId="checkinDate" lg="6" md="12">
                            <Form.Label>Check-in Date:<span
                                className="text-danger">*</span></Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="checkinDate"
                                value={values.checkinDate}
                                type="date"
                                placeholder="Check-in Date..."
                                isValid={touched.checkinDate && !errors.checkinDate}
                                isInvalid={!!errors.checkinDate}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.checkinDate}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="checkoutDate" lg="6" md="12">
                            <Form.Label>Check-out Date:<span
                                className="text-danger">*</span></Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="checkoutDate"
                                value={values.checkoutDate}
                                type="date"
                                placeholder="Check-out Date..."
                                isValid={touched.checkoutDate && !errors.checkoutDate}
                                isInvalid={!!errors.checkoutDate}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.checkoutDate}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

				  <Form.Row className="mb-lg-3">
					<Form.Group as={Col} controlId="adultNumber" lg="2" md="12">
					  <Form.Label>Adult(s):<span
						className="text-danger">*</span></Form.Label>
					  <Form.Control
						onChange={handleChange}
						name="adultNumber"
						value={values.adultNumber}
						type="number"
						placeholder="Adults.."
						isValid={touched.adultNumber && !errors.adultNumber}
						isInvalid={!!errors.adultNumber}
					  />
					  <Form.Control.Feedback type="invalid">
						{errors.adultNumber}
					  </Form.Control.Feedback>
					</Form.Group>

					<Form.Group as={Col} controlId="childNumber" lg="2" md="12">
					  <Form.Label>Child(ren):</Form.Label>
					  <Form.Control
						onChange={handleChange}
						name="childNumber"
						value={values.childNumber}
						type="number"
						placeholder="Children.."
						isValid={touched.childNumber && !errors.childNumber}
						isInvalid={!!errors.childNumber}
					  />
					  <Form.Control.Feedback type="invalid">
						{errors.childNumber}
					  </Form.Control.Feedback>
					</Form.Group>
				  </Form.Row>

                    <div>
					<Button variant="success" size="lg" type="submit" className="mr-5" disabled={isSubmitting}>
					  {type === 'add' ? `Book Now (Checkout)` : `Edit (Checkout)`}
					</Button>
                    </div>
                    <div>
					<Button variant="danger" size="lg" onClick={() =>  history.push(`/booking/orders`)}>
                        Back
					</Button>
                  </div>
				</Form>
			  )}
			</Formik>
              </div>
		  )
	  }
	</Container>
  )
};