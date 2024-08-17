import React, { useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';


const WeatherComponent: React.FC = () => {
    const [weatherData, setWeatherData] = useState<{ time: Date[], temperature2m: number[] } | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const params = {
                latitude: 52.52,
                longitude: 13.41,
                hourly: "temperature_2m"
            };
            const url = "https://api.open-meteo.com/v1/forecast";
            const responses = await fetchWeatherApi(url, params);

            const response = responses[0];
            const utcOffsetSeconds = response.utcOffsetSeconds();
            const hourly = response.hourly()!;

            const timeRange = Array.from({ length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() }, (_, i) => 
                new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
            );

            // Convert Float32Array to a regular number[] array
            const weatherData = {
                time: timeRange,
                temperature2m: Array.from(hourly.variables(0)!.valuesArray()!)
            };

            setWeatherData(weatherData);
        };

        fetchWeather();
    }, []);

    return (
       
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
                {weatherData ? (
                    <ul className="space-y-2">
                        {weatherData.time.map((time, index) => (
                            <li key={index} className="flex justify-between items-center border-b pb-2">
                                <span className="font-mono">{time.toISOString()}</span>
                                <span className="text-blue-500 font-bold">{weatherData.temperature2m[index]}°C</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">Loading...</p>
                )}
            </div>
    );
};

export default WeatherComponent;