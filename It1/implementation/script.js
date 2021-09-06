function swap(tableau, x, y) {
    let temp = tableau[x];
    tableau[x] = tableau[y];
    tableau[y] = temp;
    return tableau;
}


//tri par insertion

function triParInsertion() {
    let tab = [3, 9, 7, 1, 6, 2, 8, 4, 5]
    let temp
    let i
    let j
    for (i = 1; i < tab.length; i++) {
        temp = tab[i];
        for (j = i; j > 0 && tab[j - 1] > temp; j--) {
            tab[j] = tab[j - 1];
        }
        tab[j] = temp;
    }
    console.log("tri par insertion: " + tab)
}

triParInsertion();

//tri par sélection

function triParSelection() {
    let tab = [3, 9, 7, 1, 6, 2, 8, 4, 5]
    for (let i = 0; i < tab.length - 1; i++) {
        for (let j = i + 1; j < tab.length; j++) {
            let min = i;
            if (tab[j] < tab[min]) {
                min = j;
                let temp = tab[i];
                tab[i] = tab[min];
                tab[min] = temp;
            }
        }
    }
    console.log("tri par selection: " + tab)
}

triParSelection()


//tri a bulle

function triABulle() {
    let tab = [3, 9, 7, 1, 6, 2, 8, 4, 5];
    let i = 0;
    let j;
    let permutation = true;
    while (permutation) {
        permutation = false;
        i++;
        for (j = 0; j < tab.length - i; j++) {
            if (tab[j] > tab[j + 1]) {
                permutation = true;
                let temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = temp
            }
        }
    }
    console.log("tri a bulle: " + tab)
}

triABulle()

//tri par fusion
function tri_fusion(tableau) {
    if (tableau.length <= 1) {
        return tableau
    } else {
        let milieu = Math.floor(tableau.length / 2)
        let right = tableau.slice(milieu)
        let left = tableau.slice(0, milieu)
        tableau = fusion(tri_fusion(left), tri_fusion(right))
        return tableau
    }

    function fusion(left, right) {

        if (left.length === 0) {
            return right
        } else if (right.length === 0) {
            return left
        } else if (left[0] <= right[0]) {
            return [left[0]].concat(fusion(left.slice(1, left.length), right))
        } else {
            return [right[0]].concat(fusion(left, right.slice(1, right.length)))
        }
    }


}

let tab = [3, 9, 7, 1, 6, 2, 8, 4, 5];
console.log("Tri par fusion: " + tri_fusion(tab))

//1
function tri_Rapide(tableau,  premier,  dernier) {
    if (premier < dernier) {
       let pi = partitionner(tableau, premier,dernier)
         tri_Rapide(tableau, premier, pi - 1)
         tri_Rapide(tableau, pi + 1, dernier)
    }
    }

function partitionner(tableau, premier, dernier) {
    let temp;
    let pivot=dernier;
    let j=premier;
    for (let i = premier; i < dernier; i++) {
        if (tableau[i] <= tableau[pivot]) {
            tableau=swap(tableau,i,j)
            j=j+1;
        }
    }
    tableau=swap(tableau,dernier,j)
    return j;
}

tri_Rapide(tab,0,tab.length-1)
console.log("Tri rapide : " + tab)

// function quickSort(tableau){
//     if(tableau<2){
//         return tableau
//     }
//     let pivot=tableau[tableau.length-1]
//     let smaller=tableau.filter((item)=>item<pivot)
//     let bigger=tableau.filter((item)=>item>pivot)
//
//     return[...quickSort(smaller),pivot,...quickSort(bigger)];
// }

//  console.log("Tri rapide: " + quickSort(tab))

//Tri de Shell
// let tab = [3, 9, 7, 1, 6, 2, 8, 4, 5];
 function tri_shell(tableau){
    let longueur=tableau.length;
   let n=0;
   while(n<longueur){
       n=(3*n+1)
   }
   while(n!=0){
       n=Math.floor(n/3)
       for(let i=n;i<longueur;i++){
           let valeur=tableau[i];
           let j=i;
           while(j>n-1 && tableau[j-n]>valeur){
               tableau[j]=tableau[j-n]
               j=j-n
           }
           tableau[j]=valeur
       }
   }
 }
let tab2 = [3, 9, 7, 1, 6, 2, 8, 4, 5];
 tri_shell(tab2);
 console.log("tri shell : " + tab2)



//tri par tas
function triParTas(tableau){
     organiser(tableau);
    for(let i=tableau.length-1;i>0;i--){
        tableau=swap(tableau,i,0);
        redescendre(tableau,i,0);
    }
}

function organiser(tableau){
     for(let i=0; i<tableau.length-1;i++){
         remonter(tableau,i)
     }
}

function remonter(tableau,index){
     if (tableau[index]>tableau[index/2]){
         tableau=swap(tableau,index,index/2);
         remonter (tableau,index/2);
     }
}

function redescendre(tableau,element,index){
     let max
     let formule=2*index+1
    if(formule<element){
        if (tableau[formule]>tableau[2*index]){
             max=formule;
        }else{
             max=2*index
        }
    }else if(tableau[max]>tableau[index]){
        tableau=swap(tableau,max,index)
        redescendre(tableau,element,max)
    }
}

let tab3 = [3, 9, 7, 1, 6, 2, 8, 4, 5];
 triParTas(tab3);
 console.log("tri par tas: " + tab3)