var bookMarkName = document.getElementById("inputOne");
var bookMarkURL = document.getElementById("inputTwo");
var information;
var regex1 =/^(https:\/\/)/;
if(JSON.parse(localStorage.getItem("item"))==null)
{
    information = [];
}
else
{
    information = JSON.parse(localStorage.getItem("item"));
    display();
}
function addURL()
{
    if(bookMarkName.value == "" || bookMarkURL.value == "")
    {
        window.alert("filldata")
    }
    else
    {
        var package =
        {
            siteName : bookMarkName.value ,
            siteURL : bookMarkURL.value 
        }
        if(regex1.test(package.siteURL)==false)
        {
            package.siteURL = "https://"+bookMarkURL.value;
        }
        information.push(package);
        localStorage.setItem("item" , JSON.stringify(information));
         display();
         clear ();
    }

}
function display ()
{
    var resultant = "";
    for (var i = 0 ; i < information.length ; i++) {
         resultant +=
        `
            <tr>
                <td class="w-50 ps-2"><p class="fs-3 my-3 py-2" >${information[i].siteName}</p></td>
                <td><a href="${information[i].siteURL}" class="btn btn-primary  visit-button " target="_blank">Visit</a></td>
                <td><button class="btn btn-danger delete-button "  onclick="deleteBM(${i})" >Delete</button></td>
            </tr>  
        `      
        }
        document.getElementById("sectionOneTable").innerHTML = resultant;
}
function deleteBM(index)
{
    information.splice(index ,1);
    localStorage.setItem("item" , JSON.stringify(information));
    display();
} 
function clear ()
{
    bookMarkName.value = "";
    bookMarkURL.value = "";
}