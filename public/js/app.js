$(document).ready(function()
{
  var container = $('.container');
  var numRows = 10;
  var numCols = 10;

  initGrid();
  addClickHandlers();
  function addClickHandlers()
  {
    var cells = $('.cell');
    cells.on('click', changeColor);
  }
  function changeColor()
  {
    var colorClass = ['white', 'red', 'green', 'blue'];
    var cycling = Math.round(Math.random() * (colorClass.length-1));
    var color = colorClass[cycling];
    $(this).removeClass(colorClass.join(' '));
    $(this).addClass(color);
  }
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
