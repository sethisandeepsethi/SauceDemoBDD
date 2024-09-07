export { }

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "uat" | "np" | "prod",
            BASEURL: string,
            HEADLESS: true | false    
        }
    }
}
