// Importing the CSS file for styling
import './App.css';

// Importing the truck image
import truckimg from './truck.png';

// Importing necessary components and hooks from React
import React, { useState, useEffect } from 'react';

// Defining a functional component for PickupPopup
function PickupPopup({ onClose, onSubmit }) {
  // Defining state variables using useState hook
  const [senderName, setSenderName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    onSubmit({ senderName, phoneNumber, address, pincode, city, state }); // Calling onSubmit prop with form data
    onClose(); // Closing the popup
  };

  // Rendering JSX for PickupPopup component
  return (
    <div className="popup-background">
      <div className="popup">
       
        <button className="close-btn" onClick={onClose}>X</button> {/* Close button */}
        <h2>Pickup Details</h2>
        {/* Form for pickup details */}
        <form onSubmit={handleSubmit}>
        <div className='grid-container'>
          <div className='grid-item'>
          <label htmlFor="senderName">Sender Name:</label>
          {/* Input field for sender name */}
          <input type="text" id="senderName" value={senderName} onChange={(e) => setSenderName(e.target.value)} required/>
          </div>
          <div className='grid-item'>
          <label htmlFor="phoneNumber">Phone Number:</label>
          {/* Input field for phone number */}
          <input type="number" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
          </div>
          <div className='grid-item'>
          <label htmlFor="address">Address:</label>
          {/* Input field for address */}
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
          </div>
          <div className='grid-item'>
          <label htmlFor="pincode">Pincode:</label>
          {/* Input field for pincode */}
          <input type="number" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required/>
          </div>
          <div className='grid-item'>
          <label htmlFor="city">City:</label>
          {/* Input field for city */}
          <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required/>
          </div>
          <div className='grid-item'>
          <label htmlFor="state">State:</label>
          {/* Input field for state */}
          <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} required/>
          </div>
          </div>
          <div className="button-container"> <button type="submit">Continue</button> </div>   
        </form>
        </div>
      </div>
    
  );
}

// Defining a functional component for DeliveryPopup
function DeliveryPopup({ onClose, onSubmit }) {
  // Defining state variables using useState hook
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [deliveryState, setDeliveryState] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    onSubmit({ receiverName, receiverPhoneNumber, deliveryAddress, deliveryPincode, deliveryCity, deliveryState }); // Calling onSubmit prop with form data
    onClose(); // Closing the popup
  };

  // Rendering JSX for DeliveryPopup component
  return (
    <div className="popup-background">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>X</button> {/* Close button */}
        <h2>Delivery Details</h2>
        {/* Form for delivery details */}
        <form onSubmit={handleSubmit}>
          <div className='grid-container'>
        <div className='grid-item'>
          <label htmlFor="receiverName">Receiver Name:</label>
          {/* Input field for receiver name */}
          <input type="text" id="receiverName" value={receiverName} onChange={(e) => setReceiverName(e.target.value)} required/>
          </div>
          <div className='grid-item'>
          <label htmlFor="receiverPhoneNumber">Phone Number:</label>
          {/* Input field for receiver phone number */}
          <input type="number" id="receiverPhoneNumber" value={receiverPhoneNumber} onChange={(e) => setReceiverPhoneNumber(e.target.value)} required/>
          </div>
          <div className='grid-item'>
          <label htmlFor="deliveryAddress">Address:</label>
          {/* Input field for delivery address */}
          <input type="text" id="deliveryAddress" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} required/>
          </div>
          <div className='grid-item'>
          <label htmlFor="deliveryPincode">Pincode:</label>
          {/* Input field for delivery pincode */}
          <input type="number" id="deliveryPincode" value={deliveryPincode} onChange={(e) => setDeliveryPincode(e.target.value)} required/>
          </div>
          <div className='grid-item'>
          <label htmlFor="deliveryCity">City:</label>
          {/* Input field for delivery city */}
          <input type="text" id="deliveryCity" value={deliveryCity} onChange={(e) => setDeliveryCity(e.target.value)} required/>
          </div>
          <div className='grid-item'>
          <label htmlFor="deliveryState">State:</label>
          {/* Input field for delivery state */}
          <input type="text" id="deliveryState" value={deliveryState} onChange={(e) => setDeliveryState(e.target.value)} required/>
          </div>
          </div>
          <div className="button-container"> <button type="submit">Continue</button> </div>   
        
        </form>
        
      </div>
    </div>
  );
}

