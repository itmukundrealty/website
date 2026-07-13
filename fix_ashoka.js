const fs = require('fs');
const path = require('path');

const updateAshoka = () => {
    const filePath = path.join(__dirname, 'src/utils/floorMapAshoka.js');
    let content = fs.readFileSync(filePath, 'utf8');

    // we will split by '{' and if it contains title and pdfPath (or if it doesn't we add it)
    const blocks = content.split('title:');
    for (let i = 1; i < blocks.length; i++) {
        const titleMatch = blocks[i].match(/^\s*"([^"]+)"/);
        if (titleMatch) {
            const title = titleMatch[1];
            let newPdf = '';
            
            // Generate the proper name: "Mukund Realty - Ashoka - [Floor Name] - Floorplan.pdf"
            newPdf = `/floorPlans/ashoka/pdf/Mukund Realty - Ashoka - ${title} - Floorplan.pdf`;

            if (blocks[i].includes('pdfPath:')) {
                blocks[i] = blocks[i].replace(/pdfPath:\s*"([^"]+)"/, `pdfPath: "${newPdf}"`);
            } else {
                // If it doesn't have pdfPath, insert it after planImage:
                blocks[i] = blocks[i].replace(/(planImage:\s*"[^"]+",)/, `$1\n    pdfPath: "${newPdf}",`);
            }
        }
    }
    
    fs.writeFileSync(filePath, blocks.join('title:'));
    console.log("Updated Ashoka");
};

updateAshoka();
