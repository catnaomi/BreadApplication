import {registerUser, getUserData, registerAdmin, getAdminData, 
    registerBusiness, getBusinessData, getBusinessWithID, addReviewToDatabase,
     getReviewData} from '../db/firebase'

// Use this file to add data to the database correctly.

// function registerBusiness(business_id, name, reviews, owner, picture_ids, description, location, email, information, control_number) 
registerBusiness('1', 'Burger King', {}, 'Jeff Kim', [], "A very fine establishment for culinary cusine.", {}, "jkim@gmail.com", "more information.....", 1)
registerBusiness('1', 'McDonalds', {}, 'John Smith', [], "Fast Food for those in need", {}, "jsmith@gmail.com", "more information.....", 2)
registerBusiness('1', 'Taco Bell', {}, 'Jared dopper', [], "Authentic Mexican Food", {}, "jdopper@gmail.com", "more information.....", 3)
registerBusiness('1', 'Wendys', {}, 'Jessica Upwork', [], "Authentic Cuban Food", {}, "Jupwork@gmail.com", "more information.....", 4)