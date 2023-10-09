import { useEffect, useState } from "react";

const useWatch = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch('https://watch-api-izma.onrender.com/items')
            .then(res => res.json())
            .then(data => setWatches(data));
    }, []);
    return [watches, setWatches]
}

export default useWatch;