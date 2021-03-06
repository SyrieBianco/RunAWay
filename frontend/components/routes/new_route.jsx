import React from 'react';
import MapContainer from './map_container';

class NewRoute extends React.Component {
  constructor() {
    super();

  }

  render() {
    const startingMapCenter = { lat: 37.7758, lng: -122.435 };
    return(
      <div className="new-route-page">
        <div className="route-builder">
          <h1>Build A Route</h1>
          <MapContainer center={startingMapCenter}/>,
        </div>
      </div>
    );
  }
}

export default NewRoute;
