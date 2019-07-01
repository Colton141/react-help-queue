import React from "react";
import Ticket from "./Ticket";

function TicketList(){
  var ticketListStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'monospace',
    paddingTop: '10px'
  }
  return (
    <div style={ticketListStyles}>
    <Ticket
      location="3A"
      names="Marc and Coton"
      issue="Firebase will not save record!"/>
    </div>
  );
}

export default TicketList;
