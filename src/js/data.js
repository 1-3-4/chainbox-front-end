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
    var Post = function ( id, title, content, imageUrl, dateOfPost, postingUserID, postingUser) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.dateOfPost = dateOfPost;
        this.postingUserID = postingUserID;
        this.postingUser = postingUser;
    };

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
    var apiFetch = async function ( apiSrc , method, dataStr ) {
        const res = await fetch( apiSrc, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: dataStr
        } );
        const content = await res.json();
        console.log( content );
    };
    var createPost = function ( title, authorID, content, url ) {
        // Create date for post object:
        const date = new Date();
        const dateOfPost = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + 'T00:00:00';

        var post = new Post(
            null, // id
            title, // title
            content, // content
            url, // imageUrl
            dateOfPost, // dateOfPost
            authorID, // postingUserID
            null // postingUser
        );

        return post;
    };

    // PUBLIC FUNCTION(S)
    return {
        addPost: function ( title, authorID, content, url ) {
            // Create a full post obj from data provided in the argument obj:
            let post = createPost( title, authorID, content, url );
            // Remove unused properties from post object:
            delete post.id;
            delete post.postingUser;
            // Turn JS object into JSON string:
            var postJSONstr = JSON.stringify( post );
            // Send JSON string to DB:
            apiFetch( api.posts, 'POST', postJSONstr );
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
    };
}) ();
