const color_picker = $('#colorPicker');

// Select size input
const row_input = $('#inputHeight') ;
const column_input = $('#inputWidth');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(event){
    event.preventDefault();
    makeGrid();
});


// Coloring listener
$('.cell').on('click', function(){
    let color = color_picker.val();
    $(this).css('background-color', color);
});


function makeGrid() {
    let row_count = row_input.val();
    let column_count = column_input.val();

    // $('#pixelCanvas').innerHTML = '';

    var content = '';

    for (let i=0; i < row_count; i++){
        content += '<tr>';
        for(j=0; j < column_count ;j++){
            content += '<td class="cell"></td>';
        }
        content+= '</tr>';
    }
    $('#pixelCanvas').append(content);
}