// Defining the main App component
function App() {
  // Defining state variables using useState hook
  const [showPickupPopup, setShowPickupPopup] = useState(false);
  const [showDeliveryPopup, setShowDeliveryPopup] = useState(false);
  const [pickupDetails, setPickupDetails] = useState({});
  const [deliveryDetails, setDeliveryDetails] = useState({});
  const [bookingSuccess, setBookingSuccess] = useState(false); // Define bookingSuccess state
  const [adminMode, setAdminMode] = useState(false);
  const [bookings, setBookings] = useState([]); // Store previous bookings data

  // Effect hook to fetch previous bookings when adminMode changes
  useEffect(() => {
    if (adminMode) {
      fetch(
        "https://script.google.com/macros/s/AKfycbypv8NJDfeFczgWV67x-BmsBEJhADGOyhKgssHnXz9NLAVYzp93ZSt_jDG3uYB-d_KJ/exec",
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setBookings(data); // Set previous bookings data
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [adminMode]);

  // Function to handle pickup form submission
  const handlePickupSubmit = (data) => {
    setPickupDetails(data);
  };

  // Function to handle delivery form submission
  const handleDeliverySubmit = (data) => {
    setDeliveryDetails(data);
  };

  // Function to handle admin mode activation
  const handleAdminClick = () => {
    const enteredPassword = prompt("Please enter the password:");
    if (enteredPassword === "CAMPUSEXPRESS") {
      setAdminMode(true);
    } else {
      alert("Incorrect password. Access denied.");
    }
  };

  // Function to handle booking
  const handleBooking = () => {
    // Constructing form data
    const formData = {
      ...pickupDetails,
      ...deliveryDetails,
      weight: document.getElementById('weight').value,
      quantity: document.getElementById('quantity').value,
      height: document.getElementById('height').value,
      length: document.getElementById('length').value,
      width: document.getElementById('width').value,
      insurance: document.querySelector('input[name="insurance"]:checked').value
    };
    
    // Creating FormData object and appending form data
    const formDatab = new FormData();
    for (const key in formData) {
      formDatab.append(key, formData[key]);
    }

    // Sending form data to server
    fetch(
      "https://script.google.com/macros/s/AKfycbzupORGz4PkY6MZKVuzh-7gaELmZukmToj17lATCkwMMxEY1JlVnWDt6yVy6j_iRFYI1w/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Setting booking success state to true and reloading page after 1 second
    setBookingSuccess(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // Rendering JSX for App component
  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <h1 className="title">
            Place <span style={{ color: '#b64c41' }}>New</span> Order
          </h1>
          <img src={truckimg} alt="Image 1" className="image" /> {/* Truck image */}
        </div>
        <form className="form">
  <div className="grid-container">
    <div className="grid-item">
      <label htmlFor="pickupLocation">Pickup Location:</label>
      {/* Input field for pickup location */}
      <input type="text" id="pickupLocation" name="pickupLocation" value={pickupDetails.pincode} onClick={() => setShowPickupPopup(true)} readOnly />
    </div>
    <div className="grid-item">
      <label htmlFor="deliverTo">Deliver To:</label>
      {/* Input field for delivery location */}
      <input type="text" id="deliverTo" name="deliverTo" value={deliveryDetails.deliveryPincode} onClick={() => setShowDeliveryPopup(true)} readOnly />
    </div>
    <div className="grid-item">
      <label htmlFor="weight">Weight:</label>
      {/* Input field for weight */}
      <input type="number" id="weight" name="weight" required />
    </div>
    <div className="grid-item">
    <div className="length-section">
  <div className="length-fields">
    <div className="length-subdivision">
      <label htmlFor="length1">Qty</label>
      <input type="text" id="length1" name="length1" placeholder="" />
    </div>
    <div className="length-subdivision">
      <label htmlFor="length2">Length</label>
      <input type="text" id="length2" name="length2" placeholder="(in cms)" />
    </div>
    <div className="length-subdivision">
      <label htmlFor="length3">Width</label>
      <input type="text" id="length3" name="length3" placeholder="(in cms)" />
    </div>
    <div className="length-subdivision">
      <label htmlFor="length4">Height</label>
      <input type="text" id="length4" name="length4" placeholder="(in cms)" />
    </div>
  </div>
</div>

      </div>
      <div className="grid-item">
      <div className="insurance">
            <label htmlFor="insurance">Insurance:</label>
            <div className="radio-group">
              <label>
                Yes
                <input type="radio" id="insuranceYes" name="insurance" value="yes" />
              </label>
              <label>
                No
                <input type="radio" id="insuranceNo" name="insurance" value="no" />
              </label>
            </div>
            </div>
          </div> </div>
</form>
<div className="button-container">
  <button className="book-now" onClick={handleBooking}>BOOK NOW</button>
</div>

       
      {/*<button className="admin-button" onClick={handleAdminClick}>Admin</button> {/* Admin button */}
      </div>
    
      {/* Popup for pickup details */}
      {showPickupPopup && (
        <PickupPopup
          onClose={() => setShowPickupPopup(false)}
          onSubmit={handlePickupSubmit}
        />
      )}

      {/* Popup for delivery details */}
      {showDeliveryPopup && (
        <DeliveryPopup
          onClose={() => setShowDeliveryPopup(false)}
          onSubmit={handleDeliverySubmit}
        />
      )}
      
      {/* Popup for booking success */}
      {bookingSuccess && (
        <div className="popup-background">
          <div className="popup">
            <button className="close-btn" onClick={() => setBookingSuccess(false)}>X</button> {/* Close button */}
            <h2>Booking Successful!</h2>
            {/* Optionally, you can display additional information here */}
          </div>
        </div>
      )}

      {/* Displaying admin mode data */}
      {adminMode && (
        <div className="admin-data">
          <h2>Previous Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Sender Name</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Pincode</th>
                <th>City</th>
                <th>State</th>
                <th>Receiver Name</th>
                <th>Receiver Phone Number</th>
                <th>Delivery Address</th>
                <th>Delivery Pincode</th>
                <th>Delivery City</th>
                <th>Delivery State</th>
                <th>Weight</th>
                <th>Quantity</th>
                <th>Height</th>
                <th>Length</th>
                <th>Width</th>
                <th>Insurance</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping over bookings data to display */}
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.senderName}</td>
                  <td>{booking.phoneNumber}</td>
                  <td>{booking.address}</td>
                  <td>{booking.pincode}</td>
                  <td>{booking.city}</td>
                  <td>{booking.state}</td>
                  <td>{booking.receiverName}</td>
                  <td>{booking.receiverPhoneNumber}</td>
                  <td>{booking.deliveryAddress}</td>
                  <td>{booking.deliveryPincode}</td>
                  <td>{booking.deliveryCity}</td>
                  <td>{booking.deliveryState}</td>
                  <td>{booking.weight}</td>
                  <td>{booking.quantity}</td>
                  <td>{booking.height}</td>
                  <td>{booking.length}</td>
                  <td>{booking.width}</td>
                  <td>{booking.insurance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Exporting the App component as default
export default App;
