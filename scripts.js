document.addEventListener("DOMContentLoaded",function()
{
    const button = document.getElementById("photosBtn");
    button.addEventListener("click", function()
{
    window.location.href = "photos.html";
})
})

document.addEventListener("DOMContentLoaded",function()
{
    const button = document.getElementById("homeBtn");
    button.addEventListener("click", function()
{
    window.location.href = "index.html";
})
})

function openEdi()
{
    window.open("edi.html")
}

function openWaterfall()
{
    var width = window.innerWidth;
    var height = window.innerHeight * 2;

    // Calculate the position to center the popup
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    // Open the popup with the calculated dimensions and position
    window.open('waterfall.html');
}

function openArbroath()
{
    var width = window.innerWidth;
    var height = window.innerHeight * 2;

    // Calculate the position to center the popup
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    // Open the popup with the calculated dimensions and position
    window.open('arbroath.html');
}

function openStonehaven()
{
    var width = window.innerWidth * 0.9;
    var height = window.innerHeight * 0.9   ;

    // Calculate the position to center the popup
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    // Open the popup with the calculated dimensions and position
    window.open('stonehaven.html');
}

function openHazelhead()
{
    var width = window.innerWidth * 0.9;
    var height = window.innerHeight * 0.9   ;

    // Calculate the position to center the popup
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    // Open the popup with the calculated dimensions and position
    window.open('hazelhead.html');
}

function openFaves()
{
    window.open("faves.html");
}

function photoGallery()
{
    window.location.href = "photos.html";
}
