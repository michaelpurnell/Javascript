function loadJSON() {
    var data_file = '{"name": "brett", "country": "Australia"}';
    var http_request = new XMLHttpRequest();
    
    try{
        //opera 8.0+, Chrome, Safari, Firefox
         http_request = new XMLHttpRequest();
    }catch (e){
        // Internet Explorer Browsers
        try{
            http_request = new ActiveXObject("Maxml2.XMLHTTP");
        }catch(e){
            try{
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e){
                //something went wrong, figure it out.
                alert("Please upgrade or use a different Browser");
            }
        }
    }
    
    http_request.onreadystatechange=function(){
       // if(http_request.readyState != 4){
            //javascript function JSON.parse to parse JSON data
            var jsonObj = JSON.parse(http_request.responseText);
            
            //jsonObj variable now contains the data structure and can be accessed as jsonObj.id,language,study etc..
            document.getElementById("Name").innerHTML = "jsonObj.book.id";
            document.getElementById("Country").innerHTML = "jsonObj.language";
      //  }
    }
    
    http_request.open("GET", data_file, true);
    http_request.send();
}