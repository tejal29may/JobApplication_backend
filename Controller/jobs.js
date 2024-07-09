// Bussiness logic
const jobModel = require("../Model/jobs")

const createJob = async (req, res) => {

    // this is to save the data in database

    const jobobj = req.body;
    const newjob = new jobModel(jobobj);
    await newjob.save();

    console.log(req.body);
    res.json({
        success: true,
        messag: "jobs crrated successfully ! "
    })
}

const listJob = async (req, res) => {
    const minsalary = req.query.minsalary;

    // listing the jobs
    const jobLists = await jobModel.find({
        salary: {
            $gte: minsalary,
        }
    })
    console.log("lists of jobs", jobLists);

    res.json({
        success: true,
        messag: "lists of jobs are here ",
        results: jobLists
    })
}

const editJob = async (req, res) => {
    const jobId = req.params.id;
    console.log(jobId);
    await jobModel.findByIdAndUpdate(jobId,req.body)
    // const findobj = {
    //     title: "proggrammer"
    // }

    // const updateObj = {
    //     salary: "60000"
    // }

    // await jobModel.findOneAndUpdate(findobj, updateObj)
    // await jobModel.updateMany(findobj,updateObj)
    res.json({
        success: true,
        messag: "job updated successfully ! "
    })
}

const deleteJob =async (req, res) => {
    const jobId=req.params.id;
    console.log(jobId);
    await jobModel.findByIdAndDelete(jobId);
    // jobModel.findOneAndDelete();
    // jobModel.deleteMany();


    res.json({
        success: true,
        messag: "job deleted successfully ! "
    })
}

const jobController = {
    createJob,
    listJob,
    editJob,
    deleteJob
}

module.exports = jobController