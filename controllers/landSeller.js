
const Land = require("../models/land");

module.exports.createLand = async (req, res) => {
    try {
        const { title, location, price, description, size ,image,whyInvest  } = req.body;
       const land = new Land({
            title,
            location,
            price,
            description,
            size,
            image,
            whyInvest
        });
        await land.save();
        res.status(201).json({ message: "Land created successfully" });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
    };

module.exports.getLands = async (req, res) => {
    try {
        const lands = await Land.find();
        res.status(200).json(lands);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    };

    module.exports.getLandbyid = async(req,resp)=>
    {
        try{
            const land = await Land.findById(req.params.id);
            resp.status(200).json(land);
        }
        catch(error){
            resp.status(404).json({message:error.message});
        }
    }

module.exports.updateLandApproved = async (req, res) => {
    try {
        const land = await Land.findById(req.params.id);
        land.isApproved = true;
        await land.save();
        res.status(200).json({ message: "Land approved successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    }
    

