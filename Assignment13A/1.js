
 
const input = prompt("Enter the number of User:");
for (let i = 0; i < input; i++) {
    const val = prompt(`Enter user ${i + 1}'s name `);
    document.write(` ${val} <br>`);
}
