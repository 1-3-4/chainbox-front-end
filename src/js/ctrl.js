console.log('Controller module loaded.');

var ctrl = ( function () {
    // PRIVATE FUNCTION(S)
    var ctrlAddAuthorSelection = async function () {
        var users;
        // Get user data:
        users = await dataCtrl.getUsers();
        // Add user names to UI:
        uiCtrl.addAuthorSelection( users );
    };

    // PUBLIC FUNCTION(S)
    return {
        init: function () {

            ctrlAddAuthorSelection();

        }
    }
}) ();

ctrl.init();
