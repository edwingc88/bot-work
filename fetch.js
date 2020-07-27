const cheerio= require('cheerio'),
    fetch= require('node-fetch');

 async function main(){
    let response= await fetch("https://www.workana.com/jobs?category=it-programming&subcategory=wordpress-1&language=en%2Ces");
    let html= await response.text();

    let $ = cheerio.load(html);
    console.log($('.project-item > .project-header > h5 > strong').text().trim());
    console.log($('.project-item > .project-header > h2 > a').attr());
}   

 main();