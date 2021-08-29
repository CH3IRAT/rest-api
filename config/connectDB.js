var mongoose=require("mongoose")

var connectDB = async () => {

        try {

         var result = await    mongoose.connect('mongodb://localhost:27017/mernf3', 
            {useNewUrlParser: true,
                 useUnifiedTopology: true
                });
                  console.log("db is running")

            
        } catch (error) {
            console.log('eroor conect BD')
        }
}
module.exports=connectDB
