import {error,log} from 'console'
// const { error, log } = require('console');
import res from "express/lib/response.js"
// const res = require('express/lib/response');
import fs from 'fs'
// const fs = require('fs');
import path from 'path'
// const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: (req,res) =>{
        res.render('../views/index')
    },
    notfound: (req,res) =>{
        res.render('../views/not-found')
    }
}

export default mainController
// module.exports = mainController;