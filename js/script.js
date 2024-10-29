$(Document).ready(function() {
    const date = new Date();
    const hour = date.getHours();
    let message = "";
    if(hour <= 12){
        message = "Good Morning";
    }
    if(hour > 12) {
        message = "Good Afternoon";
    }
    if(hour >= 17) {
        message = "Good Evening";
    }

    $('#headingText').empty().append(message + " From Sek Samon");
});
$(Document).ready(function() {
    const date = new Date ();
    const hour = date.getHours();
    let textAbout = "";
    if(hour <=5) {
        textAbout = "About Me!";
    }
    if(hour >5) {
        textAbout = "Want to Know About Me";
    }
    else{
        textAbout = "About Me!!!";
    }

    $("#headingAbout").empty().append(textAbout);
})
