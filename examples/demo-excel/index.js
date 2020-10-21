const XLSX = require('xlsx');
const path = require('path');
const { readFile } = require('fs').promises;

(async()=>{
    // let excelPath = path.join(__dirname, "exp22.xlsx").toString();
    let excelPath = path.join(__dirname, "exp2.xls").toString();

    // 获取数据
    const excelBuffer = await readFile(excelPath);

    // 解析数据
    const workbook = XLSX.read(excelBuffer, {
        type: 'buffer',
        cellHTML: false,
    });

    // console.log(workbook.SheetNames);
    const sheet = workbook.Sheets['摄像头信息'];
    // console.log(sheet);
    console.log(XLSX.utils.sheet_to_json(sheet));

})()
