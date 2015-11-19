$(document).ready(function() {
    $(document).foundation();

})
   function RGBA(red,green,blue,alpha) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
    this.getCSS = function() {
        return "rgba("+this.red+","+this.green+","+this.blue+","+this.alpha+")";
    }
}

// store a copy of the color
var bgColor = new RGBA(255,0,0,0.5);

function setBgOpacity(elem, opac) {
    bgColor.alpha = opac;
    elem.style.backgroundColor = bgColor.getCSS();
}