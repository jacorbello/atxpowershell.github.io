function showContent(i) {
    var divs = [
        "mainWindow",
        "eventsDiv",
        "projectsDiv",
        "resourcesDiv",
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