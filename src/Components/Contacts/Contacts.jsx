import React from 'react';
import ContactsStyles from './Contacts.module.css';

export const Contacts = (props) => {
setTimeout(props.turnOffAnimateDisplay,5000)

  return (
    <div className = {props.showContentStylesToggle ? ContactsStyles.main + " " + ContactsStyles.showContent : ContactsStyles.main}>
      <p>
        <p>E-mail: alerinridmor@gmail.com</p>
        <p>Telegram: @What_a_W0nderfu1_W0r1d</p>
      </p>
    </div>
  )
}
