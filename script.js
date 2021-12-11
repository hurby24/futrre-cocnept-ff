function appearP1() { 
    var loader = document.getElementById('loader');
    var page1 = document.getElementById('about');
    var page2 = document.getElementById('home');
    var page3 = document.getElementById('contact');
    loader.style.top = "0";
    setTimeout(function() { 
        loader.style.top = "-100%";
        page1.style.display = "block";
        page3.style.display = "none";
        page2.style.display = "none";
     }, 1500)
 }

 function appearP2() { 
    var loader = document.getElementById('loader');
    var page1 = document.getElementById('about');
    var page2 = document.getElementById('home');
    var page3 = document.getElementById('contact');
    loader.style.top = "0";
    setTimeout(function() { 
        loader.style.top = "-100%";
        page2.style.display = "block";
        page1.style.display = "none";
        page3.style.display = "none";
     }, 1500)
 }
 
 function appearP3() { 
    var loader = document.getElementById('loader');
    var page1 = document.getElementById('about');
    var page2 = document.getElementById('home');
    var page3 = document.getElementById('contact');
    loader.style.top = "0";
    setTimeout(function() { 
        loader.style.top = "-100%";
        page3.style.display = "block";
        page1.style.display = "none";
        page2.style.display = "none";
     }, 1500)
 }