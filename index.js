const axios = require("axios");
const staticUrl = "http://localhost:8085/"

let getAllAvatars = async function getAllAvatars() {
    axios.get(staticUrl+"avatar/getAll")
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call Avatar Function")
        });
}

let getAvatarById = async function getAvatardById(id) {
    axios.get(staticUrl+"avatar/get/"+id)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call getAvatarById Function");
        });
}

let createNewAvatar = async function createAvatar(imagePath,avatarName,currentPoints=0,pointsToNextLevel=100,avatarLevel=1) {
    axios.post(staticUrl+"avatar/set/",{
        imagePath: imagePath,
        avatarLevel: avatarLevel,
        avatarName: avatarName,
        currentPoints: currentPoints,
        pointsToNextLevel: pointsToNextLevel,
    })
        .then(response => {
            console.log(response.data.toString())
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call setAvatarFunction Function");
        });
}

let deleteAvatar = async function deleteAvatar(id){
    axios.delete(staticUrl+"avatar/delete"+id)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call deleteAvatar Function");
        });
}

let updateAvatar = async function updateAvatar(id,avatar){
    axios.put(staticUrl+"avatar/update"+id,{
        id: avatar.id,
        name: avatar.name,
        description: avatar.description,
        valueToFinish: avatar.valueToFinish
    })
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call updateAvatar Function");
        });
}

let updateAvatarLevel = async function updateAvatarLevel(avatarName, points, pointsToNextLevel=0){
    axios.put(staticUrl+"avatar/updateAvatarLevel/"+avatarName+"/"+points+"/"+pointsToNextLevel)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(() => {
            console.log("i did try to call updateAvatar Function");
        });
}

module.exports = {

    createNewAvatar: createNewAvatar,
    getAllAvatars: getAllAvatars,
    getAvatarById: getAvatarById,
    deleteAvatar: deleteAvatar,
    updateAvatar: updateAvatar,
    updateAvatarLevel: updateAvatarLevel,
}