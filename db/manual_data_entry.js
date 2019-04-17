import {registerUser, getUserData, registerAdmin, getAdminData, 
    registerBusiness, getBusinessData, getBusinessWithID, addReviewToDatabase,
     getReviewData} from '../db/firebase'

// Use this file to add data to the database correctly.

// function registerBusiness(business_id, name, reviews, owner, picture_ids, description, location, email, information, control_number) 

registerBusiness('1', 'Burger King', [], 'Jeff Kim', [], "A very fine establishment for culinary cusine.", {}, "jkim@gmail.com", "more information.....", 1, '', '', 3);
registerBusiness('2', 'McDonalds', [], 'John Smith', [], "Fast Food for those in need", {}, "jsmith@gmail.com", "more information.....", 2, '', '', 3);
registerBusiness('3', 'Taco Bell', [], 'Jared dopper', [], "Authentic Mexican Food", {}, "jdopper@gmail.com", "more information.....", 3, '', '', 3);
registerBusiness('4', 'Wendys', [], 'Jessica Upwork', [], "Authentic Cuban Food", {}, "Jupwork@gmail.com", "more information.....", 4 , '', '', 3);

registerBusiness(
    '5',
    'Bob\'s Burgers',
    ['1'],
    'Jessica Upwork',
    [],
    "Pretty okay burgers",
    {},
    "Jupwork@gmail.com",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo lacus. Integer in laoreet mauris, ac sagittis dolor. Morbi vel gravida lacus, id hendrerit nibh. Sed vel maximus ligula, tincidunt faucibus felis. Ut dictum egestas suscipit. Proin nulla turpis, luctus id auctor vitae, blandit ut urna. Donec eu viverra orci. Cras in rutrum urna. Duis et odio justo. Fusce efficitur eleifend mauris non ullamcorper. Aliquam auctor libero a eros mollis, sit amet facilisis lorem suscipit. Ut ut quam erat. Integer consequat imperdiet dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam rhoncus, nunc.",
    4,
    '4 State St.',
    'Smryna, GA 33222',
    3.5);


// function addReviewToDatabase(review_id, review_content, user_id, business_id, date)
addReviewToDatabase(
    '1',
    'Cras malesuada lacus vitae condimentum rutrum. Etiam urna nibh, pellentesque vel gravida in, fermentum ut nisl. Donec efficitur consequat viverra.',
    'default@default-com',
    '5',
    1554077657,
    4);