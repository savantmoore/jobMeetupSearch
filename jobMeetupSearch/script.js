const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');

//const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
   if('level' in params){
     if(params['level']== 'intern'){
       res.writeHead(200, {'Content-Type': 'application/json'});
       var internships = [{
         title: "Web Developer Apprentice",
         company:"Intrepid Pursuits",
         location: "Cambridge",
         description: "Our Web Developer Apprentices are junior engineers eager to master the fundamentals of their practice area. The apprentice program builds onto a undergraduate course load or dev bootcamp, taking theoretics and applying them to real-life development work. The Apprentice program equips qualified individuals with the skills they need to join client engagements as productive engineers. During this 12-week training program, apprentices will work alongside our team participating in existing client projects. In addition, the apprentice class will participate in a capstone project, demonstrating the breadth of knowledge he or she has learned over the course of the program.",
         salary: "$26-$30 an hour"
       },{
         title:"Software Engineering Internship",
         company:"BioBright",
         location:"Boston",
         description:"You will work at our Boston office, mostly on behind-the-scenes code like data processing/analysis, programmatic testing, and API development (not HTML/CSS). Professional development and mentorship are important to us, so from day one, you will make individual code contributions alongside your BioBright mentors. You will learn software engineering best practices, build up your coding skills in a big way, and get to work on a wide variety of cutting-edge tools.",
         salary:"$28 -$35 an hour"

       },{
         title:"UI/Front-end Internship",
         company:"Kayak",
         location:"Cambridge",
         description:"Work with our front end web development Work on new and existing features in our UI layer. KAYAK is looking for a smart and enthusiastic intern with the drive to accomplish big projects in a short time.",
         salary:"$22 -$25 an hour"
       }]
       res.end(JSON.stringify(internships));
     }//company = hubspot
     else if(params['level'] == 'entry level'){
       res.writeHead(200, {'Content-Type': 'application/json'});
       var entryLevel = [{
         title: "Front End Developr 1",
         company: "Granite Telecommunications",
         location: "Quincy",
         description: "Granite is seeking a Front End developer focusing on web UI design with aspiration to build solutions that are elegant, beautiful, and state of art web sites. The ideal candidate will love to learn and work with leading-edge technologies, enjoy taking on big challenges, understanding the priorities, and getting the job done.",
         salary:"$70,000"
       },{
         title:"Frontend Software Engineer",
         company:"Crayon",
         location:"Boston",
         description:"Crayon is looking for a brilliant front-end developer with 2+ years of experience to bring a mix of true grit and solid craftsmanship to our growing team. Day-to-day you will work with other world-class engineers to design, code, test, and deploy amazing features. Crayon is a product-driven company, and every line of code you contribute will help move the vision forward.",
         salary: "$100,000"
       },{
         title:"Web Developer",
         company:"iBoss",
         location:"Boston",
         description:"We are looking for a passionate Web Developer, who is ready to work on the cutting edge of Cyber Security Software solutions. This is an excellent opportunity to become a core member of a rapidly growing software development team.  You will possess solid programming skills, have a sound understanding of engineering best practices and have the drive to deliver the very best. Additionally, you must have excellent communication skills, as you will be interfacing both with various departments internally and customers externally.",
         salary:"$85,000"
       }]
       res.end(JSON.stringify(entryLevel));
     }else if(params['level'] == 'senior level'){
       res.writeHead(200, {'Content-Type': 'application/json'});
       var seniorLevel = [{
         title: "Back End Engineer or Architect",
         company: "Wanderu",
         location: "Boston",
         description: "We are seeking driven, problem-solving, experienced developers to join us full time. In this role, you will be key to the development and management of the Wanderu technology platform. As a member of a small team of research and development engineers, you will work in an exciting environment using the latest technologies including NoSQL and graph search technologies.",
         salary:"$89,000"
       },{
         title:"Python Platforms Senior Engineer",
         company:"Wayfair",
         location:"Boston",
         description:"Python Platform Engineering Team pairs with internal Python teams to help them achieve their engineering goals. Deep experience building web apps with Flask or Django",
         salary: "$121,000"
       },{
         title:"Senior Software Engineer",
         company:"iRobot",
         location:"Bedford",
         description:"Use strong communication skills (oral and written) to collaborate with cross-functional product development team to design, implement, and test embedded software for use in a variety of autonomous robotic platforms. Troubleshoot and develop solutions for customer and manufacturing problems. Study information and systems flow, data usage, and work processes to determine platform needs. Write software documentation and participate in code review. Actively participate in daily or weekly team meetings with cross-functional product development team and senior managers. Train and mentor entry level software engineers.",
         salary:"$101,000-$144,000"
       }]
       res.end(JSON.stringify(seniorLevel));
     }//student != leon
   }
    //student if
 }else if (page == '/script.js'){
    fs.readFile('script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }/*else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }*/
});

server.listen(8000);
