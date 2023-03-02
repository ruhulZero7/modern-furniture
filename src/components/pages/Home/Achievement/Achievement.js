import React from 'react';
import { Container } from 'react-bootstrap';
import './Achievement.css';

const Achievement = () => {
  return (
    <div className="achievement my-5">
      <Container>
        <div className="row py-5">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 bb">
            <h1 className="text-warning text-center">
              <i className="fas fa-laptop-house"></i>
            </h1>
            <h4 className="text-white my-4 p-2 rounded">
              21 Year Of Experience
            </h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <h1 className="text-warning text-center">
              <i className="fas fa-drafting-compass "></i>
            </h1>
            <h4 className="text-white my-4 p-2 rounded">67 Numbers Engineer</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <h1 className="text-warning text-center">
              <i className="fas fa-trophy"></i>
            </h1>
            <h4 className="text-white my-4 p-2 rounded">
              15 Professional Awards
            </h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <h1 className="text-warning text-center">
              <i className="fas fa-grin-hearts"></i>
            </h1>
            <h4 className="text-white my-4 p-2 rounded">
              100% Satisfied Clients
            </h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Achievement;
