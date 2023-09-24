export default (error) => {

    let arr = [
        "application does not have sufficient geolocation permissions.",
        "Illegal Access"
    ]

    if (arr.every(e => error?.message !== e)) {

        let repoUrl = 'https://github.com/Alsarmad/altaqwaa_android'
        let message = `message: ${error?.message}\n`;
        message += `code: ${error?.code ? error?.code : "null"}\n`;
        message += `path: ${window.location.pathname}\n`;
        alert(message)
    }
}