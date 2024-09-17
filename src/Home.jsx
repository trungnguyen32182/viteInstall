import { useEffect } from "react";

function Home() {
    console.log("vao home")
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
        <div className="home-content">
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;