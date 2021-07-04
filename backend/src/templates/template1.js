// we would add styling for the PDF here 
export const pdfTemplate = ({fName, lName, dob}) => {
    return `
    <!DOCTYPE html>
<html>
    <head>
        <title>Basic PDF</title>
    </head>
    <body>
    <p>This is where the pdf template would go in HTML</p>
    <p>The first name of the patient is: ${fName}</p>
    <p>The last name of the patient is: ${lName}</p>
    <p>The date of birth of the patient is: ${dob}</p>
    </body>
</html>`;
}

