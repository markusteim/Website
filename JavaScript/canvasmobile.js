//Author of the code - Markus Teimann
//checks if its a mobile screen and then runs
if ( !(window.innerWidth > 1700)){

    var canvas = document.getElementById("canvas-graphs-mobile");
    var context = canvas.getContext("2d");

    var graphColors = ["blue", "red", "green"];
    var graphColors1 = ["#EFCB68", "#4F86C6", "#744FC6"];
    var graphColors2 = ["#004E64", "#DB2955", "#BC9EC1"];
    var daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var width = canvas.width;
    var height = canvas.height;
    var currentFunction = ""; //stores the string of current function

    var colorbtn1 = document.getElementById("maincolorbtn-mobile");
    var colorbtn2 = document.getElementById("subcolorbtn1-mobile");
    var colorbtn3 = document.getElementById("subcolorbtn2-mobile");
    var barchrtbtn = document.getElementById("barchartbtn-mobile");
    var linechrtbtn = document.getElementById("linechartbtn-mobile");
    var piechrtbtn = document.getElementById("piechartbtn-mobile");

    //changes the color and redraws the graph
    colorbtn1.addEventListener("click", function(){
        currentColors = graphColors;
        context.clearRect(0, 0, width, height);
        if (currentFunction === "barChart"){
            barChart(currentColors, daysArray, width, height);

        }
        else if (currentFunction === "lineChart"){
            lineChart(currentColors, daysArray, width, height);
        }

        else if (currentFunction === "pieChart"){
            pieChart(currentColors, width, height);
        }

    });

    colorbtn2.addEventListener("click", function(){
        currentColors = graphColors1;
        context.clearRect(0, 0, width, height);
        if (currentFunction === "barChart"){
            barChart(currentColors, daysArray, width, height);
        }
        else if (currentFunction === "lineChart"){
            lineChart(currentColors, daysArray, width, height);
        }

        else if (currentFunction === "pieChart"){
            pieChart(currentColors, width, height);
        }
    });

    colorbtn3.addEventListener("click", function(){
        currentColors = graphColors2;
        context.clearRect(0, 0, width, height);
        if (currentFunction === "barChart"){
            barChart(currentColors, daysArray, width, height);
        }
        else if (currentFunction === "lineChart"){
            lineChart(currentColors, daysArray, width, height);
        }

        else if (currentFunction === "pieChart"){
            pieChart(currentColors, width, height);
        }
    });

    var currentColors = graphColors; //sets the initial colors

    //calls the different charts
    barchrtbtn.addEventListener("click", function(){
        currentFunction = "barChart";
        context.clearRect(0, 0, width, height);
        barChart(currentColors, daysArray, width, height);
    });
    linechrtbtn.addEventListener("click", function(){
        currentFunction = "lineChart";
        context.clearRect(0, 0, width, height);
        lineChart(currentColors, daysArray, width, height);
    });
    piechrtbtn.addEventListener("click", function (){
        currentFunction = "pieChart";
        context.clearRect(0, 0, width, height);
        pieChart(currentColors, width, height);
    });



    function pieChart(colors, xValue, yValue) {

        var dataValues = [["Studying", 48], ["Playing Games" , 9], ["Exercise" , 5]];
        var totalHours = 62;
        var x = xValue / 2;
        var y = yValue / 2;
        var radius = 60;
        var startingDegree = 0;

        //loops through values and then displays them
        for (var i = 0; i < dataValues.length; i++){
            var percentValue = (dataValues[i][1] * 100) / totalHours;
            var endingDegree = startingDegree + (2 / 100 * percentValue);
            
            context.beginPath();
            context.fillStyle = colors[i];
            context.moveTo(x, y);
            context.arc(x, y, radius, startingDegree * Math.PI, endingDegree * Math.PI);
            context.fill();

            //next part starts where last one ended
            startingDegree = endingDegree;

            // adds the legend
            context.fillRect( 10 , 10 * (i+1) , 5, 5 );  
            context.font = "10px Overpass";
            context.fillText( dataValues[ i ][ 0 ] + " (" + dataValues[ i ][ 1 ] + ")", 60, 10 * (i+1) + 4 );
        }

        context.font = "15px Overpass";
        context.textAlign = "center";
        context.fillStyle = "black"; 
        context.fillText("Markus' activities during a busy week", x, yValue - 7.5);
    }

    function barChart(colors, days, x, y){
        
        var dataValues = [["Studying", 9], ["Playing" , 2], ["Exercise" , 0], ["Studying", 7], ["Playing Games" , 1], ["Exercise" , 0], ["Studying", 10], ["Playing Games" , 2], ["Exercise" , 1], ["Studying", 8], ["Playing Games" , 2], ["Exercise" , 0], ["Studying", 4], ["Playing Games" , 0], ["Exercise" , 1], ["Studying", 5], ["Playing Games" , 1], ["Exercise" , 2], ["Studying", 5], ["Playing Games" , 1], ["Exercise" , 1]];
        var maxHours = 12;
        var colorIncrementer = 0;
        for (var i = 0; i < maxHours; i++){
            var startingX = 13;
            var endingX = x - 50;
            var startingY = y - 13;

            context.lineWidth = "1";
            //draw the hour values
            context.font = "12px Overpass";
            context.textAlign = "center";
            context.fillStyle = "black"; 
            context.fillText((i) + "h", startingX - 6, startingY - (i*13));
            //draw background lines
            context.stokeStyle = "rgb(0,0,0)"; 
            context.beginPath();
                context.moveTo(startingX, startingY - (i*13));
                context.lineTo(endingX, startingY - (i*13));
            context.stroke();
        }
        //draw the days
        for (var i = 0; i < days.length; i++){
            context.font = "9px Overpass";
            context.textAlign = "center";
            context.fillStyle = "black"; 
            context.fillText(days[i], (startingX + 28 ) * (i+1), 167);
        }
        //draw the bars
        for (var i = 0; i < dataValues.length; i++){
            
            if (colorIncrementer % 3 === 0) {
                colorIncrementer = 0;
            }
            
            context.fillStyle = colors[colorIncrementer]; 
            context.fillRect((startingX), startingY - (13 * dataValues[i][1]) , 9, 13*dataValues[i][1] ); 
            colorIncrementer += 1;
            startingX += 13;
        }


        // adds the legend
        for (var i = 0; i < 3; i++){
            context.fillStyle = colors[i];
            context.fillRect( endingX + 3 , 15 * (i+1) , 5, 5 );  
            context.font = "8px Overpass";
            context.fillText( dataValues[ i ][ 0 ] , endingX + 31, 15 * (i+1) + 4 );
        }
            
        
    }

    function lineChart(colors, days, x, y){
        
        var dataValues = [["Studying", 9], ["Playing" , 2], ["Exercise" , 0], ["Studying", 7], ["Playing Games" , 1], ["Exercise" , 0], ["Studying", 10], ["Playing Games" , 2], ["Exercise" , 1], ["Studying", 8], ["Playing Games" , 2], ["Exercise" , 0], ["Studying", 4], ["Playing Games" , 0], ["Exercise" , 1], ["Studying", 5], ["Playing Games" , 1], ["Exercise" , 2], ["Studying", 5], ["Playing Games" , 1], ["Exercise" , 1]];
        var maxHours = 12;
        var startingX = 13;
        var endingX = x - 50;
        var startingY = y - 13;
        var counter = 1;
        for (var i = 0; i < maxHours; i++){
        
            context.lineWidth = "1";
            //draw the hour values
            context.font = "12px Overpass";
            context.textAlign = "center";
            context.fillStyle = "black"; 
            context.fillText((i) + "h", startingX - 6, startingY - (i*13));
            //draw background lines
            context.stokeStyle = "rgb(0,0,0)"; 
            context.beginPath();
                context.moveTo(startingX, startingY - (i*13));
                context.lineTo(endingX, startingY - (i*13));
            context.stroke();
        }
        //draw the days
        for (var i = 0; i < days.length; i++){
            context.font = "9px Overpass";
            context.textAlign = "center";
            context.fillStyle = "black"; 
            context.fillText(days[i], (startingX + 25 ) * (i+1), 167);
        }

        // adds the legend
        for (var i = 0; i < 3; i++){
            context.fillStyle = colors[i];
            context.fillRect( endingX + 3 , 15 * (i+1) , 5, 5 );  
            context.font = "8px Overpass";
            context.fillText( dataValues[ i ][ 0 ] , endingX + 31, 15 * (i+1) + 4 );
            var xDifference = (endingX - startingX ) / 8;
        }
        //draw the lines
        for (var x = 0; x < 3; x++){
            counter = 1;
            context.strokeStyle = colors[x];
            context.fillStyle = colors[x];
            context.lineWidth = "3";
            var currentYValue = 0;
            for (var i = x; i < dataValues.length; i+=3){
                //adds the small squares
                if (i + 3 > 20) { 
                    context.fillRect((xDifference * counter), (startingY - (dataValues[i][1] * 13.2)) - 2,8,8);
                    break;
                }

                context.fillRect((xDifference * counter) , (startingY - (dataValues[i][1] * 13.2)) - 2,8,8);
                context.beginPath();
                    context.moveTo(xDifference * counter + 2, startingY - (dataValues[i][1] * 13));
                    context.lineTo(xDifference * (counter + 1) + 5, startingY - (dataValues[i+3][1] * 13));
                context.stroke();
            
                currentYValue = (dataValues[i][1] * 13);
                counter += 1; 
            }
        }
    }

}
