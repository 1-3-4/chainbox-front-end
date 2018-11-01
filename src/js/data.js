console.log('Data module loaded.');

var dataCtrl = ( function () {

    // CLASS(ES)
    var User = function ( id, name, username, profilePictureURL, numberOfPosts, numberOfComments, registerDate, posts, comments ) {
        this.id = id; // int
        this.name = name; // string
        this.username = username; // string
        this.profilePictureURL = profilePictureURL; // string
        this.numberOfPosts = numberOfPosts; // int
        this.numberOfComments = numberOfComments // int
        this.registerDate = registerDate; // datetime2fromparts ???
        this.posts = posts; // array
        this.comments = comments; // array
    }

    // VARIABLE(S)
    var data = {
        json: {
            users: []
        }
    };
    var apiHost = 'https://localhost:44321/api/';
    var apiPaths = {
        users: apiHost + 'userinfoes',
        posts: apiHost + 'posts',
        comments: apiHost + 'comments'
    }

    // PRIVATE FUNCTION(S)
    var request = function ( apiPath, callback ) {
        var req = new XMLHttpRequest();
        req.open( 'GET', apiPath );
        req.onload = callback;
        req.send();
    }
    // var request = function ( apiPath ) {
    //     // Create a new XMLHttpRequest object:
    //     var req = new XMLHttpRequest();
    //     // Open connection to API using GET request on URL endpoint:
    //     req.open( 'GET', apiPath, true );
    //     // Access and process JSON data: ???
    //     req.onload = function () {
    //         var json = JSON.parse( this.response );
    //         json.forEach( user => {
    //             // data.users.push( user.name );
    //             var u = new User(
    //                 user.id,
    //                 user.name,
    //                 user.username,
    //                 user.profilePictureURL,
    //                 user.numberOfPosts,
    //                 user.numberOfComments,
    //                 user.registerDate,
    //                 user.posts,
    //                 user.comments );
    //             data.users.push(u);
    //         } );
    //     };
    //     // Send request:
    //     req.send();
    //     return this.responseText;
    // };

    // PUBLIC FUNCTION(S)
    return {
        getUsers: function () { return data.users; },
        getPosts: function () {},
        getComments: function () {},
        testing: function functionName() {
            var requestedJSON = request(
                apiPaths.users,
                function () {
                    data.json.users = this.response;
                }
            );
            console.log(requestedJSON);
            console.log(data);
        }
    };
}) ();
