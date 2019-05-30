function sortTable(tableID, columnIndex = 0) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(tableID);	//change to table name
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[columnIndex];
      y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
	  //convert string to time
	  var xDate = new Date(x.innerHTML);
	  var yDate = new Date(y.innerHTML);
	  xUnix = xDate.getTime()/1000;
	  yUnix = yDate.getTime()/1000;
      //check if the two rows should switch place:
      if (Number(xUnix) > Number(yUnix)) {	//< sign for large to small, > for small to large
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function reverseTableRows(tableId) {
    var table = document.getElementById(tableId),
        newTbody = document.createElement('tbody'),
        oldTbody = table.tBodies[0],
        rows = oldTbody.rows,
        i = rows.length - 1;

    while (i >= 0) {
        newTbody.appendChild(rows[i]);
        i -= 1;
    }
    oldTbody.parentNode.replaceChild(newTbody, oldTbody);
}