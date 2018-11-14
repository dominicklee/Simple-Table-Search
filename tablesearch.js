function searchTable(input, tableId, searchColumn = -1) 
{
    var filter = input.toUpperCase();
	var table = document.getElementById(tableId);
	var rowText;	//temporary var
	
	for (var i = 0, row; row = table.rows[i]; i++) {
		//iterate through rows
		if (searchColumn == -1)	//by default, search all columns
		{
			if (i != 0)	{	//don't perform search on the first row header
				rowText = row.innerHTML;	//get text for the whole row
				if (rowText.toUpperCase().indexOf(filter) > -1) {	//if upper case matches any part of filter
					row.style.display = "";
				}
				else {
					row.style.display = "none";
				}
			}
		}
		else
		{
			if (i != 0)	{	//don't perform search on the first row header
				rowText = row.cells[searchColumn].innerHTML;	//get text for the whole row
				if (rowText.toUpperCase().indexOf(filter) > -1) {	//if upper case matches any part of filter
					row.style.display = "";
				}
				else {
					row.style.display = "none";
				}
			}
		}

		/*
		for (var j = 0, col; col = row.cells[j]; j++) {
		//iterate through columns (optional)
		}  
		*/
	}
	
}