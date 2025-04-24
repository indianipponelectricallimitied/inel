"use client"

import { useEffect } from 'react'

export default function GraphBg() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbol": "BSE:INDNIPPON",
            "width": "100%",
            "height": "100%",
            "locale": "en",
            "dateRange": "ALL",
            "colorTheme": "light",
            "underLineColor": "rgba(14, 15, 16, 0)",
            "underLineBottomColor": "rgba(14, 15, 16, 0)",
            "isTransparent": true,
            "autosize": true,
            "largeChartUrl": "",
            "chartOnly": true,
            "noTimeScale": true
        });
        
        // Add the script to DOM
        document.querySelector('.tradingview-widget-container__widget').appendChild(script);

        // Create and add the custom CSS after script is loaded
        script.onload = () => {
            const style = document.createElement('style');
            style.textContent = `
                .label-dzbd7lyV.top-dzbd7lyV {
                    top: auto;
                }
            `;
            document.head.appendChild(style);
        };
    }, []);

    return (
        <>
            <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </>
    )
}
