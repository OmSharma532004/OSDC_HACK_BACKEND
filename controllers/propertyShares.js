

const Property = require("../models/property");
const Share = require("../models/shares");
const Land = require("../models/land");


module.exports.createShare = async (req, res) => {
    try {
        const { landId, price, percentage } = req.body;
        const share = new Share({
            landId,
            price,
            percentage
        });
        await share.save();
        res.status(201).json({ message: "Share created successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports.createProperty = async (req, res) => {
    try {
        const {  tenancy, calculator, shares,landId } = req.body;
        const land=await Land.findById(landId);
        console.log(land)
        const property = new Property({
            title: land.title,
            description : land.description,
            price   : land.price,
            location    : land.location,
            image   : land.image[0],
            size   : land.size,
            whyInvest : land.whyInvest,
            tenancy,
            calculator,
            landId,
            shares
        });
        await property.save();

        res.status(201).json({ message: "Property created successfully" ,
    success:true,
    propertyId:property._id});
    
    
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}

module.exports.getProperty = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports.getPropertybyid = async(req,resp)=>
{
    try{
    
        const property = await Property.findById(req.params.id);
        resp.status(200).json(property);
    }
    catch(error){
        resp.status(404).json({message:error.message});
    }
}