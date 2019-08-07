var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';



var text2 = '{"paperRef":['+
      '{"paperName":"Turing:1950", "MLA":"Turing, A. M. Mind. Mind 59.236 (1950): 433-460."},' +
      '{"paperName":"Anna", "MLA":"Smith"},' +
      '{"paperName":"Peter", "MLA":"Jones"}]' +
    ','+

    '"pageRef":[' +
        '{"pageName":"vacuum-rationality-page", "pageNumber":"Pg 38"},' +
        '{"pageName":"nqueens-page", "pageNumber":"Pg 56"}}]';
    
    
window.data = $.getJSON(window.aimaBaseURL+'/search_data.json');

obj = JSON.parse(text);
document.getElementsByClassName("paperRef").title =
obj.employees[1].firstName + " " + obj.employees[1].lastName;