import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx'; 
@Injectable({
  providedIn: 'root'
})
export class XlService {
  fileName= 'ExcelSheet.xlsx';  

  constructor() { }
  exportexcel(json:any[]): void 
    {
       const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(json);
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
       XLSX.writeFile(wb, this.fileName);
    }
}



