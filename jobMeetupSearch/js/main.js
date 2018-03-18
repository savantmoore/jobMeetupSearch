document.getElementById("findJobs").onclick = jobSearch;

function jobSearch(){

  var jobLevel = document.getElementById("jobLevel").value;

  var request = new XMLHttpRequest();
  request.open('GET', '/api?level='+jobLevel, true);


  request.onload = function() {
  console.log(jobLevel);


      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data.title)

          document.getElementById("title").innerHTML = data.title
          document.getElementById("location").innerHTML = data.location
          document.getElementById("company").innerHTML = data.company
          document.getElementById("description").innerHTML = data.description
          document.getElementById("salary").innerHTML = data.salary



      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
}
