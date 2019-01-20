import React from 'react'

const Location = () => {
  return (
    <div className="location_wrapper">
        <iframe 
            title="embeddedGoogleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.292835603833!2d80.27169041453658!3d13.01701471740283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267defe1f9bdb%3A0x5c9b0723542c4f06!2sLeela+Palace%2C+MRC+Nagar+1st+Lane%2C+MRC+Nagar%2C+Raja+Annamalai+Puram%2C+Chennai%2C+Tamil+Nadu+600028!5e0!3m2!1sen!2sin!4v1547979832886" 
            width="100%" 
            height="505px" 
            frameBorder="0"
            allowFullScreen>
        </iframe>

        <div className="location_tag">
            <div>Location</div>
        </div>
    </div>
  )
}

export default Location
