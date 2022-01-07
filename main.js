function addUser()
{
     player1_name = document.getElementById("player1_name").value;
     player2_name = document.getElementById("player2_name").value;

     localStorage.setItem("player1_name", player1_name);
     localStorage.setItem("player2_name", player2_name);
     window.location.replace("game_index.html");
}

function send(){
     DNumber1 = document.getElementById("dnum1").value;
     DNumber2 = document.getElementById("dnum2").value;
     MNumber1 = document.getElementById("mnum1").value;
     MNumber2 = document.getElementById("mnum2").value;
     ANumber1 = document.getElementById("anum1").value;
     ANumber2 = document.getElementById("anum2").value;
     SNumber1 = document.getElementById("snum1").value;
     SNumber2 = document.getElementById("snum2").value;

     actual_answer = parseInt(DNumber1) / parseInt(DNumber2);
     actual_answer = parseInt(MNumber1) * parseInt(MNumber2);
     actual_answer = parseInt(ANumber1) + parseInt(ANumber2);
     actual_answer = parseInt(SNumber1) - parseInt(SNumber2);

     dquestion_number = "<h4 style='color:black;'>" + DNumber1 + " / " + DNumber2 + "</h4>" + "<br>";
     mquestion_number = "<h4 style='color:black;'>" + MNumber1 + " x " + MNumber2 + "</h4>" + "<br>";
     aquestion_number = "<h4 style='color:black;'>" + ANumber1 + " + " + ANumber2 + "</h4>" + "<br>";
     squestion_number = "<h4 style='color:black;'>" + SNumber1 + " - " + SNumber2 + "</h4>" + "<br>";
     danswer_box = "Division answer : <input type='text' id='dans'>";    
     manswer_box = "Multipliction answer : <input type='text' id='mans'>";   
     aanswer_box = "Addition answer : <input type='text' id='aans'>";   
     sanswer_box = "Subtration answer : <input type='text' id='sans'>"; 
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row =  dquestion_number +  mquestion_number + aquestion_number + squestion_number + danswer_box + manswer_box + aanswer_box + sanswer_box + check_button;
     document.getElementById("output").innerHTML = row;
     document.getElementById("DNumber1").value = "";
     document.getElementById("DNumber2").value = "";
     document.getElementById("MNumber1").value = "";
     document.getElementById("MNumber2").value = "";
     document.getElementById("ANumber1").value = "";
     document.getElementById("ANumber2").value = "";
     document.getElementById("SNumber1").value = "";
     document.getElementById("SNumber2").value = "";
};