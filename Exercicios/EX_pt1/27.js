
function altura (altura1,altura2,taxa_anual1,taxa_anual2){
    let anos = 0
    if  (altura1 > altura2 && taxa_anual2 > taxa_anual1){
        while (altura2 < altura1) {
            altura2 = altura2 + (taxa_anual2)
            anos++
        }
        return console.log (`a crinaça 2 vai alcançar em ${anos} anos`)
    } else if (altura_cm2 > altura_cm1 && taxa_anual1 > taxa_anual2){
        
        while (altrua1 < altura2) {
            altura1 = altura1 + (taxa_anual1)
            anos++
        }
        return console.log (`a crinaça 1 vai alcançar em ${anos} anos`)
    }else {
        return console.log ("alturas iguais ")
    }
}

altura (150, 130, 2,4)