import $ from 'jquery'
import * as log from "../../data/log.json"

const fs = require("fs");


export function appendLogEntry(entry) {
    console.log(entry);

    const data = require("../../data/log.json");

    console.log(data);

    /*

    fs.readFile("./data/log.json", "utf8", function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let log = JSON.parse(data);
            log.push(entry)
            let logJSON = JSON.stringify(log);
            fs.writeFile("./data/log.json", logJSON, "utf8", (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Done");
                }
            });
        }
    });*/
}