import { config as loadEnv } from "dotenv"

const env = loadEnv({ path: `src/helper/env/.env.${process.env.ENV}` });

//Create a configuration object for easy access to env variables
const config = {
    baseurl: env.parsed?.BASEURL || 'https://www.saucedemo.com',
    headless: env.parsed?.HEADLESS === 'true',
    browser: process.env.JENKINS_BROWSER ||env.parsed?.BROWSER || 'chrome',
    width: parseInt(process.env.JENKINS_BROWSER_WIDTH || env.parsed?.BROWSER_WIDTH || '1920'),
    height: parseInt(process.env.JENKINS_BROWSER_HEIGHT || env.parsed?.BROWSER_HEIGHT || '1080'),
}

export default config;
