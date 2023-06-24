import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white b tracked-l shadow-hover f3'>
                {`${name}, your current entry count is...`}
            </div>
            <div className='white f1 shadow-hover'>
                {entries}
            </div>
        </div>
    );
}
export default Rank;