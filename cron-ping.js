import cron from "node-cron"
/*import fs from "fs"*/


var count = 0;
cron.schedule('*/5 * * * * *', function() {
    
    count++;
    const date = new Date().toJSON().slice(0, 10);

    console.log('---------------------');
    console.log('Count :'+count);
    console.log('Date :'+date);

    /*fs.appendFile(`file-${date}--${count}.json`, JSON.stringify(''), "utf8", function(err) {
        if (err) throw err;
        console.log("!!! File saved.");
      }); 
      */
  });

  //getQuotes();