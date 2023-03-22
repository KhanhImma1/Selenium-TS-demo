import { Builder, By, until, WebDriver } from "selenium-webdriver";

let driver = new Builder().forBrowser('chrome').build();
let search = driver.findElement(By.css('#keywordHeader'));
let search_btn = driver.findElement(By.css('#buttonSearchHeader'));
driver.get('https://vnexpress.net/');
driver.manage().window().maximize();
search.click();
search.sendKeys('thời sự');
search_btn.click();

