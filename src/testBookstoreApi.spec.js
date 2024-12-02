//import config from '../framework/config/configBookstore'

import { newUser, authorized, userFails, userDelete } from '../framework/services/BookstoreService.js'

  describe('Post успешный новый пользователь', () => {
    it('Post успешный новый пользователь', async () => {
    const response = await newUser() //fetch(`${config.baseURL}/User`, {
      //method: 'POST',
      //headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({
        //userName: config.username,
        //password: config.password
    //})
  //})
  const data = await response.json()
  
  expect(response.status).toBe(201)
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
    const response2 = await authorized() // fetch(`${config.baseURL}/Authorized`, {
      //method: 'POST',
      //headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({
      //userName: config.username,
      //password: config.password
    //})
  //})
  expect(response2.status).toEqual(200)
  const data = await response2.json()
  
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
    const response3 = await userFails() // fetch(`${config.baseURL}/a351857e-5358-4d44-a8f7-c78550c1b513`)
    
    expect(response3.status).toBe(200)  
    const data = await response3.json()
  
  //console.log(data)
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
    const response3 = await userDelete() // fetch(`${config.baseURL}/User`, {
      //method: 'DELETE',
      //headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({
        //userName: config.username,
        //password: config.password
    //})
  //})
  expect(response3.status).toBe(200)
  const data = await response3.json()
  
  expect(data.token).toBeDefined('OK')
  expect(data.result).toBe('удаление пользователя')
})
  })
  

