$("document").ready(function(){
   
    getData();
});

function getData(){
    $.ajax({
        url:"demo.json",
        type:"GET",
        dataType:"JSON",
        success:successFn,
        error:errorFn,
        complete:function(xhr,status){
            console.log("complete");
        }
    });

}

function successFn(result){
    
    for(var i=0;i<result.length ;i++){
        if(result[i].sections[0].name == 'Culture'){
            var data = result[i];
            culture(data);
        }
        else if(result[i].sections[0].name == 'International'){
            var data = result[i];
            international(data);
        }
        
        
    }
}

function culture(data){
       var display = document.getElementById("content");
       display.innerHTML=  '<div class="row"><div class="content col-md-10 col-md-offset-1"> <div class="col-md-5 template-image"> <img src="http://quintype-01.imgix.net/quintype-demo/2017-04/802d7ef1-6043-4f7e-84d3-fc9f556d5097/G-1.jpg" /> </div> <div class="col-md-5 template-content">' + data.sections[0]['name'] + '<br />' + '<p class="sub-heading">' + data['headline'] + '</p>' + '<p class="sub-content">' + data['headline'] + '</p>' + '<p class="author-name">' + data['author-name'] + '</p>' + '<p class="author-name">' + 'Posted 15 mins ago' + '</p>' + '</div></div></div>'; 
}

function international(data){
    var display= document.getElementById("content2");
     display.innerHTML= '<div class="row"><div class="content col-md-10 col-md-offset-1"> <div class="col-md-3 business-content"><img class="travel" src="http://quintype-01.imgix.net/quintype-demo/2015-11/21006f30-9d7e-4219-ba96-4b2fd945e53c/cuba14.jpg"/><p class="travel-content">' + data.sections[0]['name'] + '</p>' +'<p class="sub-heading">' + data['headline'] + '</p>' + '<p class="sub-content">' + data['headline'] + '</p>' + '<p class="author-name">' + data['author-name'] + '</p>' + '<p class="author-name">' + 'Posted 15 mins ago' + '</p>' +  '<div class="col-md-4 travel-content"> </div><div class="col-md-3 publish"> </div> </div> </div>'
    
}

function errorFn(xhr,status,strErr){
    console.log("false");
}








//$(document).ready(function(){
//        $("#ajax-content").load("demo.txt", function(responseTxt, statusTxt, xhr){
//            if(statusTxt == "success"){
//
//            }
//            if(statusTxt == "error")
//                alert("Error: " + xhr.status + ": " + xhr.statusText);
//        });
//
//});
//var invocation = new XMLHttpRequest();
//var url = 'https://rio.quintype.io/api/v1/stories';
//   
//function callOtherDomain() {
//  if(invocation) {    
//    invocation.open('GET', url, true);
//    invocation.onreadystatechange = handler;
//    invocation.send(); 
//      }
//}
////
//function createCORSRequest(method, url) {
//  var xhr = new XMLHttpRequest();
//  if ("withCredentials" in xhr) {
//
//    // Check if the XMLHttpRequest object has a "withCredentials" property.
//    // "withCredentials" only exists on XMLHTTPRequest2 objects.
//    xhr.open(method, url, true);
//
//  } else if (typeof XDomainRequest != "undefined") {
//
//    // Otherwise, check if XDomainRequest.
//    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//    xhr = new XDomainRequest();
//    xhr.open(method, url);
//
//  } else {
//
//    // Otherwise, CORS is not supported by the browser.
//    xhr = null;
//
//  }
//  return xhr;
//}
//
//var xhr = createCORSRequest('GET', 'https://rio.quintype.io/api/v1/stories');
//if (!xhr) {
//  throw new Error('CORS not supported');
//}


//$(document).ready(function(){
//    $.ajax({
//        type: "GET",
//        url: "https://rio.quintype.io/api/v1/stories",
//        dataType:"json",
//        success: function(data,textStatus){
//            $("#content").html(data);
//            alert("okay");
//        },
//        error: function(){
//            alert('not okay');
//        }
//    })
//});
