console.log('Data module loaded.');

var dataCtrl = ( function () {

    // Classes
    var Author = function ( id, name ) {
        this.id = id; // int
        this.name = name; // string
    }

    // Variables
    var data = {
        authors: []
    };

    // Public functions:
    return {
        getAuthors: function () {

        }
    };
}) ();
