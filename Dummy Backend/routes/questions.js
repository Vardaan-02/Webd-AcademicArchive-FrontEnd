const express = require("express");
const LAL = require("../questions/LAL.json");
const EP = require("../questions/EP.json");
const DSA = require("../questions/DSA.json");
const OS = require("../questions/OS.json");
const CN = require("../questions/CN.json");
const COA = require("../questions/COA.json");
const OOPS = require("../questions/OOPS.json");
const PS = require("../questions/PS.json");

const router = express.Router();

router.get("/lal", (req,res)=>{console.log("Hello"); res.send(LAL)});
router.get("/ep", (req,res) => res.send(EP));
router.get("/dsa", (req,res) => res.send(DSA));
router.get("/os", (req,res) => res.send(OS));
router.get("/cn", (req,res) => res.send(CN));
router.get("/coa", (req,res) => res.send(COA));
router.get("/oops", (req,res) => res.send(OOPS));
router.get("/ps", (req,res) => res.send(PS));
router.post("/submit", (req,res) => console.log("request for question submit"));


module.exports = router;
