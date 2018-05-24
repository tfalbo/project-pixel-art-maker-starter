// Select color input
var color = $("#inputColorPicker").val();

// Select size input
var height = $("#inputHeight").val();
var width = $("#inputWidth").val();;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").on('submit', makeGrid());

function makeGrid() {
// Your code goes here!
    var content = '';
    for (i=0; i < height; i++){
        content += '<tr>';
        for(j=0; j < width;j++){
            content += '<td class=".cell"></td>';
        }
        content+= '</tr>';
    }
    $('#pixelCanvas').append(content);
}
