import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function (clientPassword) {
    return await bcrypt.compare(clientPassword, this.password);
};

const UserModel = mongoose.model("bookPublisher_user", userSchema);
export default UserModel;
