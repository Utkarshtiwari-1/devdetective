const themebtn = document.querySelector("[themebutn]");
const themes = document.querySelector(".theme");
const themeimg = document.querySelector(".imagess");
const dateofjoin = document.querySelector("[joindate]");
const descofuser= document.querySelector("[userdesc]");

//backgroundcolor changing
const wrappercontainer = document.querySelector(".wrapper");
const formbar = document.querySelector(".searchbar");
const maincont = document.querySelector(".maincontent");
const data = document.querySelector(".userdata");

const changeblack = document.querySelector(".changewhite");
const changedatablack = document.querySelector(".userdata");
const changebluee = document.querySelector("[changeblue]");
const changebluecol = document.querySelector(".links");
const root = document.documentElement.style;
root.setProperty("--lm-text","white");
themes.innerText = "Light";
themeimg.src = "sun-icon.svg";
function changecolor(){
    if(themes.innerText==="Light")
    {
        wrappercontainer.classList.add("bg1");
        data.classList.add("bg1");
        formbar.classList.add("bg2");
        maincont.classList.add("bg2");
        changebluee.classList.add("bluetext");
        changeblack.classList.add("blacktext");
        changebluecol.classList.add("bluetext");
        changedatablack.classList.add("blacktext");
        themes.classList.add("bluetext");
        themes.innerText = "Dark";
        themeimg.src = "moon-icon.svg";
        dateofjoin.classList.add("bluetext");
        descofuser.classList.add("bluetext");
        root.setProperty("--lm-text","#232343");
           
    }
    else
    {
        wrappercontainer.classList.remove("bg1");
        data.classList.remove("bg1");
        formbar.classList.remove("bg2");
        maincont.classList.remove("bg2");
        changebluee.classList.remove("bluetext");
        changeblack.classList.remove("blacktext");
        changebluecol.classList.remove("bluetext");
        changedatablack.classList.remove("blacktext");
        themes.classList.remove("bluetext");
        themes.innerText = "Light";
        themeimg.src = "sun-icon.svg";
        dateofjoin.classList.remove("bluetext");
        descofuser.classList.remove("bluetext");
        root.setProperty("--lm-text","white");
    }
    

}

themebtn.addEventListener("click",() => {
    changecolor();
});




// api call ;

const url = "https://api.github.com/users/";

let vall = "Utkarshtiwari-1";
const linkedurl = url+vall;
getapicall(linkedurl);

const entereddata = document.querySelector('#username');


function renderuserinfo(jsondata)
{
    const usrimg = document.querySelector("[userimage]");
    usrimg.src = jsondata?.avatar_url;
    const usrname = document.querySelector("[nameofuser]");
    const name = jsondata?.name;
    if(name==null)
    {
        usrname.innerText = "Not availble";
    }
    else
    {
        usrname.innerText = jsondata?.name;
    }
   
    const dojoin = document.querySelector("[joindate]");
    
    const j = jsondata?.created_at;
    dojoin.innerText = `Joined ${j[8]+j[9]} ${j[5]+j[6]} ${j[0]+j[1]+j[2]+j[3]}`;

    const usrlink = document.querySelector("[username]");
    usrlink.href = jsondata?.url;
    usrlink.innerText = jsondata?.login;
    const usrbio = document.querySelector("[userdesc]");
    let descusr = jsondata?.bio;
    if(descusr==null)
    {
        usrbio.innerText = "this user has no bio";
    }
    else{
        usrbio.innerText = descusr;
    }

    const repono = document.querySelector("[noofrepos]");
    repono.innerText = jsondata?.public_repos;

    const follower = document.querySelector("[nooffollowers]");
    follower.innerText = jsondata?.followers;

    const following = document.querySelector("[nooffollowing]");
    following.innerText = jsondata?.following;

    const address = document.querySelector("[useraddress]");
    let loc = jsondata?.location;
    if(loc==null)
    {
        address.innerText = "not availble";
    }
    else
    {
        address.innerText = jsondata?.location;
    }
    

    const biolink = document.querySelector("[userbio]");
    const linked = jsondata?.html_url;
    if(linked==null)
    {
        biolink.innerText = "Not availble";
    }
    else{
        biolink.innerText = `${jsondata?.login}.bio.link`;
        biolink.href = linked;
    }

    const usrtwitter = document.querySelector("[usertwitter]");
    const tweet = jsondata?.twitter_username;
    if(tweet==null)
    {
        usrtwitter.innerText = "Not availble";
    }
    else
    {
        usrtwitter.innerText = jsondata?.login;
        usrtwitter.href = tweet;
    }

    const usrorg = document.querySelector("[userorgnization]");
    const org = jsondata?.company;
    if(org==null)
    {
        usrorg.innerText = "Not availble";
    }
    else{
        usrorg.innerText = org;
    }

   

}


async function getapicall(linkurl)
{
    try{
        let response = await fetch(linkurl);
    let jsondata = await response.json();
    console.log(jsondata);
        
    renderuserinfo(jsondata);
    
    }
    catch(err){
        
        alert("user not found!!");
    }
};
    




formbar.addEventListener("submit", (e) =>{
    e.preventDefault();
    const val = entereddata.value;
    if(val==="")
    {
        return;
    }
    else
    {
        const linkurl = url+val;
        getapicall(linkurl);
    }

})









