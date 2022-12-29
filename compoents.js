const getnavbar=()=>{
    return `<div id="navbar">
    <h1 style="font-weight: bold;
    color: red;">Zomato</h1>
    <h3><a href="index.html">Home</a></h3>
<div class="options">
    <h3><a href="searchrecip.html">|Search Receipe By Name|</a></h3>
    <h3><a href="dayreci.html">|Receipe Of The Day! |</a></h3>
    <h3><a href="randomrecip.html">|Best Recipie/Random Recipie |</a></h3>
    <h3><a href="login.html">Login</a></h3>
    <h3><a href="Signup.html">Signup</a></h3>
</div> </div> `;
}

    // const getdata = async (url) => {
    //     let data = await fetch(url);
    //     let jsondata = await data.json();
    //     console.log(jsondata);
    //     // return jsondata;
    // } 
    let getdata = async (url) => {
        let data = await fetch(url);
        let jsondata = await data.json();
    
        return jsondata;
    }
    
    export {getnavbar,getdata};

