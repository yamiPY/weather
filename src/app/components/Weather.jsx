"use client";
import { useEffect, useState } from "react";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";

function Weather() {
  const [date, setDate] = useState({
    year: null,
    month: null,
    day: null,
  });

  const [temp, setTemp] = useState({
    temp: null,
    highestTemp: null,
    lowestTemp: null,
    icon: null,
    description: null,
    windSpeed: null,
  });

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=31.96&lon=35.93&appid=38ae1344da3ebd85340858cdd4baefc9"
      )
      .then(function (response) {
        const temp = Math.round(response.data.main.temp - 273.15);
        const highestTemp = Math.round(response.data.main.temp_max - 273.15);
        const lowestTemp = Math.round(response.data.main.temp_min - 273.15);
        const icon = response.data.weather[0].icon;
        const description = response.data.weather[0].description;
        const windSpeed = response.data.wind.speed;
        setTemp({
          temp: temp,
          highestTemp: highestTemp,
          lowestTemp: lowestTemp,
          icon: icon,
          description: description,
          windSpeed: windSpeed,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const today = new Date();
    setDate({
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    });
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-col w-full  max-w-5xl mx-auto p-4 gap-4 md:w-1/2 ">
        <Card className="md:w-[100%] h-full lg:w-[90%]">
          <CardContent className="bg-gray-100 ">
            {/* العنوان والتاريخ */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
              <Typography
                className="text-3xl sm:text-4xl font-bold font-[cursive]"
                variant="h2"
              >
                Jordan
              </Typography>
              <Typography
                className="text-lg sm:text-xl font-bold font-[cursive]"
                variant="h4"
              >
                {date.day && date.month && date.year
                  ? `${date.day}/${date.month}/${date.year}`
                  : "Loading..."}
              </Typography>
            </div>

            <hr className="mb-4" />

            {/* المعلومات والصورة */}
            <div className="flex  sm:flex-row justify-between  gap-4">
              <div>
                <Typography
                  className="pt-2 font-[cursive] text-3xl sm:text-4xl"
                  variant="h2"
                >
                  {temp.temp ? temp.temp : "..."}°C
                </Typography>
                <Typography
                  className="pt-2 font-[cursive] text-lg"
                  variant="h5"
                >
                  {temp.description}
                </Typography>
                <Typography
                  className="pt-2 font-[cursive] text-base"
                  variant="h5"
                >
                  Highest: {temp.temp ? temp.highestTemp : "..."}°C
                </Typography>
                <Typography
                  className="pt-2 font-[cursive] text-base"
                  variant="h5"
                >
                  Lowest: {temp.temp ? temp.lowestTemp : "..."}°C
                </Typography>
                <Typography
                  className="pt-2 font-[cursive] text-base"
                  variant="h5"
                >
                  Wind Speed: {temp.windSpeed ? temp.windSpeed : "..."} KM
                </Typography>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${temp.icon}@2x.png`}
                alt="weather icon"
                className="w-24 h-24"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Weather;
