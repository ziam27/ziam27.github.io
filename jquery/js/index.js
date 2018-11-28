$('document').ready(function() {
	var options = { videoId: 'iGpuQ0ioPrM', start: 3 };
	$('#wrapper').tubular(options);

};

$('#clickme').click(handleClick)

var answers = []

function handleClick(event) {
    event.preventDefault()
    
    var newItem = $('#item').val()

   
    if (newItem.length === 0) {
        alert('Enter one of your choices,fool ')
    } else {
        // Add new item to array
        answers.push(newItem)

        console.log(answers)

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
}

$('#randomise').click(getRandomElement)

function getRandomElement() {
    var randomNum = Math.floor(Math.random() * answers.length)
    var randomElement = answers[randomNum]
    console.log(answers[randomNum])

    // insert randomElement into HTML
    $('#final').append('<h4>' + randomElement + '</h4>')
    // $('#randomise').attr('disabled', true)
    $('#randomise').hide()
}


