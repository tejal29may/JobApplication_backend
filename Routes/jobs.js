// Stores api

const express=require("express")

const router=express.Router();

const jobController=require("../Controller/jobs")

router.post("/api/jobs",jobController.createJob);

router.get("/api/jobs",jobController.listJob);

router.put("/api/jobs/:id",jobController.editJob);

router.delete("/api/jobs/:id",jobController.deleteJob)

module.exports=router;