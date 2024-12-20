import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fikriahmat29:aVjcMkj3tEQKClTd@cluster0.a0ojx.mongodb.net/food-delivery').then(() => {
        console.log("Database Connected")
    });
}