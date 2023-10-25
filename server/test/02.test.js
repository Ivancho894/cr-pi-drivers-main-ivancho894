const server = require('../src/server')
const session = require('supertest')
const agent = session(server)

describe('ROUTES TEST',()=>{
    describe(' GET | /drivers',()=>{
        it("Response with status 200",async ()=>{
            const res = await agent.get('/drivers')
            expect(res.statusCode).toBe(200)
        })
        it('Response with an array',async ()=>{
            const res = await agent.get('/drivers')
            // const props = ['id','name','lastname','description','image','nacionality','dayofbirth','Teams'];
            // props.map(x=>{
            //     expect(res.body).toHaveProperty(x)
            // })
            expect(typeof(res.body)).toBe('array')
        })
    })
})