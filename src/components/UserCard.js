import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({name,city,website,email}) => {
    return(
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{name}</span>
                        <p>City: {city}</p>
                        <p>Website: {website}</p>
                    </div>
                    <div className="card-action">
                       
                        <a href={`mailto:${  email}`} target="_blank" rel="noopener noreferrer">Send me an email</a>
                    </div>
                </div>
            </div>
        </div>
    );

};

UserCard.propTypes ={
   
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    website:PropTypes.string.isRequired, 
    
};

export default UserCard;