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

test('Should add a new user',()=>{
    return Register.create({

        image:'apsara',
        firstName:'rajesh',
        lastName:'hamal',
        PhoneNumber: '9876543332', 
        username: 'rajeshhamal',
        password: 'rajesh12'
    }).then((Response)=>{
expect(Response.image).toBe('apsara')
expect(Response.firstName).toBe('rajesh')
expect(Response.lastName).toBe('hamal')
expect(Response.PhoneNumber).toBe('9876543332')
expect(Response.username).toBe('rajeshhamal')
expect(Response.password).toBe('rajesh12')

    })
})
test('should update new user',()=>{
    return Register.findOne({'firstName':'rajesh'})
    .then((user)=>{
        user.image='apsara',
        user.firstName='rajesh',
        user.lastName='hamal',
        user.PhoneNumber='9876543332',
        user.username='rajeshhamal',
        user.password='rajesh12'
        user.save().then((updateduser)=>{
            expect(Response.image).toBe('apsara')
            expect(Response.firstName).toBe('rajesh')
            expect(Response.lastName).toBe('hamal')
            expect(Response.PhoneNumber).toBe('9876543332')
            expect(Response.username).toBe('rajeshhamal')
            expect(Response.password).toBe('rajesh12')

        })
    })
})
