var App = angular.module("App", []);

App.factory("mediaFactory", function(){

    var users=[{Name:"Lova",UserName:"lovabus",Password:"lovabus12"},
               {Name:"Anneli",UserName:"anneliaberg",Password:"anneli79"},
               {Name:"Malin",UserName:"systeryster",Password:"malinsjo81"},
               {Name:"Emma",UserName:"lillstrumpan",Password:"emmasjo91"},
               {Name:"Noel",UserName:"noelbus",Password:"noelbus14"}];

    var movies=[{Title:"Prison Break",Year:"2009"},
                {Title:"Titanic",Year:"1997"},
                {Title:"Bridge of Spies",Year:"2015"},
                {Title:"Hitta Doris",Year:"2016"},
                {Title:"En Man Som Heter Ove",Year:"2016"},
                {Title:"G.I Jane",Year:"1997"},
                {Title:"Andarnas Hus",Year:"1993"},
                {Title:"Transformers",Year:"2007"},
                {Title:"Top Gun",Year:"1986"},
                {Title:"Armageddon",Year:"1998"},
                {Title:"Pearl Harbour",Year:"2001"}];

    var factory = {};

    factory.GetAllMovies = function(){
        return movies;
    };

factory.checkUserinArray=function(username,password){

        validateLogin(username,password,users).then(function(){
            console.log(username)
            $("#showMessage").html("succefully logged in");
            
        },function(){
             $("#showMessage").html("The combination of user and password did not match. Please try again!");
            
        });
        
    }

function validateLogin(usernameToCheck,passwordToCheck, users){
    console.log("inne i metoden");
    var dfd=$.Deferred();
    var userNameExist=false;

    for(var i=0;i<users.length;i++)
    {
        console.log("loopen")
        user=users[i];
        if(user.UserName===usernameToCheck.UserName && user.Password===passwordToCheck.Password)
        {
            userNameExist=true;
        }

    }
    console.log(userNameExist)
    if(userNameExist===false)
    {
        console.log("reject");       
        dfd.reject();
        
    }else{
        console.log("resolve");
        dfd.resolve();
        
    }
    return dfd.promise();
}

// factory.checkForRememberedUser=function(){
//     getRememberedUser().then(function(user){
//         console.log("inne i metoden checkremembered")
//         $scope.loginUserName=user.UserName;
//         $scope.loginPassword=user.Password;
//         $scope.loginRememberMe=true;
//     },function(){
//         console.log("Failed to fetching the remembered user");
//     })
// }

// function getRememberedUser(){
//     var dfd=$.Deferred();
//     var userToRemember=false;
//     for(var i=0;i<users.length;i++)
//     {
//         user=users[i];
//         if(user.UserName===localStorage.getItem("userToBeRemembered"))
//         {
//             userToRemember=true;
//         }
//     }
//     if(userToRemember===false)
//     {
//         console.log(userToRemember)
//         dfd.reject();
//     }else{
//         console.log(userToRemember)        
//         dfd.resolve();
//     }
//     return dfd.promise();
// }


    return factory;

});

var controllers = {};

controllers.mediaLibraryController = function($scope, mediaFactory){
    $scope.AllMovies = mediaFactory.GetAllMovies();
    
    if(localStorage.getItem("checkbox")===true)
    {
    $scope.loginUserName = localStorage.getItem("username");
    $scope.loginPassword = localStorage.getItem("password");
    }
    
    $scope.login=function(){
        mediaFactory.checkUserinArray($scope.loginUserName, $scope.loginPassword);
        localStorage.setItem("username1",$scope.loginUserName);
        if ($scope.loginRememberMe===true) {
                    localStorage.setItem("checkbox",$scope.loginRememberMe);
                    localStorage.setItem("username",$scope.loginUserName);
                    localStorage.setItem("password",$scope.loginPassword);
                 }//else{
                //     localStorage.removeItem("checkbox");
                //     localStorage.removeItem("username");
                //     localStorage.removeItem("password");
                //     //localStorage.setItem("username",$scope.loginUserName);
                    
                // }

        
        //mediaFactory.checkForRememberedUser();
        window.location.href="JulLabb3Library.html";
            
    };

    $scope.getUserLogIn=function(){
        
        var usernameLoggedIn=localStorage.getItem("username1");
        return usernameLoggedIn;
    }
};

App.controller(controllers);