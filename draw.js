function setup() {
  createCanvas(800, 600)
  var fountainData =
    {
        name: "test",
        colors: ["blue","green","red"],
        lifetime: 400,
        angle: [250,290],
        size: [2,8],
        speed: 3,
        speedx: 0.7,
        //40 at .1 probability/step
        //then 200 steps at 10 particles/step
        rate: [40,0.1,200,10],
        x: 0.5,
        y: 0.8
    };
    firstFountain = new Fountain(null, fountainData);
}

function draw() {
  // Repaint background between steps so that items disappear
  background(220)

  // Make fountain
  firstFountain.Draw();
  firstFountain.CreateN();  //must use CreateN for "rate" control
  firstFountain.Step(); // Move everything in the fountain to the next frame (like an animator does)
  noStroke();
  // "length" here will count the number of items in the fountain
  text(firstFountain.length, width/2, 20);
}
