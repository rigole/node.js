import { parse } from "csv-parse";
import fs from "fs";
//const fs = require('fs');
const isHabitablePlanets = [];



function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6
}

fs.createReadStream('kepler_data.csv')

    .pipe(parse({
        comment: "#",
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)){
            isHabitablePlanets.push(data)
        }

    })
    .on('error', (error)=>{
        console.log(error)
    })
    .on('end', () => {
        console.log(isHabitablePlanets.map((planet) =>{
            return planet['kepler_name']
        }))
       // console.log(isHabitablePlanets)
    })
// parse()