function soma() {
    let tn1 = document.getElementById("txtn1")

    let tn2 = document.querySelector("input#txtn2")

    let res = document.getElementById("res")

    let n1 = Number(tn1.value)

    let n2 = Number(tn2.value)

    let s= n1 + n2

    res.innerHTML = `A soma ${n1} e ${n2} é igual a ${s}`
}