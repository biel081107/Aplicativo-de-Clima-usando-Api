function pesquisar() {
const key = 'c0d682b33e7fb960c163c918f0bf8814'
const cidade = String(document.getElementById('txtseach').value)
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric`
const graus = document.getElementById('graus')
const namecidade = document.getElementById('cidade')
const img = document.getElementById('imagemclima')


fetch(url)//conversar com api
    .then(response => {//enviiar respsota a api
        if(!response.ok){//verificar se api respondeu
            console.error('Erro na Solicitação');
        }
        return response.json();//retornar a resposta da api em formato json
    })
    .then(data =>{//fazer as coisas com a respsota da api
        console.log(data)
        const clim = data.weather[0].main
        const temperatura = parseInt(data.main.temp);
        
        switch(clim){
            case 'Thunderstorm' :
                img.src = 'assets/thunderstorm.png';
                break;
            case 'Drizzle' : 
                img.src = 'assets/drizzle.png';
                break;
            case 'Rain' :
                img.src = 'assets/storm.png';
                break;
            case 'Snow':
                img.src = 'assets/snowy.png';
                break;
            case 'Clear':
                img.src = 'assets/clear.png';
                break;
            case 'Clouds':
                img.src = 'assets/dark-cloud.png'
                break;
            default :
                img.src = 'assets/drizzle.png';
                break;
        }
        document.getElementById('details-clim').innerHTML = clim
        graus.innerHTML = `${temperatura}°C`
        namecidade.innerHTML = `${cidade}`
    })

}
