var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment =require("./models/comment");

var data=[
    {
    name:"cloud rest",
    image:"https://images.pexels.com/photos/6714/light-forest-trees-morning.jpg?auto=compress&cs=tinysrgb&h=350",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
    name:"cloud rest",
    image:"https://images.pexels.com/photos/6714/light-forest-trees-morning.jpg?auto=compress&cs=tinysrgb&h=350",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
    name:"cloud rest",
    image:"https://images.pexels.com/photos/6714/light-forest-trees-morning.jpg?auto=compress&cs=tinysrgb&h=350",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];
function seedDB(){
    //Remove all campgrounds
    Campground.remove({},function(err){
//     if(err){
//         console.log(err);
//     }
//   data.forEach(function(seed){
//     Campground.create(seed,function(err,campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("added");
//             //create a comment
//             Comment.create(
//                 {text:"This place is great",
//                 author:"Homer"
                    
//                 },function(err,comment){
//                     if(err){
//                         console.log(err);
//                     }else{
//                          campground.comments.push(comment);
//                           campground.save();
//                           console.log("created new comment");
//                     }
                  
                    
//                 });
//         }
//     });
// }); 
});
//add a few campgrounds


}

module.exports=seedDB;

