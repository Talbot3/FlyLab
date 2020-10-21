const ExcelJS = require('xlsx');
const path = require('path');
const { readFile } = require('fs').promises;

(async()=>{
    // let excelPath = path.join(__dirname, "exp22.xlsx").toString();
    let excelPath = path.join(__dirname, "exp2.xls").toString();

    // 获取数据
    const excelBuffer = await readFile(excelPath);

    // 解析数据
    const result = ExcelJS.read(excelBuffer, {
        type: 'buffer',
        cellHTML: false,
    });

    console.log(result);

    // let excelPath = path.join(__dirname, "myExcelFile.xlsx").toString();

    // let excelPath = path.join(__dirname, "./上海董家渡融创壹号院项目视频监控汇总.xls").toString();

    // const workbook = new ExcelJS.stream.xlsx.WorkbookReader(excelPath);
    // for await (const { eventType, value } of workbook.parse()) {
    //     switch (eventType) {
    //         case 'shared-strings':
    //         // value is the shared string
    //         case 'worksheet':
    //         // value is the worksheetReader
    //         case 'hyperlinks':
    //         // value is the hyperlinksReader
    //     }
    // }
    // const workbook = new ExcelJS.Workbook();
    // workbook.calcProperties.fullCalcOnLoad = true;
    // workbook.views = [
    //     {
    //         x: 0, y: 0, width: 10000, height: 20000,
    //         firstSheet: 0, activeTab: 1, visibility: 'visible'
    //     }
    // ]
    // await workbook.xlsx.readFile(path.join(__dirname, "./myExcelFile.xlsx").toString());

    // console.log(excelPath);
    // await workbook.xlsx.readFile(path.join(__dirname, "./上海董家渡融创壹号院项目视频监控汇总.xls").toString());
    
    // workbook.eachSheet((worksheet, sheetId) => {
    //     console.log(worksheet, sheetId);
    // });

    // const cameraWorksheet = workbook.getWorksheet('摄像头信息');
    // console.log(cameraWorksheet);

    // const id1Worksheet = workbook.getWorksheet(1);
    // console.log(id1Worksheet);

})()
