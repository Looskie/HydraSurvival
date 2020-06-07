$(window).on('load', checkUptime);

console.log('UPTIME SCRIPT MADE BY DEVLOOSKIE \n https://www.looskie.com/ \n https://www.instagram.com/devlooskie \n https://www.twitter.com/devlooskie');
async function checkUptime() {
    const apiKeys = {website: 'm785143967-836c72626bc683d9e481761f', server: 'm785143970-542a38308c4c2f06dfbbf591', bot: 'm785144187-51de85c0fb05baa164063db3'};
    for(const property in apiKeys) {
        let request = new XMLHttpRequest();
        request.open("GET", `https://api.uptimerobot.com/getMonitors?apiKey=${apiKeys[property]}&format=XML`);
        request.send();
        request.onload = () => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(request.response, "text/xml");
            if (request.status === 200) {
                let getStatus = xmlDoc.getElementsByTagName("monitor")[0].getAttribute("status");
                let getUptime = xmlDoc.getElementsByTagName("monitor")[0].getAttribute("alltimeuptimeratio");
                // If in MAIT
                if (getStatus === '0') {
                    var status = "mait";
                    $(`#${property}`).removeClass("offline online").addClass("mait");
                    $(`#${property}text`).removeClass("offlinetext onlinetext").addClass("maittext");
                }
                // If offline
                if (getStatus === '8' || getStatus === '9') {
                    var status = "offline";
                    $(`#${property}`).removeClass("mait online").addClass("offline");
                    $(`#${property}text`).removeClass("maittext onlinetext").addClass("offlinetext");
                }
                // If online
                if (getStatus === '2') {
                    var status = "online";
                    $(`#${property}`).removeClass("offline mait").addClass("online");
                    $(`#${property}text`).removeClass("offlinetext maittext").addClass("onlinetext");
                }
                $(`#${property}`).prop('title', `${getUptime}%`);
                console.log(`${property}: ${status}`)
            } else {
                console.log(`An error has occured, please contact support at support@hydrasurvival.us or hello@looskie.com, or you can add me on discord at looskie#5044`)
                // Could not request, ${request.status}, ${request.statusText} ${apiKeys[property]}
            }
        }
    }
};
setInterval(checkUptime, 60000);