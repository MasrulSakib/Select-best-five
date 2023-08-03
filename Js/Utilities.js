// inner card and select any five function

function replaceTheTexts(events) {
    let totalClickedButtons = 1;
    if (events.target.tagName === 'BUTTON' && totalClickedButtons < 5) {

        const h3Element = events.target.closest('.text-center').querySelector('h3');
        const h3InnerText = h3Element.innerText;

        // Create a new <li> element
        const listContainer = document.querySelectorAll('#list-Container ul')
        const listItem = document.createElement('li');
        listItem.textContent = h3InnerText;

        // Append the <li> element to the list
        const appendedItems = document.getElementById('list-Container').appendChild(listItem);
        events.target.disabled = true;
        const buttonClr = events.target;
        buttonClr.style.background = 'red';

        totalClickedButtons++;
        const totalLiItems = document.getElementById('list-Container').getElementsByTagName('li').length;
        if (totalLiItems >= 5) {
            // Disable all buttons on all cards
            const buttons = document.querySelectorAll('#inner-btn');
            for (const button of buttons) {
                if (!button.disabled) {
                    button.disabled = true;
                }
            }
            alert('This is last button you can select. You can not select more than 5')
        }
    }
}

// side panal calculation part

function sidePanalCal(events) {

    const perHeroPower = document.getElementById('per-hero-power');
    const heroPowerlevelStr = perHeroPower.value;

    if (isNaN(heroPowerlevelStr)) {
        alert('Please input currect type of number')
        perHeroPower.value = '';
    }

    else {
        const liItems = document.getElementById('list-Container').getElementsByTagName('li').length;
        const heroPowerlevel = parseFloat(heroPowerlevelStr);
        const powerCalculate = heroPowerlevel * liItems;

        const totalPower = document.getElementById('total-power');
        totalPower.innerText = powerCalculate;
    }
}



function totalPowerLvl() {

    const captainsField = document.getElementById('captain-pwr');
    const captainPowerStr = captainsField.value;
    const captainPower = parseFloat(captainPowerStr);

    const managerField = document.getElementById('manager-pwr');
    const managerPowerStr = managerField.value;
    const managerPower = parseFloat(managerPowerStr);

    if (isNaN(captainPower) && isNaN(managerPower)) {

        alert('Please input currect type of number')
        managerField.value = '';
        captainsField.value = '';
    }

    else {


        const totalPower = document.getElementById('total-power');
        const totalPowerTextStr = totalPower.innerText;
        const totalPowerText = parseFloat(totalPowerTextStr);

        const grandTotalCalculation = captainPower + managerPower + totalPowerText;

        const totalText = document.getElementById('total-text');
        totalText.innerText = grandTotalCalculation;
    }
}
