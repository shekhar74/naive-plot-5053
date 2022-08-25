const Fourthdiv=(props)=>{
    return (
        <>
        <div style={{ display: "flex", margin: "3.5%" }}>
    
        <div style={{ flex: 1 ,height:"120px"}}>
          <img style={{ width: "auto", height:"auto" }} src={props.img} alt="" />
        </div>
        <div style={{ flex: 2 ,padding:"0% 3%", textAlign:"left"}}>
          <h6 className="tile" style={{height:"100px"}}>{props.heading}</h6>
          <h3 >{props.category}</h3>
        </div>
      </div>
    </>
    )
}
export default Fourthdiv