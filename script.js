var details=[{
    "Name":"priyadharshini",
    "Age":"20",
    "Skills":"web development",
    "Hobby":"chess",
    "Aim":"web developer"
},
{
    "Name":"justin",
    "Age":"20",
    "Skills":"web development",
    "Hobby":"watching reels",
    "Aim":"sharemarketing"
},
{
    "Name":"Anitha",
    "Age":"20",
    "Skills":"tailor",
    "Hobby":"cooking",
    "Aim":"manager"

}];
// for  loop:
     for( var i=0;i<=details.length;i++){
        
        console.log(details[i].Name,details[i].Age,details[i].Skills,details[i].Hobby,details[i].Aim)
     }

// for in loop:
     for( i in details){
        console.log(details[i].Name)
    
     }

// for of loop:
     for(var a of details){
        console.log(a.Name,a.Age,a.Skills,a.Hobby,a.Aim)
    }
// forEach loop:    

 details.forEach((a)=>console.log (a.Namea.Age,a.Skills,a.Hobby,a.Aim))





