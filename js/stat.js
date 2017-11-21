'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var getMaximumTime = function () {
    var max = -1;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  };

  var histogramheight = 150;
  var step = histogramheight / getMaximumTime();
  var barWidth = 40;
  var indent = 50;
  var initialX = 140;
  var initialY = 240;
  var lineHeight = 18;

  var getPlayerName = function (count) {
    return ctx.fillText(names[count], initialX + (barWidth + indent) * count, initialY + lineHeight);
  };
  var getPlayerTime = function (count) {
    return ctx.fillText(Math.round(times[count]), initialX + (barWidth + indent) * count, initialY - times[count] * step - lineHeight / 2);
  };

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(initialX + (barWidth + indent) * i, initialY - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    getPlayerName(i);
    getPlayerTime(i);
  }
};
