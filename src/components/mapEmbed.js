import React from 'react';

const MapEmbed = () => {
    return (
        <iframe
            title="Google Maps Embed"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47440.527569102735!2d21.3412474486328!3d41.99956790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354157d1f65cbe1%3A0x2ff8cd27c79c2a44!2zRG9uZXIg4oCeUGxhc2V04oCcIChVbml2ZXJ6YWxuYSk!5e0!3m2!1sen!2smk!4v1702636881174!5m2!1sen!2smk"
            width="600"
            height="450"
            style={{ border: '0', width:'650px', padding:'10px', height:'450px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

export default MapEmbed;
