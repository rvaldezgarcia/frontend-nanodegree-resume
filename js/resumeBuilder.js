/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append('Raymundo Valdez García');

/*var email = "cameron@udacity.com";
var newEmail = email.replace("udacity","gmail");
console.log(email);
console.log(newEmail);

var awesomeThoughts = "I am Raymundo and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);*/

var bio = {
    "name" : "Raymundo Valdez",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "(867) 7191925 Ext. 225",
        "email" : "rvaldez@globalpc.net",
        "github" : "rvaldezgarcia",
        "twitter" : "@silversmith_mx",
        "location" : "Nuevo Laredo"
    },
    "welcomeMessage" : "hey wasssssssaaaaaaaaaa !!!!!!!!",
    "skills" : [ "eat pizza", "some linux", "some code" ],
    "bioPic" : "images/me.jpg",
	"display" : function() {}
};

var education = {
	"schools": [{
		"name": "ITNL",
		"location": "Nuevo Laredo",
		"degree": "Ingeniería en Sistemas Computacionales",
		"majors": ["CompSci", "Other"],
		"dates": "2005 - 2009",
		"url": "http://www.itnuevolaredo.edu.mx"
	}],
	"onlineCourses": [{
		"title": "Linux Command Line Basics",
		"school": "Udacity",
		"dates": "2016",
		"url": "http://www.udacity.com"
	}, {
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "2016",
		"url": "http://www.udacity.com"
	}],
	"display": function() {}
};

// Work
var work = {
    "jobs" : [
    {"employer" : "Soriana", "title" : "Juguetería", "location" : "Nuevo Laredo",  "dates" : "2008", "description" : "Acomodar mercancía"},
    ],
    "display" : function() {}
};

var projects = {
	"projects" : [
		{"title" : "Stuff", "dates": "2014-12-12", "description" : "Something", "images" : ["images/1.png" , "images/2.png"]},
		{"title" : "Stuff 2", "dates": "2014-11-11", "description" : "Another thing", "images" : ["images/3.png" , "images/4.png"]}
	],
	"display" : function() {}
};

//var name = "Raymundo Valdez";
//var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formatMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formatGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formatLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formatBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formatWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

//var formatSkillsStart = HTMLskillsStart.replace("");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header #topContacts").append(formatMobile);
$("#header #topContacts").append(formatEmail);
$("#header #topContacts").append(formatGithub);
$("#header #topContacts").append(formatTwitter);
$("#header #topContacts").append(formatLocation);

$("#header").append(formatBioPic);
$("#header").append(formatWelcomeMsg);

$("#header").append(HTMLskillsStart);

var formatSkills = "";

for(var i in bio.skills) {
    //console.log( bio.skills[i] );
    
    formatSkills = HTMLskills.replace("%data%", bio.skills[i]);
    
    $("#header ul#skills").append( formatSkills );
}

//$("#header #workExperience").append(HTMLworkStart);
//var formatWorkStart =  HTMLworkStart.replace("%data%", );
var formatWorkEmployer = '';
var formatWorkTitle = '';
var formatWorkDates = '';
var formatWorkLocation = '';
var formatWorkDescription = '';

for(var i in work.jobs) {
    $("#header #workExperience").append(HTMLworkStart);

    formatWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    formatWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    formatWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].location);
    formatWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].dates);
    formatWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    
    $("#header #workExperience .work-entry:last").append(formatWorkEmployer + formatWorkTitle);
    $("#header #workExperience .work-entry:last").append(formatWorkDates);
    $("#header #workExperience .work-entry:last").append(formatWorkLocation);
    $("#header #workExperience .work-entry:last").append(formatWorkDescription);
}