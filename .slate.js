slate.configAll({
  defaultToCurrentScreen: true,
  nudgePercentOf: 'screenSize',
  resizePercentOf: 'screenSize',
  orderScreensLeftToRight: true
});

var halfLeft = slate.operation('push', {
  direction: 'left',
  style: 'bar-resize:screenSizeX/2'
});

var halfRight = slate.operation('push', {
  direction: 'right',
  style: 'bar-resize:screenSizeX/2'
});

var fullScreen = slate.operation('move', {
  x: 'screenOriginX',
  y: 'screenOriginY', 
  width: 'screenSizeX',
  height: 'screenSizeY'
});

slate.bind('left:ctrl;cmd', halfLeft)
slate.bind('right:ctrl;cmd', halfRight)
slate.bind('up:ctrl;cmd', fullScreen)
