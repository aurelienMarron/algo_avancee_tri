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

// function fusion(left,right){
//     let tableau=[]
//     let l=0
//     let r=0;
//
//     while(l<left.length && r<right.length){
//         if (left[l]<right[r]){
//             tableau.push(left[l++]);
//         }else{
//             tableau.push(right[r++])
//         }
//     }
//     return tableau.concat(left.slice(l)).concat(right.slice(r));
// }
//
// function tri(tableau){
//     if(tableau.length<2){
//         return tableau;
//     }
//
//     let milieu=Math.floor(tableau.length/2)
//     let right=tableau.slice(milieu)
//     let left=tableau.slice(0,milieu)
//     let p=fusion(tri(left),tri(right));
//
//     p.unshift(0,tableau.length);
//     tableau.splice.apply(tableau,p);
//     return tableau;
// }
//
//
// function triParFusion(){
//     let tab=[3,9,7,1,6,2,8,4,5];
//     tri(tab);
//     console.log("tri par fusion: " + tab)
// }
//
// triParFusion();
function tri_fusion(tableau) {
    if (tableau.length <= 1) {
        return tableau
    } else {
        let milieu = Math.floor(tableau.length / 2)
        let right = tableau.slice(milieu)
        let left = tableau.slice(0, milieu)
        tableau=fusion(tri_fusion(left), tri_fusion(right))
        return tableau
    }

function fusion(left,right){

    if(left.length===0){
        return right
    }
    else if(right.length===0){
        return left
    }
    else if(left[0]<=right[0]){
        return [left[0]].concat(fusion(left.slice(1,left.length),right))
    }else{
        return [right[0]].concat(fusion(left,right.slice(1,right.length)))
    }
}


}
let tab=[3,9,7,1,6,2,8,4,5];
console.log("Tri par fusion: " + tri_fusion(tab))