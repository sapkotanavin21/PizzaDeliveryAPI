const Register = require('../../model/user');

const mongoose = require('mongoose');

const testDB = 'mongodb://127.0.0.1/PizzaDelivery_test'

beforeAll(async()=>{
    mongoose.connect(testDB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
})
afterAll(async()=>{
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
})
test('Should add a new pizza',()=>{
    return Register.create({

        image:'',
        name:'chicken',
       location:'kathamndu',
        price: '150', 
        food: 'Big pizza'
    }).then((Response)=>{
        expect(Response.image).toBe('apsara')
        expect(Response.name).toBe('chicken')
        expect(Response.location).toBe('kathmandu')
        expect(Response.price).toBe('150')
        expect(Response.food).toBe('Big pizza')
        
            })
        })
        test('should updated new pizza',()=>{
            return Register.findOne({'name':'chicken'})
            .then((chickens)=>{
                chickens.image='apsara'
                chickens.name='chicken'
                chickens.location='kathmandu'
                chickens.price='150'
                chickens.food='Big pizza'
                user.save().then((updateduser)=>{
                    expect(Response.image).toBe('apsara')
                    expect(Response.name).toBe('chicken')
                    expect(Response.location).toBe('kathmandu')
                    expect(Response.price).toBe('150')
                    expect(Response.food).toBe('Big pizza')
                
        
                })
            })
        })
        