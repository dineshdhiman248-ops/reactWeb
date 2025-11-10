import React from "react";

function Services({ servicedata }) {
  return (
    <div className="container my-5">
      <div className="row">
        {servicedata.map((service, index) => (
          <div key={service.id || index} className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow-sm">
              {service.icon && (
                <div className="mt-3">
                  <i className={`fa ${service.icon} fa-2x`} aria-hidden="true"></i>
                </div>
              )}
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
