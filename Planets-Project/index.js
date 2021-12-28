import { parse } from "csv-parse";
import fs from "fs";
//const fs = require('fs');
const results = [];



fs.createReadStream('kepler_data.csv')

    .pipe(parse({
        comment: "#",
        columns: true,
    }))
    .on('data', (data) => {
        results.push(data)
    })
    .on('error', (error)=>{
        console.log(error)
    })
    .on('end', () => {
        console.log(results)
        console.log('done')
    })
// parse()