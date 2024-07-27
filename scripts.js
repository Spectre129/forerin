document.addEventListener("DOMContentLoaded",function()
{
    const button = document.getElementById("photosBtn");
    button.addEventListener("click", function()
{
    window.location.href = "photos.html";
})
})

function openEdi()
{
    var width = window.innerWidth * 0.9;
    var height = window.innerHeight * 0.9   ;

    // Calculate the position to center the popup
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    // Open the popup with the calculated dimensions and position
    window.open('edi.html', 'Popup', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);
}