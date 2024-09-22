import { chromium, firefox, LaunchOptions, webkit } from "@playwright/test";
import config from '../helper/env/env'

const options: LaunchOptions = {
   headless: config.headless
};

export const invokeBrowser = () => {
    //const browserType = process.env.BROWSER;
    const browserType = config.browser

    console.log(`>>>>>> BrowserType is: ${browserType} || Headless: ${config.headless} || options.headless=${options.headless}`)
    switch (browserType) {
        case "chrome":
            return chromium.launch(options)
        case "firefox":
            return firefox.launch(options)
        case "webkit":
            return webkit.launch(options);    
        default:
            throw new Error(`Expected browser type is not as expected: ${browserType}`);
    }
}   