function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results)
{
if(error)
{
    console.error(error);
}
  else
{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
    document.getElementById("result_confidence").innerHTML='accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+ramdom_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+ramdom_number_g+","+random_number_r+")";

    img=document.getElementById('cat')
    img1=document.getElementById('elephant')
    img2=document.getElementById('husky')
    img3=document.getElementById('tiger')
    if(results[0].label=="cat"){
        img.src='cat.png';
        img1.src='elephant.png';
        img2.src='husky.png';
        img3.src='tiger.png';
    }
    else if(results[0].label=="elephant"){
        img.src='cat.png';
        img1.src='elephant.png';
        img2.src='husky.png';
        img3.src='tiger.png';
    }
    else if(results[0].label=="husky"){
        img.src='cat.png';
        img1.src='elephant.png';
        img2.src='husky.png';
        img3.src='tiger.png';
    }else if(results[0].lable=="tiger")
    {
        img.src='cat.png';
        img1.src='elephant.png';
        img2.src='husky.png';
        img3.src='tiger.png';   
    }
    
}
}