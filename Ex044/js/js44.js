var x = 0
var mytime = setTimeout(function callback () {
  console.log('O X e o =', x);
  
    
}, 1500);

 x = 0
if (x > 0) {
    clearTimeout(mytime)
    console.log('O x passou de 0')
}

var myinter = setInterval ( function interval() {

    console.log('OLA')
  
        if( x >= 5 ){
            clearInterval(myinter)
            console.log('O passou de  0')
            

        }
           x++;
},2000)
var x = 0
     

 