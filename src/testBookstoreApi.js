//1 Post успешный новый пользователь
//Выгрузка из Посман
//const myHeaders = new Headers();
//myHeaders.append("Content-Type", "application/json");

//const raw = JSON.stringify({
  //"userName": "Anna4@",
  //"password": "Paroll@19"
//});

//const requestOptions = {
  //method: "POST",
  //headers: myHeaders,
  //body: raw,
  //redirect: "follow"
//};

//fetch("https://bookstore.demoqa.com/Account/v1/User", requestOptions)
  //.then((response) => response.text())
  //.then((result) => console.log(result))
  //.catch((error) => console.error(error));

  //1 Post успешный новый пользователь
  //Fetch
  describe('Post успешный новый пользователь', () => {
    it('Post успешный новый пользователь', async () => {
    const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: config.username,
        password: config.password
    })
  })
  const data = await response.json()
  
  expect(response.status).toEqual(201)
  expect (data.token).toBeDefined('Created')
  expect (data.result).toBe('успешный новый пользователь')
})
  })

  //2 Выгрузка из Постман
  //Авторизация
  //const myHeaders1 = new Headers();
  //myHeaders1.append("Content-Type", "application/json");

//const raw1 = JSON.stringify({
  //userName: "Anna4@",
  //password: "Paroll@19"
//});

//const requestOptions1 = {
  //method: "POST",
  //headers: myHeaders1,
  //body: raw1,
  //redirect: "follow"
//};

//fetch("https://bookstore.demoqa.com/Account/v1/Authorized", requestOptions1)
  //.then((response) => response.text())
  //.then((result) => console.log(result))
  //.catch((error) => console.error(error));

  //2 Авторизация
  //Fetch
  describe('Post Авторизация', () => {
    it('Post Авторизация', async () => {
    const response2 = await fetch(`${config.baseURL}/Authorized`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      userName: config.username,
      password: config.password
    })
  })
  const data = await response2.json()
  
  expect(response2.status).toEqual(200)
  expect(data.token).toBeDefined('OK')
  expect(data.result).toBe('авторизация')
})
  })
  
  //3 Получение данных о пользователе 
  //Выгрузка из Постман
  //const raw2 = "";
  //const requestOptions2 = {
  //method: "GET",
  //body: raw2,
  //redirect: "follow"
//};

//fetch("https://bookstore.demoqa.com/Account/v1/User/72956102-a32d-4a6a-ae96-30d5aa7abefb", requestOptions2)
  //.then((response) => response.text())
  //.then((result) => console.log(result))
  //.catch((error) => console.error(error));

  //3 Получение данных о пользователе
  //Fetch
  describe('Получение данных о пользователе', () => {
    it('Получение данных о пользователе', async () => {
    const response3 = await fetch('https://bookstore.demoqa.com/Account/v1/User/7bd320e3-b037-4f42-8ed1-2729e37a9c06', {
      method: 'GET'
    })//{
      
    
    //method: 'GET',
      //headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({
      //userName: "Anna5@",
      //password: "Paroll@19"
    //})
  
    //})
  const data = await response3.json()
  
  //console.log(data)
  
  expect(response3.status).toEqual(200)
  expect(data.token).toBeDefined('OK')
  expect(data.result).toBe('получение данных о пользователе')
})
  })


  //Удаление пользователя
  //Выгрузка с Постман
  //const requestOptions3 = {
    //method: "DELETE",
    //redirect: "follow"
  //};
  
  //fetch("https://bookstore.demoqa.com/Account/v1/User?\"userName\"=\"Anna4@\"&\"password\"=\"Paroll@19\"", requestOptions3)
    //.then((response) => response.text())
    //.then((result) => console.log(result))
    //.catch((error) => console.error(error));
    
    
    //const myHeaders3 = new Headers();
    //myHeaders3.append("Content-Type", "application/json");

//const raw3 = JSON.stringify({
  //"userName": "Anna4@",
  //"password": "Paroll@19"
//});

//const requestOptions3 = {
  //method: "DELETE",
  //headers: myHeaders3,
  //body: raw3,
  //redirect: "follow"
//};

//fetch("https://bookstore.demoqa.com/Account/v1/User", requestOptions3)
  //.then((response) => response.text())
  //.then((result) => console.log(result))
  //.catch((error) => console.error(error));

  //Удаление данных пользователя
  //Fetch
  describe('DELETE удаление пользователя', () => {
    it('DELETE удаление пользователя', async () => {
    const response3 = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: config.username,
        password: config.password
    })
  })
  const data = await response2.json()
  
  expect(response2.status).toEqual(200)
  expect(data.token).toBeDefined('OK')
  expect(data.result).toBe('удаление пользователя')
})
  })
  

