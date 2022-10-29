import React from "react";
import { Global } from '@emotion/react' 
import { GlobalStyles, Container } from "./App.styled";
import ContactForm from "./ContactForm/ContactForm";
import { ContactlList } from "./ContactList/ContactList";

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }
  
  formSubmitHandler = data => {
    console.log(data);
  }
  
  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <Global styles={GlobalStyles} />
        <h1>Phonebook</h1>
        
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactlList contacts={contacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}

export default Phonebook;
