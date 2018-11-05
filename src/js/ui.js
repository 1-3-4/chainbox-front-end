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
                postTitle: document.getElementById(domStrings.postTitleID).value,
                postAuthorID: domStrings.postAuthorSelection[domStrings.postAuthorSelection.selectedIndex].id.slice( 7 ),
                postContent: document.getElementById(domStrings.postContentID).value,
                postImgURL: document.getElementById(domStrings.postImgID).value
            };
        }

    }
}) ();