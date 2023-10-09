import React, { useEffect, useState } from 'react';

const useWatchDetails = watchId => {
    const [watch, setWatch] = useState({})
    useEffect(() => {
        const url = `https://watch-api-izma.onrender.com/items/${watchId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setWatch(data));

    }, [watchId]);
    return [watch]
};

export default useWatchDetails;