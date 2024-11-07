
function getShoe(){

    // the user inputs from the text boxes (saved in HTML) and save them to variables
  var weather= document.getElementById("weather").value;
  var price= document.getElementById("price").value; 
  // console.log(weather);
  // console.log(price);
  // log to make sure our code is not broken in any way
  
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
function displayImage(){
  var QR= 1
  if (shoe= "Fancy Sneaker"){
   QR= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nike.com%2Fw%2F100-and-under-running-shoes-37v7jz3s37kzy7ok&psig=AOvVaw30uGWl92DnYh-ahNAYlsAO&ust=1731074551578000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjJ8K-xyokDFQAAAAAdAAAAABAR"
  }
  else if (shoe= "Fancy Rainboot"){
    QR= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FHunter-Womens-Play-Short-Backstrap%2Fdp%2FB0CJWCQ29W&psig=AOvVaw0hWn0gEWKrUOrMdtwb3WxK&ust=1731074428404000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJj18P2wyokDFQAAAAAdAAAAABAK"
  }

   else if (shoe= "Cheaper Sneaker"){
    QR= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.com%2Fitm%2F284744250459&psig=AOvVaw2amYmGv0i2cDjxgANd97F7&ust=1731074578325000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC068CxyokDFQAAAAAdAAAAABAE"
   }
  else if (shoe= "Cheaper Rainboot"){
    QR= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FWTW-Waterproof-Neoprene-Outdoor-Durable%2Fdp%2FB08ZQVBNHX&psig=AOvVaw2vEMVRcbnTN-TKMQEeaEZF&ust=1731074519659000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICb-KGxyokDFQAAAAAdAAAAABAJ"
   }
  }


  function getComment(string1,string2,string3){
  
    var feedback=(string1.length, string2.length, string3.length);
    
    if (shoe=="Fancy Sneaker"){
        return string1;
    }
    if (shoe=="Fancy Rainboot"){
      return string2;
    }
    if (shoe=="Cheap Sneaker"){
      return string3;
    }
    if (shoe=="Cheap Rainboot"){
      return string4;

    }
      
    console.log(getComment("Nike is a good choice", "Hunter boots are long lasting", "affordable and fasionable!", "Great rain boot for a good cost"));
    document.getElementById("feedback").innerHTML = feedback;
    

  
    //Lastly, set the results to display on the screen. Here is an example, although this will just set the results to be an empty string (you'll need to edit what it equals).
  
    
  }
