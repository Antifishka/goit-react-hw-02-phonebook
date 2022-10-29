import React from "react";
import { ContactItem, BtnFilter } from "./ContactList.styled";

export const ContactlList = ({ contacts, onDeleteContact }) =>
    <ul>
        {contacts.map(({ id, name, number }) =>
            <ContactItem key={id}>
                <p>{name}: {number}</p>
                <BtnFilter onClick={()=> onDeleteContact(id)}>Delete</BtnFilter>
            </ContactItem>
        )}
    </ul>;