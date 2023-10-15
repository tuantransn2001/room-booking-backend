export enum ReservationStatus {
  Provisional = 1,
  // If payment method and/or billing instructions have not been guaranteed then the reservation should be set to the status of Tentative.
  SixPMRelease = 2,
  // A reservation is not guaranteed with payment or voucher and the hotel will hold it till 6PM in the evening.
  Confirmed = 3,
  /*
    Once payment method and/or billing instructions are confirmed a reservation status can be selected as confirmed. 
    A reservation should only be confirmed upon receipt of a credit card or deposit payment. 
  */
  WaitList = 4,
  // If the hotel or room type is fully booked then the customer should be given the option to waitlist their reservation.
  CompanyGuarantee = 5,
  // If a reservation is made by a company and also billed to the same company then reservation status 'Company guarantee' may be used.
  TravelAgentGuarantee = 6,
  // A travel agent booking with a valid IATA number and Travel agent voucher may be selected as code Travel Agent Guarantee'.
}
