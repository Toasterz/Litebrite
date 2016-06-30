$(document).ready(function()
{
  var container = $('.container');
  var valBtn = $('#getVals');

  valBtn.on('click', getVals);
  var numRows;
  var numCols;

  function getVals()
  {
    var numRows = document.getElementById("inputRows").value;
    var numCols = document.getElementById("inputCols").value;
    initGrid(numRows, numCols);
  }


  function initGrid(numRows, numCols)
  {
    container.html('');
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
  function changeColor()
  {
    var colorClass = ['white', 'red', 'green', 'blue'];
    var cycling = Math.round(Math.random() * (colorClass.length-1));
    var color = colorClass[cycling];
    $(this).removeClass(colorClass.join(' '));
    $(this).addClass(color);
    }
  addClickHandlers();
  function addClickHandlers()
  {
    var cells = $('.cell');
    cells.on('click', changeColor);
  }

});
