import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    surName: { type: String, required: [true, "Name is required"] },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
        unique: true,
    }
});

export default mongoose.model("User", UserSchema);;