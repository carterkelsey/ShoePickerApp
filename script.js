function getShoe(weather, price){

    // the user inputs from the text boxes (saved in HTML) and save them to variables
  // var weather= document.getElementById("weather").value;
  // var price= document.getElementById("price").value; 
  // console.log(weather);
  // console.log(price);
  // log to make sure our code is not broken in any way and variables we changed into parameters that we could call back later
  
    //use variables to determine outputs
  var shoe= "Choose Shoe";
  
  if(price >= 100 && weather=="sunny" )
    { 
      shoe= "Fancy Sneaker"
  
    } else if( price >= 100 && weather=="rainy" ){
      shoe= "Fancy Rainboot";
    }
    else if( price <100 && weather=="sunny" ){
      shoe= "Cheaper Sneaker";
    } 
    else if( price < 100 && weather=="rainy" ){
      shoe= "Cheaper Rainboot";
    }
    console.log(shoe)
    return shoe
}
// calling return value function
function displayImage(){
  var shoe = getShoe(document.getElementById("weather").value,document.getElementById("price").value);
  var shoePic;
  if (shoe== "Fancy Sneaker"){
    shoePic= "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17d94aa9-1578-4faf-b989-73c0efc580b2/W+NIKE+JOURNEY+RUN.png"

  }
  else if (shoe== "Fancy Rainboot"){
    shoePic= "https://m.media-amazon.com/images/I/5154sRYic-L._AC_SL1500_.jpg"
  }

   else if (shoe== "Cheaper Sneaker"){
    shoePic= "https://vader-prod.s3.amazonaws.com/1711659300-salomonthundercross-6605d898e1fb2.jpg"

   }
  else if (shoe== "Cheaper Rainboot"){
    shoePic= "https://m.media-amazon.com/images/I/51lvyikppYL._AC_UY900_.jpg"

  }
document.getElementById("images").setAttribute("src", shoePic)
  getComment(shoe)

  }

  function getComment(chosenShoe){
  
    var feedback;
    if (chosenShoe=="Fancy Sneaker"){
        feedback = "Nike is a good choice";
    }
    if (chosenShoe=="Fancy Rainboot"){
      feedback = "Hunter boots are long lasting";
    }
    if (chosenShoe=="Cheaper Sneaker"){
      feedback = "affordable and fasionable!";
    }
    if (chosenShoe=="Cheaper Rainboot"){
      feedback = "Great rain boot for a good cost";

    }   
    
    document.getElementById("feedback").innerHTML = feedback;
  }

  
    //Lastly, set the results to display on the screen. Here is an example, although this will just set the results to be an empty string (you'll need to edit what it equals).
  

