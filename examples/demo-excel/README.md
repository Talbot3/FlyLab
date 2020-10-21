# OFFICE OPEN XML OVERVIEW

- ooxml标准 ecma-376 https://www.ecma-international.org/publications/standards/Ecma-376.htm
- http://officeopenxml.com/anatomyofOOXML-xlsx.php


## 重要概念摘要
> 摘要来自 http://officeopenxml.com/SScontentOverview.php
```
The Grid
A grid of cells (or a "cell table") is the most common type or worksheet. Cells can contain text, booleans, numbers, dates, and formulas. It is important to understand from the outset that most text values are not stored within a worksheept part. In an effort to minimize duplication of values, a cell value that is a string is stored separately in the shareStrings part.(There is an exception to this generalization, however. A cell can be of type inlineStr, in which case the string is stored in the cell itself, within an is element.) All other cell values--booleans, numbers, dates, and formulas (as well as the values of formulas) are stored within the cell.

Some properties for the sheet are at the beginning of the root <worksheet> element. The number and sizes of the columns of the grid are defined within a <cols>. And then the core data of the worksheet follows within the <sheetData> element. The sheet data is divided into rows (<row>), and within each row are cells (<c>). Rows are numbered or indexed, beginning with 1, with the r attribute (e.g., row r="1"). Each cell in the row also has a reference attribute which combines the row number with the column to make the reference attribute (e.g., <c r="D3">). If a cell within a row has no content, then the cell is omitted from the row definition.
```



```
Tables
Data on a worksheet can be organized into tables. Tables help provide structure and formatting to the data by having clearly labeled columns, rows, and data regions. Rows and columns can be added easily, and filter and sort abilities are automatically added with the drop down arrows.

```