function initialize()
{ 
    //They will see the title so lets set that to loading
    document.title = ("loading");
    
    //Now be honest and load resources
    //CSS
    loadFile("css.css", "css");
    //JS
    loadFile("jquery-3.1.1.min.js", "js");
    loadFile("jquery-bigtext/jquery-bigtext.js", "js");
    //Settings JSON
    loadFile("settings.js");
    //Set listeners
    //Resize
    $( window ).resize(function() {
        onResize();
    });
    //Loaded
    $( document ).ready(function() {
        afterLoad();
    });
}

function afterLoad()
{
    //Set Listeners
    
    //Set Display Proportions
    onResize();
    
    //Set title to name
    document.title = (resume.general.firstName + " " + resume.general.lastName);
    
    //And show all our hard work
    
}

function onResize()
{
        autoResizeTitle();
}

function autoResizeTitle()
{
    $(document).ready(function() {$("span#firstName").bigText({limitingDimension: "width", fontSizeFactor: 1.3, verticalAlign: "bottom"});});
    
    $(document).ready(function() {$("span#lastName").bigText({limitingDimension: "width", fontSizeFactor: 1.3, verticalAlign: "top"});});
}

function loadFile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
    {
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}