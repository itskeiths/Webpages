function getBotResponse(input) {
    //rock paper scissors
    if (input == "AWS User Group" || input=="AWS UG") {
        return "Please mention the country of the UserGroup?";
    } else if (input == "IndiaUG") {
        const data = ["1.AWS UG Kochi" + "<br>" + "2.AWS UG Chennai" + "<br>"+ "3.AWS UG Madurai"+  "<br>"+ "4.AWS UG Pune"+ "<br>"+"5.AWS UG Kolkata"]
     return data;
    } else if (input == "1") {
        return "AWS UG Kochi:" + "<br>"+"http://bit.ly/3E0cpyh";
        
    }
    else if (input == "2") {
        return "AWS UG Chennai:" + "<br>"+"https://bit.ly/3hdA3OD";
        
    }
    else if (input == "3") {
        return "AWS UG Madurai:" + "<br>"+"http://bit.ly/3E1YGXu";
        
    }
    else if (input == "4") {
        return "AWS UG Pune:" + "<br>"+"http://bit.ly/3zEnL8j";
        
    }
    else if (input == "5") {
        return "AWS UG Kolkata:"+ "<br>"+"http://bit.ly/3FKui5A";
       
    }
    else if(input=="Event"){
        const data = ["1.AWS UG Kochi-10th December 2022" + "<br>" + "2.AWS UG Chennai-14th December 2022" + "<br>" + "3.AWS UG Madurai-24th Novemeber 2022"+  "<br>"+ "4.AWS UG Pune-29th November 2022"+ "<br>"+"5.AWS UG Kolkata-15th January 2023"]
        return data;

    }
    else if(input=="What is Community Day"){
        return "AWS Community Day events are community-led conferences where event logisticsand content is planned, sourced, and delivered by community leaders.";
    }
    else if(input=="Date?"){
        return "Mention your Location";
    }
    else if(input=="India"){
        return "11th & 12th Nov 2022";
    }
    else if(input=="Summit?"){
        return "Mention Your Location";
    }
    else if(input=="Chicago"){
        return "August 25, 2022";
    }

    // Simple responses
    if (input == "hello" || input == "Hello" || input== "Hi" || input=="hi"){
        return "Hello there!";
    } else if (input == "goodbye" || input=="bye") {
        return "Catch you later!";
    } else {
        return "Try asking something else!";
    }
}