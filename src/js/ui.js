console.log('UI module loaded.');

var uiCtrl = ( function () {
    // VARIABLE(S)
    var domStrings = {
        authorSelection: 'post__author' // id
    };
    // PUBLIC FUNCTION(S)
    return {
        addAuthorSelection: function ( arr ) {
            arr.forEach( user => {
                var html = '<option id="author_' + user.id + '">' + user.name + '</option">';
                document.getElementById(domStrings.authorSelection).insertAdjacentHTML( 'beforeend', html );
            });
        }
    }
}) ();
