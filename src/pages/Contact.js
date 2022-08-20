import React from 'react'

function Contact() {
  const contactInformations = {
    email: `mohamedfrikha95@gmail.com`,
    phoneNumber : '+216 22944 897',
    address : {
      city: 'Sfax',
      country: 'Tunisia',
      street: 'ROUTE MATAR KM2',
      postalCode: 3023 
    }
  }
  return (
    <div>
      <p> <i class="bi bi-envelope"></i> {contactInformations.email} </p>
      <p> <i class="bi bi-telephone"></i> {contactInformations.phoneNumber} </p>
      <p><i class="bi bi-geo-alt"></i> {contactInformations.address.street}, {contactInformations.address.postalCode} {contactInformations.address.city}; {contactInformations.address.country} </p>
    </div>
  )
}

export default Contact