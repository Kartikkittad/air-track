import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Tracking.css'
import Dropdown from 'react-bootstrap/Dropdown';
import data from './status.json';
import '@coreui/coreui/dist/css/coreui.min.css'

const TrackingComponent = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [origin, setOrigin] = useState('');
    const [visible, setVisible] = useState(false);
    const [newAirline, setNewAirline] = useState('');
    const [airlines, setAirlines] = useState([
        { name: 'Aerolineas Argentinas', code: 'AR', url: `https://aerolineas.smartkargo.com/FrmAWBTracking.aspx?AWBPrefix=${trackingNumber}` },
        { name: 'Aeroméxico Cargo', code: 'AM', url: 'https://amcargo.aeromexico.com/rastrear' },
        { name: 'AeroUnion', code: '6R', url: `https://aerounion-icargo.ibsplc.aero/icargoauportal/portal/trackshipments??&trkTxnValue=${trackingNumber}` },
        { name: 'AF-KL-MP Cargo', code: 'AF/KL/MP', url: `https://www.afklcargo.com/mycargo/shipment/detail/${trackingNumber}` },
        { name: 'Air Algerie', code: 'AH', url: `https://ebooking.champ.aero/trace/trace.asp?Carrier=AH&Shipment_text=${trackingNumber}` },

    ]);

    const handleTrackClick = () => {
        if (trackingNumber.trim() === '') {
            alert('Please enter a tracking number.');
            return;
        }
        const trackUrl = `https://www.afklcargo.com/mycargo/shipment/detail/${trackingNumber}`;
        window.location.href = trackUrl;
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setTrackingNumber(value);
        if (value.length >= 3) {
            const firstThreeDigits = value.substring(0, 3);
            const matchingData = data.find(item => item.number === firstThreeDigits);
            if (matchingData) {
                setOrigin(matchingData.origin);
            } else {
                setOrigin('');
            }
        } else {
            setOrigin('');
        }
    };

    const handleAddAirline = () => {
        if (newAirline.trim() === '') {
            alert('Please enter an airline name.');
            return;
        }
        const airline = {
            name: newAirline,
            code: newAirline.toUpperCase(), // Assuming airline code is same as name for now
            url: `https://example.com/${newAirline}` // Change this to the actual URL
        };
        setAirlines([...airlines, airline]);
        setNewAirline('');
    };

    return (
        <>
            <div className='d-flex container'>
                <div className='con card d-flex shadow'>
                    <div className='d-flex flex-column f'>
                        <div className='d-flex flex-row'>
                            <Form.Control
                                className='input'
                                type="text"
                                placeholder="Enter Tracking Number"
                                value={trackingNumber}
                                onChange={handleInputChange}
                            />
                            <a type="button" style={{ marginLeft: '30px' }} className="btn btn-dark" onClick={handleTrackClick}>Track at afklcargo.com</a>
                        </div>
                        {
                            origin && <div style={{ paddingTop: '4px' }}>Origin: {origin}</div>
                        }
                        {trackingNumber.length > 10 && (
                            <div className='select d-flex'>
                                <Dropdown className='drop'>
                                    <Dropdown.Toggle className='drop-btn' variant="dark" id="dropdown-basic">
                                        Select Airlines to Track
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='drop-menu'>
                                        {airlines.map((airline, index) => (
                                            <Dropdown.Item key={index} href={airline.url}>{airline.name} ({airline.code})</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        )}
                    </div>

                    <div className='d-flex line2'>
                        <div className='d-flex flex-column s'>
                            <h3>Track at Skyteam</h3>
                            <a type="button" className="btn btn2 btn-outline-dark" onClick={handleTrackClick}>Track Skyteam cargo*</a>
                            <label>* Reentry of tracking number required (03994690)</label>
                        </div>
                        <div className='s2'>
                            <h3 className='track-header' style={{ fontSize: '24px' }}>Air cargo tracking info:</h3>
                            <ul>
                                <li>Enter number as 12312345678, no spaces or hyphen</li>
                                <li>The first 3 digits are used to detect airline</li>
                                <li>Use the Select option to track for a different airline</li>
                                <li>Note that most of the result pages are not mobile friendly</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='auth' style={{ width: '18rem' }}>
                    <button className='btn btn-dark shadow-sm' onClick={() => setVisible(!visible)}>
                        Author login
                    </button>
                    {visible &&
                        [
                            <Form.Control
                                className='input'
                                type="text"
                                placeholder="Add Airlines"
                                value={newAirline}
                                onChange={(e) => setNewAirline(e.target.value)}
                            />,
                            <button className='btnA btn-outline-dark btn' onClick={handleAddAirline}>Add Airline</button>
                        ]
                    }
                </div>
            </div>
        </>
    );
};

export default TrackingComponent;
