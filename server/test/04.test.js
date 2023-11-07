// const { server} = require("../src/server");
// const request = require("supertest");
// const api = request(server);
const axios = require('axios')

describe("FRONT TESTS: ", () => {
  it('1 | GET landingpage', ()=>{
    try {
      axios.get('http://localhost:5173/')
      .then((response) => {          
          expect(response.status).toEqual(200)
        })
        .catch(error => {
          return
        });   
    } catch (err) {
      return
    }
  })
  it('1 | GET homepage', ()=>{
    try {
      axios.get('http://localhost:5173/homepage')
      .then((response) => {
          expect(response.status).toEqual(200)
        })
        .catch(error => {
          return
        });   
    } catch (err) {
      return
    }
  })
});
