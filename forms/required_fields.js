// This is an example of how to add an additional required field to a form.

// Assuming that jQuery exists:
var $default_value = jQuery('form[name="formtrade_in"] #required_fields').val();
jQuery('form[name="formtrade_in"] #required_fields').val( $default_value + ',vin' );
