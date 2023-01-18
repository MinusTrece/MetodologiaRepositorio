let nums=[1,2,3,4,2,2,5,2];
let contador=0;
let itemSearch=2;
for(let i=0;i<nums.length;i++) {
    if(nums[i]===itemSearch) {
        contador++;
    }
}
console.log("El numero de numeros " + itemSearch + " es " + contador);


