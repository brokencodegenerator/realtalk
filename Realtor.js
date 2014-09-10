start = function(){
  $('#multiButton').click(function () {
       $('#surveyCreation').append(
           '<div class="form-group"><input id=questionId name=questionName type="text" placeholder="Enter a question?" class="form-control input-md"><ul><li><input class="form-control input-md"></input></li><li><input class="form-control input-md"></input></li><li><input class="form-control input-md"></input></li><li><input class="form-control input-md"></input></li></ul></div>');
});

$('#yesNoButton').click(function () {
    $('#surveyCreation').append('<div class="form-group"><input id=questionId name=questionName type="text" placeholder="Enter a question?" class="form-control input-md"><div id="radioDiv"><input type="radio" id="radio1" name="radio"><label for="radio1">Yes</label><input type="radio" id="radio2" name="radio" checked="checked"><label for="radio2">No</label></div>');
    $('#radioDiv').buttonset();
});

$('#checkBoxButton').click(function () {
    $('#surveyCreation').append('<div class="form-group"><input id=questionId name=questionName type="text" placeholder="Enter a question?" class="form-control input-md"><div><input id="sm" type="checkbox"/><input class="form-control input-md"></input><div><input id="sm" type="checkbox"/><input class="form-control input-md"></input><div><input id="sm" type="checkbox"/><input class="form-control input-md"></input><div><input id="sm" type="checkbox"/><input class="form-control input-md"></input><div><input id="sm" type="checkbox"/><input class="form-control input-md"></input><div><input id="sm" type="checkbox"/><input class="form-control input-md"></input>');
    $('#checkBoxDiv').buttonset();
});

$('#sliderButton').click(function () {
    $('#surveyCreation').append('<div class="form-group"><input id=questionId name=questionName type="text" placeholder="Enter a question?" class="form-control input-md"></p><div id="basicSlider"></div><p><label for="amount">Amount:</label><input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">');
    $('#basicSlider').slider({
        min:0,
        max:10,
        Value: 5,
        slide: function( event, ui) {
            $('#amount').val($('#basicSlider').slider('values', 0));
        }});
});

$('#commentButton').click(function () {
    $('#surveyCreation').append('<div class="form-group"><input id=questionId name=questionName type="text" placeholder="Enter a question?" class="form-control input-md"><div id="commentDiv"><textarea class="form-control"></textarea></div>');
});


var checkboxApp = (function( $ ) {   
    $.widget( "app.checkbox", {
        _create: function() {
            // Call the default widget constructor first.            
            this._super();

            this.element.addClass( "ui-helper-hidden-accessible" );
            this.button = $( "<button/>" ).insertAfter( this.element );
            this.button.addClass( "ui-checkbox" )
                       .text( "checkbox" )
                       .button({
                           text: false,
                           icons: { 
                               primary: "ui-icon-blank"
                           },
                           create: function( e, ui ) {
                               $( this ).removeAttr( "title" ); 
                           }
                       });

            this._on( this.button, {
                click: function( e ) {
                    this.element.prop( "checked", !this.element.is( ":checked" ) );
                    this.refresh();
                }
            });
            this.refresh();  
        },
        _destroy: function() {
           
            this._super();
            this.element.removeClass( "ui-helper-hidden-accessible" );
            this.button.button( "destroy" ).remove();
        },
        refresh: function() {
            this.button.button( "option", "icons", {
                primary: this.element.is( ":checked" ) ?
                "ui-icon-check" : "ui-icon-blank"
            });
        }
    });
    $(function() {
        $( "input[type='checkbox']" ).checkbox();
    });
})( jQuery );
}
