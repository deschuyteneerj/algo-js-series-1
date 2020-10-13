// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {
    //Event on the input selection on the slider:
    slider.oninput = function() {
        //Assign the value of the slider into the target to display it:
        document.getElementById("target").innerHTML = "0"+document.getElementById("slider").value;
    }
})();
