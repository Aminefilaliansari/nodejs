import puppeteer from "puppeteer"
import fs from "fs"


export default async function getQuotes () {

  const browser = await puppeteer.launch();


  const page = await browser.newPage();

  await page.goto("https://fr.weather-forecast.com/countries/Morocco", {
    waitUntil: "domcontentloaded",
  });


    const quotes = await page.evaluate(() => {

      const quoteList = document.querySelectorAll(".b-list-table__item");
      
      return Array.from(quoteList).map((quote) => {
      const name = quote.querySelector(".b-list-table__item-name").innerText;
      const temp = quote.querySelector('.b-list-table__item-value .temp').innerText;
      return {name, temp};
      });

    });


  console.log("Display :",quotes);
  await browser.close();


  fs.appendFile('test-list.json', JSON.stringify(quotes), "utf8", function(err) {
    if (err) throw err;
    console.log("!!! File saved.");
  }); 
  

}

getQuotes();

