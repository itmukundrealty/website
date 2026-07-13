const fs = require('fs');
const path = require('path');

const updateKedar = () => {
    const filePath = path.join(__dirname, 'src/utils/floorMapKedar.js');
    let content = fs.readFileSync(filePath, 'utf8');

    // we will split by '{' and if it contains title and pdfPath, we replace pdfPath
    const blocks = content.split('title:');
    for (let i = 1; i < blocks.length; i++) {
        const titleMatch = blocks[i].match(/^\s*"([^"]+)"/);
        if (titleMatch) {
            const title = titleMatch[1];
            let newPdf = '';
            if (title === "Ground Floor") newPdf = "/floorPlans/kedar/pdf/Mukund Realty - Kedar- Ground Floor - Floorplan.pdf";
            else if (title === "First Floor") newPdf = "/floorPlans/kedar/pdf/Mukund Realty - Kedar- First Floor - Floorplan.pdf";
            else if (title === "Second Floor") newPdf = "/floorPlans/kedar/pdf/Mukund Realty - Kedar- Second Floor - Floorplan.pdf";
            else if (title === "Third Floor") newPdf = "/floorPlans/kedar/pdf/Mukund Realty - Kedar- Third Floor - Floorplan.pdf";
            else if (title === "Fifteenth Floor" || title === "Fiftheenth Floor" || title === "15th Floor" || title.includes("Fifteenth")) newPdf = "/floorPlans/kedar/pdf/Mukund Realty - Kedar- Fiftheenth Floor - Floorplan.pdf";
            else if (title === "Sixteenth Floor" || title.includes("Sixteenth")) newPdf = "/floorPlans/kedar/pdf/Mukund Realty - Kedar- Sixteenth Floor - Floorplan.pdf";
            else if (title === "Terrace Floor" || title === "Lower Terrace") newPdf = "/floorPlans/kedar/pdf/Mukund Realty - Kedar- Terrace Floor - Floorplan.pdf";
            else if (title === "Upper Terrace" || title === "Upper Terrace Floor") newPdf = "/floorPlans/kedar/pdf/Mukund Realty - Kedar- Upper Terrace Floor - Floorplan.pdf";
            else newPdf = "/floorPlans/kedar/pdf/Mukund Realty - Kedar- Typical Floor - Floorplan.pdf";

            blocks[i] = blocks[i].replace(/pdfPath:\s*"([^"]+)"/, `pdfPath: "${newPdf}"`);
        }
    }
    
    fs.writeFileSync(filePath, blocks.join('title:'));
    console.log("Updated Kedar");
};

updateKedar();
