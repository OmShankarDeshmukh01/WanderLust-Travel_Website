const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listing.js");//initializ the listing from models folder
const {isLoggedIn , isOwner ,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });



router.route("/")
//Index Route
.get(wrapAsync (listingController.index))
 //Create Route
.post(isLoggedIn  ,upload.single("listing[image]") , validateListing, wrapAsync (listingController.createListing));


 
 //New Route
 router.get("/new" , isLoggedIn ,listingController.renderNewForm);


 
router.route("/:id")
//show route
.get( wrapAsync (listingController.showListing))
//update route
.put( isLoggedIn,isOwner ,upload.single("listing[image]"), validateListing,wrapAsync (listingController.updateListing))
//delete route
.delete( isLoggedIn ,isOwner,wrapAsync (listingController.destroyListing));

 

 //Edit Route
 router.get("/:id/edit", isLoggedIn,isOwner ,wrapAsync (listingController.renderEditForm));



module.exports = router;