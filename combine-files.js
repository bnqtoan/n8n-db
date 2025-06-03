const fs = require('fs').promises;
const path = require('path');

async function findFiles(dir, extension) {
    let results = [];
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            results = results.concat(await findFiles(fullPath, extension));
        } else if (item.isFile() && path.extname(item.name) === extension) {
            results.push(fullPath);
        }
    }
    return results;
}

async function combineJsonFiles(files) {
    const combined = [];

    for (const file of files) {
        try {
            const content = await fs.readFile(file, 'utf8');
            const jsonContent = JSON.parse(content);
            combined.push({
                file: file,
                content: jsonContent
            });
        } catch (error) {
            console.error(`Error processing ${file}:`, error.message);
        }
    }

    return combined;
}

async function combineMdFiles(files) {
    const combined = [];

    for (const file of files) {
        try {
            const content = await fs.readFile(file, 'utf8');
            combined.push(`\n## File: ${file}\n\n${content}`);
        } catch (error) {
            console.error(`Error processing ${file}:`, error.message);
        }
    }

    return combined.join('\n---\n');
}

async function main() {
    try {
        // Find all JSON and MD files
        const jsonFiles = await findFiles('workflows', '.json');
        const mdFiles = await findFiles('workflows', '.md');
        const mdDocFiles = await findFiles('docs', '.md');

        // Combine JSON files
        const combinedJson = await combineJsonFiles(jsonFiles);
        await fs.writeFile('combined-workflows.json', JSON.stringify(combinedJson, null, 2));
        console.log(`Combined ${jsonFiles.length} JSON files into combined-workflows.json`);

        // Combine MD files
        const combinedMd = await combineMdFiles(mdFiles);
        await fs.writeFile('combined-workflows.md', combinedMd);
        console.log(`Combined ${mdFiles.length} MD files into combined-workflows.md`);

        // combine md doc files
        const combinedMdDoc = await combineMdFiles(mdDocFiles);
        await fs.writeFile('combined-docs.md', combinedMdDoc);
        console.log(`Combined ${mdDocFiles.length} MD files into combined-docs.md`);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

main(); 