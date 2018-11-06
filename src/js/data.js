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
    };
    var Post = function ( id, title, content, imageUrl, dateOfPost, postingUserID, user) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.dateOfPost = dateOfPost;
        this.postingUserID = postingUserID;
        this.user = user;
    };

    // VARIABLE(S)
    var apiHost = 'https://localhost:44321/api/';
    var api = {
        users: apiHost + 'userinfoes',
        // posts: apiHost + 'posts',
        posts: 'https://ghibliapi.herokuapp.com/films',
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
        createPost: function ( obj ) {
            // ??? Does the DB add the date by itself? Just like it generates an unique id.
            // Create date for post object:
            const date = new Date();
            const dateOfPost = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

            var post = new Post(
                null, // id
                obj.postTitle, // title
                obj.postContent, // content
                obj.postImgURL, // imageUrl
                dateOfPost, // dateOfPost
                obj.postAuthorID, // postingUserID
                // !!! Create a function to get a user based on their id.
                [] // user
            );

            return post;
        },
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
        // !!!
        testing: function functionName() {

        }
    };
}) ();
