
function getShoe(weather, price){

//  first we created a function and named it based on what we wanted the function to do
  var shoe= "Choose Shoe";
// we put our variables as parameters (weather and price) to save them as fixed quantities and then created one more (shoe) which is assigned to the output value aka your chosen shoe
  if(price >= 100 && weather=="sunny" )
    { 
      shoe= "Fancy Sneaker"
  
    } else if( price >= 100 && weather=="rainy" ){
      shoe= "Fancy Rain boot";
    }
    else if( price <100 && weather=="sunny" ){
      shoe= "Cheaper Sneaker";
    } 
    else if( price < 100 && weather=="rainy" ){
      shoe= "Cheaper Rain boot";
    }
    console.log(shoe)
    return shoe
// we created a conditional  that provide the circumstances for which shoe will be chosen
}

function displayImage(){
// we created a second function connected to the getShoefunction and the HTML, and then assigned images to display below based upon the output from getShoe
  var shoe = getShoe(document.getElementById("weather").value,document.getElementById("price").value);
//  getElementById lets you to select an HTML element using its ID 
  var shoePic;
// shoePic is the variable we named our image
  if (shoe== "Fancy Sneaker"){
    shoePic= "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17d94aa9-1578-4faf-b989-73c0efc580b2/W+NIKE+JOURNEY+RUN.png"

  }
  else if (shoe== "Fancy Rain boot"){
    shoePic= "https://m.media-amazon.com/images/I/5154sRYic-L._AC_SL1500_.jpg"
  }

  else if (shoe== "Cheaper Sneaker"){
    shoePic= "https://vader-prod.s3.amazonaws.com/1711659300-salomonthundercross-6605d898e1fb2.jpg"

   }
  else if (shoe== "Cheaper Rain boot"){
    shoePic= "https://m.media-amazon.com/images/I/51lvyikppYL._AC_UY900_.jpg"

  }
document.getElementById("images").setAttribute("src", shoePic)
  getComment(shoe)
// the getElementById above connects back to the HTML displaying the code on the screen
  }

  function getComment(chosenShoe){
// our third function which is  with the other functions by taking the original output (chosenShoe) and using that result to display a specific comment getComment. 
    var feedback;
// we assigned feedback to a variable and then put it in the HTML as an ID to get the feedback to display below the image
    if (chosenShoe=="Fancy Sneaker"){
        feedback = "Nike is a good choice!";
    }
    if (chosenShoe=="Fancy Rain boot"){
      feedback = "Hunter boots are classy and long lasting!";
    }
    if (chosenShoe=="Cheaper Sneaker"){
      feedback = "Affordable and fashionable!";
    }
    if (chosenShoe=="Cheaper Rain boot"){
      feedback = "Great rain boot for a good cost!";

    }   
    document.getElementById("feedback").innerHTML = feedback;
  }
  // if statments that will determine which feedback our customer recieves
   
  // lastly get results to display on the screen

  

  

