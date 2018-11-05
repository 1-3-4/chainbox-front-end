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
    }

    // VARIABLE(S)
    var apiHost = 'https://localhost:44321/api/';
    var api = {
        users: apiHost + 'userinfoes',
        posts: apiHost + 'posts',
        comments: apiHost + 'comments'
    }

    // PRIVATE FUNCTION(S)
    var getJSON = function ( src ) {
        return fetch( src )
            .then( function ( response ) {
                return response.json();
            } )
        ;
    };

    // PUBLIC FUNCTION(S)
    return {
        getUsers: function () {
            var users = [];
            return getJSON( api.users )
                .then( function ( json ) {
                    json.forEach( user => {
                        var user = new User(
                            user.userInfoID,
                            user.name,
                            user.username,
                            user.profilePictureURL,
                            user.numberOfPosts,
                            user.numberOfComments,
                            user.registerDate
                        );
                        users.push( user );
                    } );
                    return users;
                })
            ;
        },
        getPosts: function () {},
        getComments: function () {},
        testing: function functionName() {

        }
    };
}) ();
