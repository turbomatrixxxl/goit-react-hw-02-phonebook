import React from 'react';
import PropTypes from 'prop-types';

import styles from './RenderContacts.module.css';

function RenderContacts({ contacts, children }) {
  return (
    <section>
      <h2>Contacts</h2>
      <ul className={styles.contactList}>
        {contacts.map((contact, index) => {
          return (
            <li className={styles.contactItem} key={index}>
              <span></span>
              <b>
                {contact.name} : {contact.number}
              </b>
              {children}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

RenderContacts.propTypes = {
  contacts: PropTypes.array,
  contact: PropTypes.object,
};

export default RenderContacts;
