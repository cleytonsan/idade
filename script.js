function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.style.width = '500px'
        img.style.height = '500px'
        img.style.borderRadius = '150px'
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebeH.jpg')
            } else if(idade < 20) {
                // Joven
                img.setAttribute('src', 'jovemH.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultoH.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosoH.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebeM.jpg')
            } else if(idade < 20) {
                // Jovem
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 50){
                // Adulta
                img.setAttribute('src', 'adultaM.jpg')
            } else {
                // Idosa
                img.setAttribute('src', 'idosaM.jpg')
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}