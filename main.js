var Family_Array_Images = ["Daddy.png",
                           "Mamma.jpg",
                           "Mamma and Me!.png"];

var Family_Array_Name = ["Diljeet Singh",
                         "Durga Pannala",
                         "Sammy"];

var i= 0;                      
function Next()
{ 
document.getElementById ("Family_Img").src= Family_Array_Images[i];
document.getElementById ("Names").innerHTML= Family_Array_Name[i];
i++; 
if (i==3) 
{
    i=0;
}
}