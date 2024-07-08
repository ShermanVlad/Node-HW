// Створити папку "baseFolder".
// В ній створити 5 папок, в кожній з яких створити по 5 файлів з розширенням txt.
// Вивести в консоль шляхи до кожного файлу чи папки, також вивести поряд інформацію про те, чи є це файл чи папка.

const path = require('node:path');
const fs = require('node:fs/promises');

const foo = async ()=>{
 const pathToBaseFolder =path.join(__dirname,'baseFolder')
 await fs.mkdir(pathToBaseFolder)

 for (let i=1; i<=5; i++){
  let pathToFolder= path.join(__dirname,'baseFolder', `folder${i}`);
  await fs.mkdir(pathToFolder)

  let statOfFolder = await fs.stat(pathToFolder)
  console.log(pathToFolder, " - is directory: ",statOfFolder.isDirectory())


  for (let j = 1; j <= 5; j++) {
   let pathToFile= path.join(pathToFolder, `file${j}.txt`);
   await fs.writeFile(pathToFile,`This is file ${j} of folder ${i}`)

   let statOfFile=await fs.stat(pathToFile)
   console.log(pathToFile, " - is file: ",statOfFile.isFile())
  }
 }

 // await fs.rm(path.join(__dirname,'baseFolder'), {recursive: true})

}

void foo()