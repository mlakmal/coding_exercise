this is application shows list of users and allow to edit each user data.
user has following attributes
    firstname
    lastname
    dob
    username
    id

component details
angular app consist of 2 modules and following are the file details for each
    mainModule
        mainConfig - constains module configure and run blocks
        services/routeHlpr - contains angular route definitions
        controllers/mainCtrl - contains main controller used for all the page routes
    usersModule
        directives/userListDir - list of users allow to click edit on each user row.
        directives/addUpdUserDir - used for updating single user
        services/usersHlpr - helper component to retrieve json data and other helper functions

exercise

update the userListDir file to show the list of users using users/jsons/userList.json file thorugh $http.
show the firstname, lastname, dob, username.
change cexUsersHlpr.getUsersFromApi function to retrieve json data throgh $http
update unit tests in userListDir.spec.js file to mock cexUsersHlpr.getUsersFromApi function.

add new angular route "user" to integrate users/directives/addUpdUserDir directive. reference how users route is setup (main/services/routeHlpr) with users.html. 
Ex: you will have to create new route html simillar to users.html for this new route,

change addUpdUserDir file to look for url parameter "userId" and call the cexUsersHlpr.getUser function to retrieve the user data for given userId value from url parameter. hint: $routeParams
update users/views/addUpdUser.html to show html input validation errors using ngMessages angular directive. (Ref: https://docs.angularjs.org/api/ngMessages/directive/ngMessages for example on how to do this.)
add code to submit form data using vm.handleSubmit function.
    only allow submit function to proceed if form input elements are valid.
    use cexUsersHlpr.submitUser to handle the http POST request to users/jsons/addUpdUser.json
    handle the submit request response properly and show success/fail message accordingly on UI.
write unit tests for mock userId url parameter using routeParams and also mock cexUsersHlpr.getUser function to load user data when userId url param available. 

if time permits, update the html/css to nicely layout the content.
            