document.getElementById('select-btn-type').addEventListener('click', function (events) {
    replaceTheTexts(events)

})



function replaceTheTexts(events) {
    let totalClickedButtons = 1;
    if (events.target.tagName === 'BUTTON' && totalClickedButtons < 5) {

        const h3Element = events.target.closest('.text-center').querySelector('h3');
        const h3InnerText = h3Element.innerText;
        console.log(events.target)


        // Create a new <li> element
        const listContainer = document.querySelectorAll('#list-Container ul')
        const listItem = document.createElement('li');
        // listItem.classList.add('text-gray-500 list-decimal text-lg inside-top-font p-5');

        // Set the inner text of the <li> element to the inner text of the <h3> element
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
            const buttons = document.getElementsByTagName('button');
            for (const button of buttons) {
                if (!button.disabled) {
                    button.disabled = true;
                }
            }
            alert('This is last button you can select. You can not select more than 5')
        }
    }
}
