let studentCount = Number(prompt("Enter the number of students in the class:"));

if (Number.isNaN(studentCount))
   {
    alert("Invalid input. Please enter a  number.");
   } 
else 
{
    let students = [];
    for (let i = 0; i < studentCount; i++) 
      {
        let name = prompt(`Enter name of student ${i + 1}:`);
        let math = Number(prompt(`Enter mathematics score for ${name}:`));
        let science = Number(prompt(`Enter science score for ${name}:`));
        let arts = Number(prompt(`Enter arts score for ${name}:`));

        if (Number.isNaN(math) || Number.isNaN(science) || Number.isNaN(arts)) 
          {
            alert("Invalid input. Please enter number.");
           
         }

        let total = math + science + arts;
        students.push({ name: name, math: math, science: science, arts: arts, total: total });
    }

    
    students.sort(function(a, b) 
    {
        if (b.total !== a.total) 
          {
            return b.total - a.total; 
          }
        if (b.math !== a.math)
          {
           return b.math - a.math;  
          }   
        return a.name.localeCompare(b.name);               
    });

  
    for (let i = 0; i < students.length; i++) {
        const name = students[i].name;
        const totalScore = students[i].total;
        document.write(`<h2>${i + 1}. ${name}: Total Score = ${totalScore} (Math: ${students[i].math}, Science: ${students[i].science}, Arts: ${students[i].arts})</h2>`);
    }
}
