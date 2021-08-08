import React from "react";

import { config } from "../../content";
import "./Contacts.scss";

interface ContactsProps {}

export const Contacts: React.FC<ContactsProps> = () => {
  const { contacts } = config;
  return (
    <div className="contacts-container">
      <h1>КОНТАКТЫ</h1>
      <div className="contacts">
        <div className="column categories">
          <h5>Email: </h5>
          <h5>Номер телефона: </h5>
          <h5>Github: </h5>
        </div>
        <div className="column values">
          <h5>{contacts.email}</h5>
          <h5>{contacts.phoneNumber}</h5>
          <h5>
            <a
              href={`https://${contacts.github}`}
              target="_blank"
              rel="noreferrer"
            >
              {contacts.github}
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};
