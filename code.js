var i=1;
const arr =[];
var j;

function check(event){
    i+=1;

    event.preventDefault();
    var pid=document.getElementById("id").value;
    var pname=document.getElementById("name").value;
     var pprice=document.getElementById("price").value;

   /* var form = document.getElementById("form");

    for (const el of form.elements) 
    {
        if (el.type == "text"|| el.type=="number") 
        {
            console.log(el.value);    
        }  
    }              
    */ 
        const obj={
            'obj_id':pid,
            'obj_name':pname,
            'obj_price':pprice
        };
        arr.push(obj);

        let text="<table><th>Product Id  </th><th>Product Name</th><th>Product Price</th>";


   
        for(j=0;j<arr.length;j++){
            text+= "<tr><td>"+arr[j].obj_id+"</td><td>"+arr[j].obj_name+"</td><td>"+arr[j].obj_price+"</td></tr>"
        }

        
       


           text+= "</table>";

        
        document.getElementById("res").innerHTML=text;

}