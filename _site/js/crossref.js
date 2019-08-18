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
    var exercisesreferencesecluded = crossreferences["exerciseRef"];
    var exercisesreferencesecludedlength = crossreferences["exerciseRef"].length;
    var chapterreferencessecluded = crossreferences["chapterRef"];
    var chapterreferencessecludedlength = crossreferences["chapterRef"].length;
    var papereferencessecluded = crossreferences["paperRef"];
    var paperreferencesseculdedlength = crossreferences["paperRef"].length;
    var equationreferencessecluded = crossreferences["equationRef"];
    var equationreferencessecludedlength = crossreferences["equationRef"].length;
    var insideExercisesFigRefsecluded =crossreferences["insideExercisesFigRef"];
    var insideExercisesFigRefsecludedlength = crossreferences["insideExerciseFigRef"].length;
    var myH1 = document.getElementsByClassName('pageRef');
    var myI1 = document.getElementsByClassName('sectionRef');
    var myJ1 = document.getElementsByClassName('exerciseRef');
    var myH2 = document.getElementsByClassName('pageRef').length;
    var myI2 = document.getElementsByClassName('sectionRef').length;
    var myJ2 = document.getElementsByClassName('exerciseRef').length;
    var myK1 = document.getElementsByClassName('chapterRef');
    var myK2 = document.getElementsByClassName('chapterRef').length;
    var myL1 = document.getElementsByClassName('paperRef');
    var myL2 = document.getElementsByClassName('paperRef').length;
    var myM1 = document.getElementsByClassName('equationRef');
    var myM2 = document.getElementsByClassName('equationRef').length;
    var myN1 = document.getElementsByClassName('insideExerciseFigRef');
    var myN2 = document.getElementsByClassName('insideExerciseFigRef').length;
    for(var p=0 ; p<myH2; p++)
    {
      var newpage=myH1[p].innerHTML;
      for(var o=0;o<pagereferencessecludedlength;o++)
      {
        if(pagereferencessecluded[o].label==newpage)
        { 
          myH1[p].innerHTML=pagereferencessecluded[o].value;
          myH1[p].title=pagereferencessecluded[o].label;
        }
      }
    }
    for( var p=0 ; p<myI2; p++)
    {
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
    for(var p=0;p<myJ2;p++)
    {
      var newexercise = myJ1[p].innerHTML;
      for(var o=0;o<exercisesreferencesecludedlength;o++)
      {
        if(exercisesreferencesecluded[o].label==newexercise)
        {
          myJ1[p].innerHTML=exercisesreferencesecluded[o].value;
          myJ1[p].title=exercisesreferencesecluded[o].label;
          myJ1[p].href=exercisesreferencesecluded[o].valueHREF;
        }
      }

    }
    for(var p=0;p<myK2;p++)
    { 
      var newchapter = myK1[p].innerHTML;
      for(var o=0;o<chapterreferencessecludedlength;o++)
      {
        if(chapterreferencessecluded[o].label==newchapter)
        {
          myK1[p].innerHTML=chapterreferencessecluded[o].value;
          myK1[p].title=chapterreferencessecluded[o].label;
        }
      }
    }
    for(var p=0;p<myL2;p++)
    {

      var newpaper=myL1[p].innerHTML;
      
      for(var o=0;o<paperreferencesseculdedlength;o++)
      {
       
        if(papereferencessecluded[o].label==newpaper)
        {
          myL1[p].title=papereferencessecluded[o].value;
          myL1[p].innerHTML=papereferencessecluded[o].label;
        }
      }
    }
    console.log(myM2);
    console.log(myM1);
    for(var p=0;p<myM2;p++)
    {
      var newequation = myM1[p].innerHTML;
      console.log(newequation);
      for(var o=0;o<equationreferencessecludedlength;o++)
      {
        console.log(equationreferencessecluded[o].label);
        if(equationreferencessecluded[o].label=newequation)
        {
          myM1[p].innerHTML=equationreferencessecluded[o].value;
          myM1[p].title=equationreferencessecluded[o].label;
        }
      }
    }
  }
