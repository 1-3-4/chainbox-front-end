console.log('UI module loaded.');

var uiCtrl = ( function () {
    // VARIABLE(S)
    var domStrings = {
        postTitleID: 'post__title',
        postAuthorSelectionID: 'post__author',
        postContentID: 'post__content',
        postImgID: 'post__img',
        postBtnID: 'post__btn',

        postAuthorSelection: document.getElementById('post__author')
    };
    // PUBLIC FUNCTION(S)
    return {
        getDomStrings: function () {
            return domStrings;
        },
        addAuthorSelection: function ( arr ) {
            arr.forEach( user => {
                var html = '<option id="author_' + user.id + '">' + user.name + '</option">';
                document.getElementById(domStrings.postAuthorSelectionID).insertAdjacentHTML( 'beforeend', html );
            });
        },
        getPostInput: function () {
            return {
                title: document.getElementById(domStrings.postTitleID).value,
                authorID: domStrings.postAuthorSelection[domStrings.postAuthorSelection.selectedIndex].id.slice( 7 ),
                content: document.getElementById(domStrings.postContentID).value,
                imgURL: document.getElementById(domStrings.postImgID).value
            };
        },
        clearPostInputs: function () {
            var fieldsArray = new Array(
                document.getElementById( domStrings.postTitleID ),
                document.getElementById( domStrings.postContentID ),
                document.getElementById( domStrings.postImgID )
            );
            fieldsArray.forEach( function ( currentElement ) {
                currentElement.value = '';
            } );
            domStrings.postAuthorSelection.selectedIndex = 0;
        }
    }
}) ();
