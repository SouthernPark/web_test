css : 
    language to describe how documents are presented  

selector{  
    property:value  
}

Ex:
//make all h1 purple  
h1{  
    color:purple;  
};  

img{  
    width: 100px  
    height: 200px  
};  

including style:  
(1)Inline style: you can write your styles directly inline on each element, but this is not a good idea. we have to duplicate for every similar elements   
Ex:   
    <h1 style="color: purple"> hello world</h1>  

(2)<style> element: you can write your styles inside the style element. But it is difficult to share the styles between document. 

<style> in head
<head>  
    <style>  
        h2 {  
            color: purple  
        }  
    </style>  

</head>  

(3) external style sheet  
Write your code in a css style file and then include the <link> inside the html head   
<link rel="stylesheet" href="style.css">  


hex-color:  
#123456  
12 -> the extent of red  
34 -> the extent of green  
56 -> the extent of blue  
  

property:  
color    
background-color   
text-align   
font-weight: normal;(control bold extent)  
text-decoration: blue underline;   
line-height: 1.5 (space between line)  
letter-spacing: 10px; (space between char)  
