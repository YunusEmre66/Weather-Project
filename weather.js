// "icon": "01d"

const apikey = "227cc7849c0edd65ddb09563d450e4e6";


const input = document.querySelector(".input-value")
const button = document.querySelector(".button")
const language = document.querySelector("#language");
const unitsSelect = document.querySelector("#units");
const weatherdiv = document.querySelector(".weatherdiv")
const lang = [{ "Deutsch": "de" },{ "English": "en" },{ "French": "fr" },{ "Arabic": "ar" },{ "Spanish": "es" },{ "Turkish": "tr" }];
const unit=[{units:"metric"},{units:"imperial"}]


window.addEventListener("load", () => {

    lang.forEach((el) => {
      
        language.innerHTML += ` <option value="${Object.values(el)}" >${
        Object.keys(el)
      }</option`;
    });
    unit.forEach((el) => {
      unitsSelect.innerHTML += ` <option value="${el.units.toLowerCase()}" >${
        el.units
      }</option`;
    });
  });
  

button.addEventListener("click", async () => {

    let sehirismi = input.value.trim();
    let selectLang = language.value;
    let selectUnit = unitsSelect.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${sehirismi}&appid=${apikey}&units=${selectUnit}&lang=${selectLang}`;  //! linkimizi değişkene attık 
    let response = await fetch(url)
    if (!response.ok) {
        throw new Error(`bir hata oluştu: ${response.status}`)
    }
    let data = await response.json()
    printData(data)   //!datadaki bütün bilgiler aşağıdaki fonksiyona taşınıyor, burada işleniyor.
})

const printData = (weatherdata) => {  
    const { 
        name, 
        main: { temp_min: minderece },    //!tek tek bu şekilde yeni değer göndereceksekde desstruckturing yapmak gerekir.
        main: { temp_max: maxderece }, 
        weather: [{ description: acıklama, icon}], 
        sys: { country } } 
        = weatherdata
    console.log(weatherdata);  //!her ihtimale karşı bunu önce console a yazdırıyoruz
    // console.log(name);
    // console.log(minderece);
    // console.log(acıklama);
    // console.log(maxderece);
    // console.log(country);
    // console.log(simge);
    let iconImage  = `http://openweathermap.org/img/wn/${icon}.png`   //!datanın içindeki icon bilgisini değişkene taşıdık


    //! burada html de belirlediğimiz weatherdiv classını değişkene taşıdık ve innerhtml inede += ile cardımızı tek tek ekrana yazdırdık
    weatherdiv.innerHTML += `  
        <div class="col-md-6 col-lg-3 col-xl-2 m-1 text-center opacity-75 gap-3 p-4 m-3 justify-content-evenly ">
            <div class="card" >
            <h2 class="card-title">${name}</h2>
            <div class="card-body">
                <h2 class="card-title">${country}</h2>
                <p class="card-text">${acıklama}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${maxderece}</li>
                <li class="list-group-item">${minderece}</li>
                <img src="${iconImage}">
                
            </ul>    
            </div>
            

            </div>
        </div>
        `


}


// const getUsers = () => {
//     let url = "https://api.openweathermap.org/data/2.5/weather?q=izmir&appid=227cc7849c0edd65ddb09563d450e4e6"
//     fetch(url)
//     .then(res => {
//         if(!res.ok){
//             throw new Error(`bir hata oluştu: ${res.status}`)
//         }
//         return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// }

// getUsers()


// 84aaec22783f23593f4885abafaf8fd2

// 84aaec22783f23593f4885abafaf8fd2

// "temp_min": 299.12,
// "temp_max": 299.88,

// "description": "clear sky",++

// "name": "İzmir",++

// "country": "TR",+++

// "icon": "01d"

// http://openweathermap.org/img/wn/$%7Bicon%7D.png

// 01d