import React from 'react';
import './contact.css';
const Contact = () => {
    return (
        <div className="contactLocation">
            <div className="location" id="loc1">
                <h3>Кеј</h3>
                <p>
                    Понеделник - Сабота
                    <br />
                    10:00 - 00:00
                    <br />
                    Недела
                    <br />
                    10:00 - 23:30
                    <br />
                    070/278-417
                </p>
            </div>

            <div className="location" id="loc2">
                <h3>Чаир</h3>
                <p>
                    Понеделник - Сабота
                    <br />
                    10:00 - 00:00
                    <br />
                    Недела
                    <br />
                    10:00 - 23:30
                    <br />
                    070/342-452
                </p>
            </div>

            <div className="location" id="loc3">
                <h3 className="upper-line">Тетово</h3>
                <p>
                    Понеделник - Сабота
                    <br />
                    10:00 - 00:00
                    <br />
                    Недела
                    <br />
                    10:00 - 23:30
                    <br />
                    072/229-824
                </p>
            </div>
        </div>
    );

};


export default Contact;