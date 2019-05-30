# Simple Table Search
Filter HTML table content with Javascript. Have a big HTML table with frequently accessed rows? Search no further! Use this simple table search to filter your rows.

## Installation ##

Download this repository and upload the `tablesearch.js` and `searchicon.png` to a subfolder on your web server.

## Usage ##

Refer to the `index.html` page for examples. To use this JS function, you simply need the following:

- An HTML table with an id (e.g. list) with some rows and columns
- A textbox for filterning
- Add this code on the input textbox like this: `onkeyup="searchTable(this.value, 'list')"`

## Filter in a column ##

For example, if you want to search for last names, which are in column 2 (counting from 0), you can search for items in a specific column like this: `onkeyup="searchTable(this.value, 'list', 2)"`

If you want to search in two specific columns (e.g. first and last name) which are respectively in columns 1 and 2, then you can use more specific arguments: `onkeyup="searchTable(this.value, 'list', 1, 2)"`

Likewise, if you want to search in three specific columns (e.g. first, middle, and last name) which are respectively in columns 1, 2, and 3, then you can use this argument: `onkeyup="searchTable(this.value, 'list', 1, 2, 3)"`

## Sorting table rows numerically

An added feature is the `tablesort.js` which has been added. This will allow you to sort through a table on the column of index 0. Obviously, the column index can be changed as well as the table name as needed. Use an argument like: `sortTable("myTable", 0)`