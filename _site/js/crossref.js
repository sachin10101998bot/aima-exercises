var requestURL = 'https://raw.githubusercontent.com/sachin10101998bot/aima-exercises/master/_site/crossref.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var crossreferences = request.response;
    var pagereferencessecluded = crossreferences["pageRef"];
    var sectionreferencessecluded = crossreferences["sectionRef"];
    var pagereferencessecludedlength = crossreferences["pageRef"].length;
    var sectionreferencessecludedlength = crossreferences["sectionRef"].length;
    console.log(sectionreferencessecludedlength);
    console.log(sectionreferencessecluded);
    var myH1 = document.getElementsByClassName('pageRef');
    var myI1 = document.getElementsByClassName('sectionRef');
    var myH2 = document.getElementsByClassName('pageRef').length;
    var myI2 = document.getElementsByClassName('sectionRef').length;
    console.log(myI1);
    console.log(myI2);
    for(var p=0 ; p<myH2; p++)
    {
      console.log(myH1[p].innerHTML);
      var newpage=myH1[p].innerHTML;
      
      for(var o=0;o<pagereferencessecludedlength;o++)
      {
        
        if(pagereferencessecluded[o].label==newpage)
        {
          console.log(pagereferencessecluded[o].value);
          myH1[p].innerHTML=pagereferencessecluded[o].value;
          myH1[p].title=pagereferencessecluded[o].label;
          console.log(myH1[p].title);
          console.log(myH1[p].innerHTML);
        }
      }

    }
    for( var p=0 ; p<myI2; p++)
    {
      console.log(myI1[p].innerHTML);
      var newsection=myI1[p].innerHTML;
      for(var o=0;o<sectionreferencessecludedlength;o++)
      {
        if(sectionreferencessecluded[o].label==newsection)
        {
          myI1[p].innerHTML=sectionreferencessecluded[o].value;
          myI1[p].title=sectionreferencessecluded[o].label;
        }
      }
    }

  }
