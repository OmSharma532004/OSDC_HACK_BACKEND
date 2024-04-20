
const Share = require("../models/shares");
const Property = require("../models/property");

module.exports.createShare = async (req, res) => {
    try {
        const { landId, propertyId, price, percentage } = req.body;
        const share = new Share({
            landId,
            propertyId,
            price,
            percentage
        });
        await share.save();
        res.status(201).json({ message: "Share created successfully" });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}
module.exports.createSharesByTotalPrice=async(req,res)=>
{
    try{
        const {propertyId}=req.body;
        const property = await Property
        .findById(propertyId)
        .populate('landId');
        const totalPrice = property.price;
        const price=totalPrice/10;
        const percentage = (price/totalPrice)*100;
        
       //now making 10 shares of that property
         for(let i=0;i<10;i++)
            {
                const share = new Share({
                    landId:property.landId,
                    propertyId,
                    price,
                    percentage
                });
                await share.save();
                property.shares.push(share);
                await property.save();

            }
            res.status(201).json({message:"Shares created successfully",
        success:true,
        property:property

        }
        );



      
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}

module.exports.getShares = async (req, res) => {
    try {
        const shares = await Share.find();
        res.status(200).json(shares);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
