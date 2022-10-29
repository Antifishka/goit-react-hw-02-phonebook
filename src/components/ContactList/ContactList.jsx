import React from "react";
import { ContactItem } from "./ContactList.styled";

export const ContactlList = ({ contacts, onDeleteContact }) =>
    <ul>
        {contacts.map(({ id, name, number }) =>
            <ContactItem key={id}>
                <p>{name}: {number}</p>
                <button onClick={()=> onDeleteContact(id)}>Delete</button>
            </ContactItem>
        )}
    </ul>;