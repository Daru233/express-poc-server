import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
