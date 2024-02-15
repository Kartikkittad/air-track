import React, { useState, useEffect } from 'react';

const TrackingDataDisplay = ({ trackingNumber }) => {
    const [trackingData, setTrackingData] = useState(null);

    useEffect(() => {
        const fetchTrackingData = async () => {
            try {
                const response = await fetch('./status.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch tracking data');
                }
                const data = await response.json();
                if (data.hasOwnProperty(trackingNumber)) {
                    setTrackingData(data[trackingNumber]);
                } else {
                    console.log('Tracking information not found for the entered tracking number.');
                    setTrackingData(null);
                }
            } catch (error) {
                console.error('Error fetching tracking data:', error);
            }
        };

        if (trackingNumber) {
            fetchTrackingData();
        }
    }, [trackingNumber]);

    return (
        <div>
            {trackingData && (
                <ul>
                    {trackingData.map((item, index) => (
                        <li key={index}>
                            <strong>Status:</strong> {item.status}<br />
                            <strong>Info1:</strong> {item.info1}<br />
                            <strong>Info:</strong> {item.info}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TrackingDataDisplay;
