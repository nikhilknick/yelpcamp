var express=require("express");
var router=express.Router();
var Campground=require("../models/campground");
var middleware=require("../middleware");

//Index-show all campgrounds
router.get("/",function(req,res){
    
   //All campgrounds from Db
   Campground.find({},function(err,allCampgrounds){
       if(err){
           console.log(err);
       }else{
           res.render("campgrounds/index",{campgrounds:allCampgrounds});
       }
   });
        
    
});

//Create-add new campground to DB
router.post("/",middleware.isLoggedIn,function(req,res){
    //get data from form and add to array
    var name=req.body.name;
    var image=req.body.image;
    var price=req.body.price;
    var desc=req.body.description;
    var author={
        id:req.user._id,
        username:req.user.username
    }
    var newCampground={name:name,image:image,price:price,description:desc,author:author};

    //Create a new campground and save to db
    Campground.create(newCampground,function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            //Redirect
            console.log(newlyCreated);
             res.redirect("/campgrounds");
        }
    });
   
});

//New -show form to create new campground
router.get("/new",middleware.isLoggedIn,function(req, res) {
    res.render("campgrounds/new");
});

//Show- show more info about one campground
router.get("/:id",function(req, res) {
    //find the campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log("hi");
            console.log(err);
        }else{
            //show the info
            res.render("campgrounds/show",{campground:foundCampground});
        }
    });
    
});

//Edit campground route
router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
        Campground.findById(req.params.id,function(err,foundCampground){
                res.render("campgrounds/edit",{campground:foundCampground});
            });
});

//Update route
router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){
    //find and update correct campground
    Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updatedCampground){
    if(err){
        res.redirect("/campgrounds");
    }else{
        res.redirect("/campgrounds/"+req.params.id);
    }
    });
    //redirect somewhere
});

//Destroy campground routes
router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
   Campground.findByIdAndRemove(req.params.id,function(err){
       if(err){
           res.redirect("/campgrounds");
       }else{
           res.redirect("/campgrounds");
       }
   });
});






module.exports=router;