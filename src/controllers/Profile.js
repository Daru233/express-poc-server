import Profile from "../models/Profile.js";

export const getProfiles = async (req, res) => {
    try {
        const profile = await Profile.find();
        res.send({ data: profile });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createProfile = async (req, res) => {
    const data = req.body;
    const profile = new Profile(req.body);
    await profile.save();
    res.send({ data: profile });
};
