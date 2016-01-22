/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-22 10:02:35
 * @version $Id$
 */




// postMessage(1);
 console.log("ok 1");
// if(typeof(Worker)!=="undefined"){
    var i = 0;
    console.log("ok");
    function timedCount() {
        i = i + 1;
        postMessage(i);
        setTimeout("timedCount()", 500);
    }

    timedCount();
// } else {
	 // console.log("Sorry! No Web Worker support..");
    // Sorry! No Web Worker support..
// }
