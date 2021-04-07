
    const Display = ({ data }) => {
      return (
        <div>
          <center><h1>Todays Image</h1></center>
          {[data].map((d,idx) => (
            <div key={idx}  >
              <div  >
                <h5 class="card-title">{d.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Eatrh day - {d.date}</h6>
                <p class="card-text">{d.explanation}</p>
                <img src={d.hdurl} width="50%" height="50%"></img>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Display