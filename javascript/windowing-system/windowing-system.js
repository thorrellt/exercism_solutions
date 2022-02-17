// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size {
  constructor(width = 80, height = 60){
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }

  move(xShift, yShift){
    this.x = xShift;
    this.y = yShift;
  }
  
}

export class ProgramWindow {
  constructor(){
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize (newSize){
    let x = newSize.width < 1 ? 1 : newSize.width ;
    let y = newSize.height < 1 ? 1 : newSize.height ;
    console.log('x: ' + x);
    
    const xCondition = x + this.position.x > this.screenSize.width;
    const yCondition = y + this.position.y > this.screenSize.height;

    this.size.width = xCondition ? this.screenSize.width - this.position.x : x;
    this.size.height = yCondition ? this.screenSize.height - this.position.y : y;
    
  }

  
  move (newPos){
    let x = newPos.x < 0 ? 0 : newPos.x;
    let y = newPos.y < 0 ? 0 : newPos.y;

    const xCondition = x + this.size.width > this.screenSize.width;
    const yCondition = y + this.size.height > this.screenSize.height;

    this.position.x = xCondition ? this.screenSize.width - this.size.width : x;
    this.position.y = yCondition ? this.screenSize.height - this.size.height : y;
    
  }
}

export function changeWindow (programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move (new Position(100,150));

  console.log ('width: ' + programWindow.size.width);
  
  return programWindow;
}