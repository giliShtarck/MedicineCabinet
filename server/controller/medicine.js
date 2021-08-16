const Medicine = require("../models/medicine")
const User = require("../models/user")


const addUMedicine = async (req, res) => {
    console.log("here", req.body);
    const { userId } = req.params
    const user = User.findById(userId);
    if (user !== undefined) {
        const { medicineName, medicineCode, expairDate, severalDays, severalTimes, remarks } = req.body
        let newMedicine = new Medicine({
            medicineName, medicineCode, expairDate, severalDays, severalTimes, remarks
        });
        newMedicine.save();
        user.medicine.push(newMedicine._id)
        newMedicine.user.push(userId)
        newMedicine.save();
        res.status(200).json({ medicine: newMedicine })
    }
}
module.exports = {
    addUMedicine
}