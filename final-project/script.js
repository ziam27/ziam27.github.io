$('#clickme').click(handleClick)

var answers = []

function handleClick(event) {
    event.preventDefault()
    
    var newItem = $('#item').val()

   
    if (newItem.length === 0) {
        alert('Enter one of your choices, fool. ')
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


/*
function reloadPage() {
    $('#clear-entry').reload();
}

    /*$('#reveal').html('randomElement')


   /* 8 (ctn): update #total element
    $('#total').html('$' + total)

    // 9: clear #newEntry
    $('#newEntry').val('')


<img src="https://vignette.wikia.nocookie.net/nation/images/2/2e/Book_icon.png/revision/latest?cb=20090517180732" alt="book"> 

    <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/82812-200.png" alt="food"> 

    <img src="https://melbournechapter.net/images/old-clipart-tv-icon-9.png" alt="tv">

    */
