$(document).ready(function()
{
  var container = $('.container');
  var numRows = 10;
  var numCols = 10;

  initGrid();
  function initGrid()
  {
    for (var i = 0; i < numRows; i+=1)
    {
      var row = $('<div></div>');
      for (var j = 0; j < numCols; j+=1)
      {
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);
      }
      container.append(row);
    }
  }
});
