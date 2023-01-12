
difference = 0;
rwX = 0;
lwX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(70,50)

    canvas = createCanvas(550, 500);
    canvas.position(670,110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet IS Working!!!!yay!')
}

function draw()
{
    background('#E39FF6');
    textSize(difference);
    fill('#000000');
    text('UT Teams', 50 , 400);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        lwX = results[0].pose.leftWrist.x;
        rwX = results[0].pose.rightWrist.x;
        difference = floor(lwX - rwX);

        console.log("leftwrist = " + lwX + "rightwrist = " + rwX + "difference = "  + difference);

    }
}