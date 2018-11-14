$('#clickme').click(handleClick)

function handleClick() {
    
    var newItem = $('#item').val()

   
    if (newItem.length === 0) {
        alert('You must enter a value!')
    } else {
        
        appendItem(newItem)

        $('#item')
            .focus()
            .val('')
    }
}

function appendItem(item) {
    $('#list').append('<li>' + item + '</li>')
}

$(document).on('click', 'li', handleRemove)

function handleRemove() {
    $(this).remove() 
