
mp.events.addCommand('pos',(player) =>{
    let p = player.position;
    console.log(`x: ${p.x}, y: ${p.y}, z: ${p.z}`);
});




let marker = mp.markers.new(1, new mp.Vector3(-406.6018981933594,1191.129150390625,323.6418151855469), 2,{
    color: [255,0,0,128],
    visible: true,
    dimension: 0
});



mp.labels.new("Работа дольнобойщиком",new mp.Vector3(-406.6018981933594,1191.129150390625,325.6418151855469),
{
    los: false,
    font: 0,
    drawDistance: 100,
    dimension: 0


});

let someColshape = mp.colshapes.newSphere(-406.6018981933594,1191.129150390625,323.6418151855469,3);



function playerEnterColshapeHandler(player, shape) {
    if (shape == someColshape) {
        console.log(" вошел в триггер!");

        
    }
}  

mp.events.add("playerEnterColshape", playerEnterColshapeHandler);





