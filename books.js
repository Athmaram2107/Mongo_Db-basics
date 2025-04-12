const mongoose=require('mongoose');

main()
.then((res)=>{
    console.log("connection was succesful");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/flipkart');
}

const batSchema=new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
    },

    Material:{
        type:String
    },
    Price:{
        type:Number,
        required:true,
    },

    category:{
        type:String,
        enum:["Indian","non-indian"],
    }
    
    

});

const Bat=mongoose.model("bats",batSchema);

const Bat1=new Bat({
    companyName:"kookaburra",
    Price:"2850",
    Material:"English willow"
})

Bat.findByIdAndUpdate("676264be3b59c0d3cafa4b4d",{Price:2950})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

Bat1.save().then((res)=>{
    console.log(res);
});

