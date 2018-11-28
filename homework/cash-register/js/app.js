/*
  User Flow:
  1: User enters numerical value into #newEntry
  2: User pushes enter key (submits the form)
  3: A <div> containg the value from #newEntry is appended to #entries
  3: #total is updated to reflect the sum of all the values within #entries

  Instructions:
  1: Add a .submit event to #entry - this event should call a function called handleSubmit
  2. Create a function named handleSubmit; this function should:
  3: Prevent the default submit event
  4: Declare a variable, newEntry, and assign it to the value in #newEntry
  5: Use parseInt() to transform newEntry from a string to a number HINT: newEntry = parseInt(newEntry)
  6: Append a <div> to #entries containing newEntry HINT: Use .append('<div>' + newEntry + '</div>')
  7: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
  8: Empty the input in #newEntry (clear it out)
*/

var total = 0

$('#entry').submit(handleSubmit)

function handleSubmit (event) {
  event.preventDefault()

  var newEntry = $('#newEntry').val()  
  newEntry = parseInt(newEntry) 

  $('#entries').append('<div>' + newEntry + '</div>')

  total = total + newEntry
  $('#total').html(total)

  $('#newEntry').val('')

}

