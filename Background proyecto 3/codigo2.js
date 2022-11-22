function cambiarFondo(){
var colores=["Orchid","Pink","Salmon","Tan","Teal","Tomato","Yellow","Cyan","DarkBlue","Aqua","AliceBlue","AntiqueWhite",
"Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
"Coral","CornflowerBlue","Cornsilk","Crimson","DarkCyan","DarkGoldenrod","DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOrange",
"DarkOrchid","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","Khaki",
"Lavander","LavanderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightGray","LightPink","LightYellow","Lime","LightSeaGreen",
"LimeGreen","Linen","Maroon","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSpringGreen","MediumVioletRed","MidnightBlue",
"MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","PaleGreen","Papayawhip","PeachPuff",
"Peru","Plum","PowderBlue","RebeccaPurple","Red","RoyalBlue","SaddleBrown","Seashell","Sienna","Silver","SkyBlue","SlateBlue","SlateGrey",
"Teal","Thistle","Tomato","Wheat","WhiteSmoke","YellowGreen"
];
var colorAleatorio=Math.floor( Math.random() *colores.length);
document.body.style.background= colores[colorAleatorio];
document.getElementById("texto").innerHTML="Background Color: "+colores[colorAleatorio];

}
 
