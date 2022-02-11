const GOTURL = "https://api.got.show/api/show"

export const getCharacters = () =>{
    return fetch(`${GOTURL}/characters/`).then((res) =>{
        if(res.ok){
            return res.json();
        }else{
            return [];
        }
    })
}

export const getCharactersByName = (name) =>{
    return fetch(`${GOTURL}/characters/${name}`).then((res) =>{
        if(res.ok){
            return res.json();
        }else{
            return [];
        }
    })
}

export const getHouses = () =>{
    return fetch(`${GOTURL}/houses/`).then((res) =>{
        if(res.ok){
            return res.json();
        }else{
            return [];
        }
    })
}

export const getHousesByName = (name) =>{
    return fetch(`${GOTURL}/houses/${name}`).then((res) =>{
        if(res.ok){
            return res.json();
        }else{
            return [];
        }
    })
}