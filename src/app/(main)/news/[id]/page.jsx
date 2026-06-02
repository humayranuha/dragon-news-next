import React from 'react';

const NewsDetailsPage = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            News Details
        </div>
    );
};

export default NewsDetailsPage;