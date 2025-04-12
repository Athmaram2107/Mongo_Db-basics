const mongoose=require('mongoose');
main()
.then((res)=>{
    console.log("connection was successful");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}

const userSchema=new mongoose.Schema({   //schema -design
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("users",userSchema); //User it is model
//users is collection.

//!..insertion of single document
// const user1=new User(({   //document
//     name:"ram",
//     email:"ramath@22gmail.com",
//     age:20,
// }))

// user1.save();

// const user2=new User(({
//     name:"harsha",
//     email:"raniathma@gmail.com",
//     age:21,
// }))

// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//!..insertion of more than one documents
User.insertMany([
    {name:"rohit",email:"rohit23@gmail.in",age:37},
    {name:"kohli",email:"cheeku22@gmail.com",age:36},
    {name:"gill",email:"gill21@gmail.com",age:26}
]
).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

//model.find({}),findOne({}),findById({})
//model.updateOne({filter},{updated}),model.updateMany({filter or condition},{object or updated}),model.findOneAndUpdate({filter or condition},{object or updated},{options});
//model.delete(), model.deleteOne(),model.deletefindOne(),model.findByIdAndDelete();

