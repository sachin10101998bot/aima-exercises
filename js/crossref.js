var requestURL = 'https://raw.githubusercontent.com/sachin10101998bot/aima-exercises/master/_site/crossref.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var crossreferences = request.response;
    console.log(crossreferences);
    var pagereferencessecluded = crossreferences["pageRef"];
    var myH1 = document.getElementById('pageRef').innerHTML;
    var lengthofpageref = pagereferencessecluded.length;
    var shayad = myH1.toString();
    for(var i=0 ; i<lengthofpageref ; i++)
    {
      if(pagereferencessecluded[i].pageName == shayad)
      {
        console.log(myH1);
        console.log(document.getElementById('pageRef').innerHTML);
        var shayad2 = pagereferencessecluded[i].pageNumber
        console.log(pagereferencessecluded[i].pageNumber);
        myH1=shayad2;
        document.getElementById("pageRef").title = myH1;
        
      }
         
    }
    
    
  }
