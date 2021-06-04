let container = $('.container');
let timeOfDay = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
let hero = $('.jumbotron');

//time element                     
let elTime = moment().format('llll');
hero.append(elTime);


//for loop to loop through the hours in the work day
for (let i = 0; i < timeOfDay.length; i++) {


    //Variable for hours in the work day
    let time = timeOfDay[i];

    //hours section
    let elSection = $('<section>').addClass('row rounded align-items-center');
    let elHour = $('<div>').addClass('time-block col text-center');
    elHour.text(time);
    elSection.append(elHour);

    //text input area
    let elInput = $('<div>').addClass('col-lg-6 col text-center');
    let input = $('<textarea>');
    $(this).attr('cols', '50')
    input.attr('id', time);
    elInput.append(input);
    elSection.append(elInput);
    let eventText = localStorage.getItem(time);
    input.val(eventText);

    //save button
    let elSave = $('<div>').addClass('col-lg-1 col text-center align-items-center');
    let saveBtn = $('<button>').addClass('saveBtn');
    saveBtn.attr('date-time', time);
    saveBtn.text('💾');
    elSave.append(saveBtn);
    elSection.append(elSave);
    container.append(elSection);

    //text input to local storage
    saveBtn.on("click", function () {
        localStorage.setItem(time, input.val())
    });

    //past, present, and future
    let currentHour = moment().hour();
    let number = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    if (currentHour === number[i]) {
        elSection.css('background-color', '#d3d3d3'); //present
    } else if (currentHour < number[i]) {
        elSection.css('background-color', '#77dd77'); //future
    } else if (currentHour > number[i]) {
        elSection.css('background-color', '#ff6961'); //past
    }

}