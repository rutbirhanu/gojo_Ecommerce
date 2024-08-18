const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const userModel=require("../model/user")
require("dotenv").config()

