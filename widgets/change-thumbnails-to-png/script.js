/* The API has not publicly exposed this feature yet. */
/* In order to have the thumbnails with transparent backgrounds they must change from JPG to PNG. */
jQuery( 'span.vrs-widget-thumbnail img' ).attr( 'src' , function( index , attr ) {
    return attr.replace( 'jpg' , 'png' );
});
