import React from 'react';
import PropTypes from 'prop-types';

function WorkExperience({ company, location, dates, roles }) {
    return (
        <div className="work-experience">
            <h3>{company}, {location}</h3>
            <p className="work-dates">{dates}</p>
            {roles.map((role, index) => (
                <div key={index} className="work-role">
                    <h4>{role.title}</h4>
                    <p className="role-period">{role.period}</p>
                    <ul>
                        {role.responsibilities.map((responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

WorkExperience.propTypes = {
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
        responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
};

export default WorkExperience;
