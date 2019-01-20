// var data = 
//     [{
//     "title": "ECE201 - Introduction to Electrical and Computer Engineering",
//     "description": "Topics of interest to second year Electrical and Computer Engineering students, with special reference to industries in Alberta, including coverage of elements of ethics, equity, concepts of sustainable development and environmental stewardship, public and worker safety and health considerations including the context of the Alberta Occupational Health and Safety Act. Offered in a single day during the first week of September. Restricted to students registered in the Department of Electrical and Computer Engineering.",
//     "courseurl_Link": "https://catalogue.ualberta.ca/Course/Details?subjectCode=ECE&catalog=201"
//   },
//   {
//     "title": "ECE202 - Electrical Circuits I",
//     "description": "Circuit element definitions. Circuit laws: Ohm's, KVL, KCL. Resistive voltage and current dividers. Basic loop and nodal analysis. Dependent sources. Circuit theorems: linearity, superposition, maximum power transfer, Thevenin, Norton. Time domain behavior of inductance and capacitance, energy storage. Sinusoidal signals, complex numbers, phasor and impedance concepts. Magnetically coupled networks. Single phase power and power factor. Prerequisites: MATH 101, 102. Credit may be obtained in only one of ECE 202 or E E 240.",
//     "courseurl_Link": "https://catalogue.ualberta.ca/Course/Details?subjectCode=ECE&catalog=202"
//   }];

//   console.log(data[0].title);
//   console.log(data[0].description)

// var json = require('data.json');

console.log("test");

$.getJSON("data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});