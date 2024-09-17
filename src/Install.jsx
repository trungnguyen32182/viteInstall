import { useEffect, useState } from "react";

function Install() {
    console.log("vao install")
    const [params, setParams] = useState({});

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const parsedParams = {};
        searchParams.forEach((value, key) => {
            parsedParams[key] = value;
        });
        console.log(parsedParams)
        setParams(parsedParams);
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://api.bitrix24.com/api/v1/';
        script.onload = () => {
            if (window.BX24) {
                console.log('success');
            } else {
                console.error('Bitrix 24 API is not available.')
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script)
        };
    }, []);
    return (
        <div className="install-content">
            <h1>Install Page</h1>
        </div>
    );
}

export default Install;