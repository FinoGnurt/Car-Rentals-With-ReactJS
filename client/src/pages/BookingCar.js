import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Button, Checkbox, Col, DatePicker, Divider, Row } from "antd";
import moment from "moment";
import { bookCar } from "../redux/actions/bookingActions";

const { RangePicker } = DatePicker;

function BookingCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setdriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { carid } = useParams();

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id === carid));
    }
  }, [cars]);

  useEffect(() => {
    // setTotalAmount(totalHours * car.rentPerHour + driver && totalHours * 30);
    setTotalAmount(totalHours * car.rentPerHour);
    if (driver) {
      setTotalAmount(totalAmount + 30 * totalHours);
    }
  }, [driver, totalHours]);

  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
  }

  function bookNow() {
    const reqObj = {
      user: JSON.parse(localStorage.getItem("user"))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };

    dispatch(bookCar(reqObj));
  }
  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <Col lg={10} sm={24} xs={24}>
          <img
            style={{ width: "700px" }}
            src={car.image}
            alt=""
            className="bs1"
          />
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>
            Car Info
          </Divider>
          <div style={{ textAlign: "right" }}>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per hour</p>
            <p>Fuel Type: {car.fuelType}</p>
            <p>Max Persons: {car.capacity}</p>
          </div>

          <Divider type="horizontal" dashed>
            Select Time Slots
          </Divider>
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format={"MMM DD yyyy HH:mm"}
            onChange={selectTimeSlots}
          />

          <div>
            <p>Total Hours: {totalHours}</p>
            <p>
              Rent Per Hour: <b>{car.rentPerHour}</b>
            </p>
            <Checkbox
              onChange={(e) => {
                if (e.target.checked) {
                  setdriver(true);
                } else {
                  setdriver(false);
                }
              }}
            >
              Driver Required
            </Checkbox>
            <h3>Total Amount:{totalAmount || 0}</h3>
            <Button className="btn1" onClick={bookNow}>
              Book Now
            </Button>
          </div>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default BookingCar;
