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
        // Validate data:

        // Create post object:
        var post = dataCtrl.createPost( postData );
        // Add post object to DB:
        // Display success message:
        // Clear UI input fields:
        uiCtrl.clearPostInputs();
    };

    // PUBLIC FUNCTION(S)
    return {
        init: function () {

            // setupAuthorSelection();

            var dom = uiCtrl.getDomStrings();
            document.getElementById(dom.postBtnID).addEventListener( 'click', ctrlAddPost );

        }
    }
}) ();

ctrl.init();
