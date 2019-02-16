function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', "*");
    xmlHttp.send(null);
}

function showContent(i) {
    var divs = [
        "mainWindow",
        "eventsDiv",
        "projectsDiv",
        "resourcesDiv",
        "connectDiv"
    ]
    

    // check to see if it's already showing, if so - hide it and show the logo
    if (document.getElementById(i).classList.contains("container")) {
        divs.forEach(function(item, index, arr) {
            if (arr[index] === "mainWindow") {
                document.getElementById(arr[index]).classList.replace("containerHide","container");
                document.getElementById(arr[index]).classList.add("zone");
            } else {
                document.getElementById(arr[index]).classList.replace("container","containerHide");
                document.getElementById(arr[index]).classList.remove("zone");
            }
        });
    } else {
        divs.forEach(function(item, index, arr) {
            if (arr[index] === i) {
                document.getElementById(i).classList.replace("containerHide","container");
                document.getElementById(i).classList.add("zone");
            } else {
                document.getElementById(arr[index]).classList.replace("container","containerHide");
                document.getElementById(arr[index]).classList.remove("zone");
            }
        });
    }

}

function getMeetup() {
    // TODO Figure out why I'm getting this message when querying the meetup API: 
    // Access to XMLHttpRequest at 'https://api.meetup.com/Austin-Powershell/events?photo-host=public&page=20&sig_id=238371648&sig=8bc229342e4f64c52f391ad67bf4359fe9d2f40f' from origin 'null' has been blocked by CORS policy: 
    // Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    console.log("Called getMeetup()");
    url = "https://api.meetup.com/Austin-Powershell/events?photo-host=public&page=20&sig_id=238371648&sig=8bc229342e4f64c52f391ad67bf4359fe9d2f40f"
    httpGetAsync(url, function(e) {
        console.log(e);
    });


    // https://api.meetup.com/Austin-Powershell/events?&sign=true&photo-host=public&page=20
    // https://api.meetup.com/Austin-Powershell/events?photo-host=public&page=20&sig_id=238371648&sig=8bc229342e4f64c52f391ad67bf4359fe9d2f40f
}