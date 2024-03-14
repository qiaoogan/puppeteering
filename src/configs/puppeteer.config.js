module.exports = {
    launchOptions: process.env.EXECUTE_ENV === 'container' ? {
            headless: true,
            executablePath: "/usr/bin/google-chrome" ,
            args: [`--no-sandbox`, `--headless`, `--disable-gpu`, `--disable-dev-shm-usage`]
        } : {
            headless: true,
            executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
        },
    viewPortOptions: {
        width: 1920,
        height: 1080
    }
}