function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else{
        var rsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '250px'
        img.style.borderRadius = '250px'

        var genero = ''
        if(rsex[0].checked){

            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'rapaz.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'senhor.jpg')
            }

        } else if(rsex[1].checked){

            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'moça.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'senhora.jpg')
            }
        }

        res.innerHTML = `Excelso(a) ${genero} de idade ${idade}`
        res.appendChild(img)
    }
}