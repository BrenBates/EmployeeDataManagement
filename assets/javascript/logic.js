// Your web app's Firebase configuration


var firebaseConfig = {
    apiKey: "AIzaSyAjVLGb_eVOOXQi3Z0ROTrBQW6cn-esYr0",
    authDomain: "employeedatamanagement-f431a.firebaseapp.com",
    databaseURL: "https://employeedatamanagement-f431a.firebaseio.com",
    projectId: "employeedatamanagement-f431a",
    storageBucket: "",
    messagingSenderId: "1071625936835",
    appId: "1:1071625936835:web:a88820591d35c811c8e776"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  // Create a variable to reference the database.
  var database = firebase.database();

//   inputEmpName
//   inputRole
//   inputStartDate
//   inputMonthlyRate


   // Initial Values
   var empName = "";
   var Role = "";
   var startDate = 0;
   var monthlyRate = "";
   var rowCount = 3;
   var newRow = "";
   var newIndex = "";
   var newTD = "";
   var dataArray = [];

   // Capture Button Click
   $("#add-user").on("click", function(event) {
     event.preventDefault();

     console.log('hello world');
     console.log($("#inputEmpName").val().trim());
     // Grabbed values from text-boxes
     empName = $("#inputEmpName").val().trim();
     Role = $("#inputRole").val().trim();
     startDate = $("#inputStartDate").val().trim();
     monthlyRate = $("#inputMonthlyRate").val().trim();


     console.log(empName);
     console.log(Role);
     console.log(startDate);
     console.log(monthlyRate);
     
    

     // Code for "Setting values in the database"
     database.ref().push({
       empName: empName,
       Role: Role,
       startDate: startDate,
       monthlyRate: monthlyRate,
     });

     
   });

     database.ref().on("child_added", function(snapshot) {

        // Log everything that's coming out of snapshot
        console.log(snapshot.val());
        console.log(snapshot.val().empName);
        console.log(snapshot.val().Role);
        console.log(snapshot.val().startDate);
        console.log(snapshot.val().monthlyRate);
        
        
        // Change the HTML to reflect

        rowCount++;
        let newRow = "";
        let newIndex = "";
        let newTD = "";
        

        let sv = snapshot.val();
         

        
    

        let dataArray = [sv.empName, sv.Role, sv.startDate, sv.monthlyRate,];

        for(let i=0;i < dataArray.length;i++) {
            let newRow = $("<tr>");
            let newTD = $('<td>');
            newTD.append(dataArray[i]);
            $(newRow).append(newTD);
        }


        $('tbody').append(newRow);

        
        
        
        // Handle the errors
        }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
        });
