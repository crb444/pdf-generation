import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import pdf from 'html-pdf'
import path from 'path'

import {pdfTemplate} from './templates/template1.js'; 


const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


// PDF generation into a file - maybe this can be saved somewhere later? 


app.post('/create-pdf', (req,res) => {
    console.log(req.body); 
    pdf.create(pdfTemplate(req.body), {}).toFile('generated_pdf.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve()); 
    })
    
});

app.get('/fetch-pdf', (req,res) => {
    res.sendFile(`${__dirname}/generated_pdf.pdf`)
})

// get - send the generated pdf back - maybe delete the temporary file afterwards? 

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})