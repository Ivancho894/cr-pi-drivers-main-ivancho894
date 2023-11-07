const server = require('../src/server')
const session = require('supertest')
const agent = session(server)

describe('ROUTES TEST',()=>{
    describe(' POST | /drivers',()=>{
        const newDriver = {
            "name": "Giancarlo",
            "lastname": "Baghetti" ,
            "image": "d",
            "dayofbirth": "1934-12-25",
            "nationality": "Italian",
            "teams": "Ferrari, Automobili Turismo e Sport, Scuderia Centro Sud, Brabham, Reg Parnell, Lotus",
            "description": "Giancarlo Baghetti (25 December 1934 27 November 1995) wlis 500, just 17 days after Farina."
          }
        it("Response with status 200",async ()=>{
            const res = await agent.post('/drivers').send(newDriver)
            expect(res.statusCode).toBe(200)
        })
        it('Response with a new driver',async ()=>{
            const res = await agent.get('/drivers')            
            const props = ['id','name','lastname','description','image','nationality','dayofbirth'];
            props.map(x=>{
                expect(res.body[0]).toHaveProperty(x)
            })
        })
    })
    describe(' GET | /drivers',()=>{
        it("Response with status 200",async ()=>{
            const res = await agent.get('/drivers')
            expect(res.statusCode).toBe(200)
        })

        it('Response with drivers',async ()=>{
            const res = await agent.get('/drivers')            
            const props = ['id','name','lastname','description','image','nationality','dayofbirth'];
            props.map(x=>{
                expect(res.body[0]).toHaveProperty(x)
            })
        })
        })
        describe(' GET | /drivers/:id',()=>{
            it("Response with status 200",async ()=>{
                const res = await agent.get('/drivers/393')
                expect(res.statusCode).toBe(200)
            })
    
            it('Response with drivers',async ()=>{
                const res = await agent.get('/drivers/393')            
                const props = ['id','name','lastname','description','image','nationality','dayofbirth'];
                props.map(x=>{
                    expect(res.body).toHaveProperty(x)
                })
            })
            })
        describe(' GET | /drivers/name?=...',()=>{
            it("Response with status 200",async ()=>{
                const res = await agent.get('/drivers/?name =Giancarlo')
                expect(res.statusCode).toBe(200)
            })
    
            it('Response with drivers',async ()=>{
                const res = await agent.get('/drivers/?name=Giancarlo')            
                const props = ['id','name','lastname','description','image','nationality','dayofbirth'];
                props.map(x=>{
                    expect(res.body[0]).toHaveProperty(x)
                })
            })
            })
        describe(' GET | /teams',()=>{
            it("Response with status 200",async ()=>{
                const res = await agent.get('/teams')
                expect(res.statusCode).toBe(200)
            })
    
            it('Response with drivers',async ()=>{
                const res = await agent.get('/teams')            
                const props = ['id','name','createdAt','updatedAt'];
                props.map(x=>{
                    expect(res.body[0]).toHaveProperty(x)
                })
            })
            })

})