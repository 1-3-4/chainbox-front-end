console.log('Controller module loaded.');

var ctrl = ( function () {
    // PRIVATE FUNCTION(S)
    var setupAuthorSelection = async function () {
        var users;
        // Get user data:
        users = await dataCtrl.getUsers();
        // Add user names to UI:
        uiCtrl.addAuthorSelection( users );
    };
    var ctrlAddPost = function () {
        // Get data from UI:
        var postData = uiCtrl.getPostInput();
        alert(postData.postTitle + ' ' + postData.postAuthorID + ' ' + postData.postContent + ' ' + postData.postImgURL);
        // Validate data:
        // Create post object:

        var post = new Post(
            null,
            postData.postTitle,
            postData.postContent,
            postData.postImgURL,
            dateOfPost,
            postData.postAuthorID,
            []
        );
        // Add post object to DB:
        // Display success message:
        // Clear UI input fields:
    };

    // PUBLIC FUNCTION(S)
    return {
        init: function () {

            setupAuthorSelection();

            var dom = uiCtrl.getDomStrings();
            document.getElementById(dom.postBtnID).addEventListener( 'click', ctrlAddPost );

            var date = new Date();
            var y = date.getFullYear();
            var m = date.getMonth();
            var d = date.getDate();
            const dateOfPost = y + '-' + m + '-' + d;
            alert(dateOfPost);

        }
    }
}) ();

ctrl.init();
